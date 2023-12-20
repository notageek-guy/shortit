import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/components/providers/auth-provider";
const APP_TITLE = "ShortIt";
const DESCRIPTION =
  "ShortId is a URL shortener which allows user to shorten the url and share or copy shortened URLs";

export const metadata: Metadata = {
  metadataBase: new URL(""),
  title: APP_TITLE,
  description: DESCRIPTION,
  creator: "Manish Kumar",
  applicationName: APP_TITLE,
  openGraph: {
    title: APP_TITLE,
    type: "website",
    url: "/",
    description: DESCRIPTION,
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
