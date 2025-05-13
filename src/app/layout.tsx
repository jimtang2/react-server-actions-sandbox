import type { Metadata } from "next";
import Link from "next/link"
import "./globals.css";

export const metadata: Metadata = {
  title: "Server Actions Example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <div className="flex flex-row gap-4 p-4">
          <Link href="/examples/1">1</Link>
          <Link href="/examples/2">2</Link>
          <Link href="/examples/3">3</Link>
          <Link href="/examples/4">4</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
