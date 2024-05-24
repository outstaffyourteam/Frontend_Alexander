import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Webz",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${roboto.variable} min-w-[430px]`}
      >
        {children}
      </body>
    </html>
  );
}
