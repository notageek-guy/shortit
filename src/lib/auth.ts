import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma";
import { NextAuthOptions, getServerSession } from "next-auth";

import EmailProvider from "next-auth/providers/email";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET!,
  
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/auth",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
} satisfies NextAuthOptions;

export const getAuthSession = async () => await getServerSession(authOptions);
