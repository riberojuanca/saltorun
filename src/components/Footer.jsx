import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <section className="h-fit flex flex-col items-center justify-center p-4">
      <article className="grid grid-cols-2">
        <Link href="">
          <p>Inscribirse</p>
        </Link>
        <Link href="">
          <p>Reglamento</p>
        </Link>
        <Link href="">
          <p>Instagram</p>
        </Link>
        <Link href="">
          <p>Facebook</p>
        </Link>
      </article>
      <Link href={"https://luzbelito.com"}>🕯️Luzbelito</Link>
    </section>
  );
}

export default Footer;
