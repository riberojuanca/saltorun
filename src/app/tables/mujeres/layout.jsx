import "@/styles/globals.css";
import MujeresMenu from "@/components/MujeresMenu";

export const metadata = {
  title: "Posiciones Mujeres",
  description: "Campeonato Salto Run 2024", // a default is required when creating

  openGraph: {
    title: "Posiciones Mujeres",
    description: "General y por Categoría",
    url: "https://saltorun.vercel.app/",
    images: {
      url: "/og-mujeres.png",
      width: "800",
      height: "600",
    },
  },
};

export default function HombresLayout({ children }) {
  return (
    <article className={` text-white`}>
      <MujeresMenu />
      {children}
    </article>
  );
}
