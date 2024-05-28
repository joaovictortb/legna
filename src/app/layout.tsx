import ClientProvider from "@/hooks/ClientProvider";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legna",
  description: "Painel Administrador - Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${workSans.className}`}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
