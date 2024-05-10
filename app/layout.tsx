import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D Notion",
  description: "Note app with spices",
  icons:{
    icon:[
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-16x16.png",
        href: "/favicon-16x16.png",
      },{
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-16x16.png",
        href: "/favicon-16x16.png",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
