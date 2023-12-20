import { getAuthSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getAuthSession();
  if (!session) {
    return NextResponse.json({ message: "unauthorized" });
  }

  const slug = params.id;
  const url = await req.json();

  try {
    const existingURL = await prisma.link.findFirst({ where: { url } });

    if (existingURL) {
      const dynamicUrl = `${process.env.NEXTAUTH_URL}${existingURL.linkId}`;
      return NextResponse.json({
        message: "URL already exists",
        url: dynamicUrl,
        linkId: existingURL.linkId, // Include linkId in the response
      });
    }

    const createdLink = await prisma.link.create({
      data: {
        url: url,
        linkId: slug,
      },
    });

    if (!createdLink) {
      console.error("Error creating link");
      return NextResponse.json({ message: "Error creating link" });
    }

    const linkUrl = `${process.env.NEXTAUTH_URL}${createdLink.linkId}`;
    return NextResponse.json({
      status: "OK",
      url: linkUrl,
      linkId: createdLink.linkId, // Include linkId in the response
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "An error occurred" });
  }
}
