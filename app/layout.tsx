import "./css/style.css";

import { Bricolage_Grotesque } from "next/font/google";

import Header from "@/components/ui/header";


const inter = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const runtime = "edge";

export const metadata = {
  title: "Keensight Analytics - Sharpened Intuition",
  description: "Innovative AI, Complete Software.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
      </head>

      <body
        className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
