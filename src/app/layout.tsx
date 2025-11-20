import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shane Alam | Full Stack Developer (MERN & NestJS)",
  description: "Portfolio of Shane Alam, a Senior Software Developer specializing in Scalable Web Apps, AWS Cloud Architecture, and Next.js. Expert in MERN stack, NestJS, and Multi-tenant SaaS.",
  keywords: [
    "Shane Alam", 
    "Full Stack Developer", 
    "MERN Stack", 
    "NestJS Developer", 
    "AWS Certified", 
    "Next.js Portfolio", 
    "React Developer India", 
    "Backend Engineer"
  ],
  authors: [{ name: "Shane Alam" }],
  openGraph: {
    title: "Shane Alam | Full Stack Developer",
    description: "Building scalable, user-focused applications with MERN, NestJS, and AWS.",
    url: "https://your-portfolio-url.com",
    siteName: "Shane Alam Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}