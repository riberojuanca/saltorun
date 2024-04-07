import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "@/styles/globals.css";
import HombresMenu from "@/components/HombresMenu";

export const metadata = {
  title: "Posiciones Hombres",
  description: "Campeonato Salto Run 2024", // a default is required when creating
  metadataBase: new URL("https://saltorun.vercel.app/"),
  openGraph: {
    title: "Posiciones Hombres",
    description: "General y por Categoría",
    url: "https://saltorun.vercel.app/tables/hombres",
    images: {
      url: "/oghombres.png",
      width: "1080",
      height: "900",
      quality: 100,
    },
  },
};

export default function HombresLayout({ children }) {
  return (
    <article className={`bg-zinc-800 text-white {inter.className}`}>
      <HombresMenu />
      {children}
    </article>
  );
}
