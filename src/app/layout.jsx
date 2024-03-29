import "@/styles/globals.css";
import { Inter } from "next/font/google";
// import "./globals.css";
import Menu from "@/components/Menu";
import MenuBottom from "@/components/MenuBottom";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-zinc-800 text-white ${inter.className}`}>
        <Menu />
        {children}
        {/* <MenuBottom /> */}
      </body>
    </html>
  );
}
