import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chromium Industries LLC | Mike Tannura",
  description: "Digital business card for Mike Tannura, President of Chromium Industries LLC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-100 font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
