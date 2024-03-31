import React from "react";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

function Footer() {
  return (
    <section className=" text-center text-zinc-500 h-fit flex flex-col items-center justify-center my-4">
      <article className="text-base flex items-center justify-center gap-4">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeUJR14q0nf-XY6hPt6LjMKGztsmWYwF1FakTSuKh_3WmuUJw/viewform?pli=1"
          target="_blank"
          rel="noopener"
        >
          Inscribirse
        </Link>
        <Link href="/reglamento">Reglamento</Link>
        <Link href="/deslinde">Deslinde</Link>
      </article>
      <article className="text-base flex items-center justify-center gap-4">
        <Link
          href="https://www.instagram.com/saltorun/"
          target="_blank"
          rel="noopener"
        >
          Instagram
        </Link>
        <Link
          href="https://www.facebook.com/campeonatosaltorun"
          target="_blank"
          rel="noopener"
        >
          Facebook
        </Link>
      </article>
      {/* <hr className="w-80 my-6 opacity-5" /> */}
      <div className=" w-full ms-auto me-auto mt-4 mb-6 ">
        <small>SALTO RUN © POR </small>
        <Link
          className="mr-auto grayscale hover:grayscale-0"
          href={"https://luzbelito.com"}
        >
          🕯️<small>LUZBELITO</small>
        </Link>
      </div>
    </section>
  );
}

export default Footer;
