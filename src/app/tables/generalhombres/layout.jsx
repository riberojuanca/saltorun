import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "@/styles/globals.css";
import HombresMenu from "@/components/HombresMenu";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function HombresLayout({ children }) {
  return (
    <article className={`bg-zinc-600 text-white {inter.className}`}>
      <HombresMenu />
      {children}
    </article>
  );
}
