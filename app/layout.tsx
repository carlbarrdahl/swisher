import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swisher",
  description: "Simple menus for Swish payments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto max-w-screen-sm h-[calc(100dvh)] flex flex-col">
          <div className="min-h-[2px] bg-gradient-to-r from-cyan-400 via-purple-400  to-pink-500 w-full" />
          {children}
        </main>
      </body>
    </html>
  );
}
