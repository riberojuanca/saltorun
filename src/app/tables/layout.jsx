import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "@/styles/globals.css";
import TablesMenu from "@/components/TablesMenu";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function TablesLayout({ children }) {
  return (
    <article
      className={`ms-auto me-auto max-w-5xl  text-white {inter.className}`}
    >
      <TablesMenu />
      {children}
    </article>
  );
}
