import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-zinc-800 text-white {inter.className}`}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
