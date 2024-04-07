import "@/styles/globals.css";
import { Inter, Atkinson_Hyperlegible } from "next/font/google";
// import "./globals.css";
import Menu from "@/components/Menu";
import MenuBottom from "@/components/MenuBottom";
import Footer from "@/components/Footer";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: {
    template: "Salto Run",
    default: "Salto Run",
    description: "Campeonato Salto Run 2024", // a default is required when creating a template
    keywords: ["Salto Run", "Atletas Salto Uruguay"],
  },
  icons: {
    icon: "/SaltoRunfavicon.png",
  },
  metadataBase: new URL("https://saltorun.vercel.app/"),
  openGraph: {
    title: "Salto Run",
    description: "Campeonato Salto Run 2024",
    url: "https://saltorun.vercel.app/",
    images: {
      url: "/ogsaltorun.png",
      width: "1080",
      height: "900",
      quality: 100,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="w-full h-full" lang="es">
      <body className={` bg-zinc-800 text-white ${atkinson.className}`}>
        <Menu />
        {children}
        {/* <MenuBottom /> */}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
