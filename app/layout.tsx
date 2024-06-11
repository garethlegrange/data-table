import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metaversal Dashboard",
  description: "Metaversal Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-dvh`}>
        <Providers>
          <Header />
          <main className="grow flex flex-row gap-6">
            <Sidebar />
            <Dashboard>{children}</Dashboard>
          </main>
        </Providers>
      </body>
    </html>
  );
}
