import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://swisher.vercel.app"),
  title: "Swisher",
  description: "Simple menus for Swish payments",
  applicationName: "Swisher",
  referrer: "origin-when-cross-origin",
  keywords: ["Swisher", "Swish", "Open-source", "Typescript"],
  creator: "Carl Barrdahl",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
