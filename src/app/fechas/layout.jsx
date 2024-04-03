import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "@/styles/globals.css";
import FechasMenu from "@/components/FechasMenu";

export const metadata = {
  title: "Fechas | Salto Run",
  description: "Tablas de posiciones fecha a fecha",
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
