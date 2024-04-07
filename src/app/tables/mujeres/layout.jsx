import "@/styles/globals.css";
import MujeresMenu from "@/components/MujeresMenu";

export const metadata = {
  title: "Posiciones Mujeres",
  description: "Campeonato Salto Run 2024", // a default is required when creating

  metadataBase: new URL("https://saltorun.vercel.app/"),
  openGraph: {
    title: "Posiciones Mujeres",
    description: "General y por Categoría",
    url: "https://saltorun.vercel.app/tables/mujeres",
    images: {
      url: "/ogmujeres.png",
      width: "1080",
      height: "900",
      quality: 100,
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
