import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: " Next App",
  description: " next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="p-6 text-2xl border-b">NavBar</div>
        {children}
      </body>
    </html>
  );
}
