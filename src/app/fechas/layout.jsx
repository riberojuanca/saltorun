import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "@/styles/globals.css";
import FechasMenu from "@/components/FechasMenu";

export const metadata = {
  title: "Posiciones | Fechas",
  description: "Campeonato Salto Run 2024", // a default is required when creating

  metadataBase: new URL("https://saltorun.vercel.app/"),
  openGraph: {
    title: "Posiciones | Fechas",
    description: "Posiciones fecha a fecha, Campeonato Salto Run 2024",
    url: "https://saltorun.vercel.app/fechas",
    images: {
      url: "/og-fechas.png",
      width: "800",
      height: "600",
    },
  },
};

export default function FechasLayout({ children }) {
  return (
    <article className={`bg-zinc-800 text-white {inter.className}`}>
      {/* <HombresMenu /> ACA VA EL MENU DE FECHAS*/}
      <FechasMenu />
      {children}
    </article>
  );
}
