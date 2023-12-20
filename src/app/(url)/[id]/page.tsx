import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

async function Home({ params }: { params: { id: string } }) {
  const id = params.id;
  const data = await prisma.link.findUnique({
    where: {
      linkId: id,
    },
  });

  if (data) {
    redirect(data.url);
  }
  return <></>;
}

export default Home;
