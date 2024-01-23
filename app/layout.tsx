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
          {children}
        </main>
      </body>
    </html>
  );
}
