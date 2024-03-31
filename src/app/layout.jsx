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
  title: "Salto Run",
  description: "Campeonato Salto Run 2024",
  icons: {
    icon: "/saltorun24.png",
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
