import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spectral Divide",
  description:
    "A cinematic horror diptych: translucent specter and sinister human visage bathed in shadow."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-abyss text-white antialiased">{children}</body>
    </html>
  );
}
