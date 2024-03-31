import "@/styles/globals.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" w-full ms-auto me-auto">
      <h1 className="ms-auto me-auto  text-center p-6 font-semibold w-full h-full text-4xl z-40">
        CAMPEONATO SALTO RUN 2024
      </h1>
      <div className=" relative w-full h-2/3 top-0">
        <Image
          className="w-full"
          src={"/portadasaltorundesktop.jpg"}
          alt="Portada Salto Run foto de largada en calle Uruguay"
          width={1920}
          height={1080}
          quality={100}
        ></Image>
        <div className="absolute top-0 left-0 w-full h-full opacity-60 bg-neutral-950 backdrop-blur-10 z-30"></div>
      </div>
      <section className="p-8">
        <h2 className=" font-semibold text-4xl text-cyan-200">LARGAMOS</h2>
        <h3 className=" font-semibold text-2xl">
          ¡SALTO RUN TE ESPERA, COMO CADA AÑO CON NUEVAS EMOCIONES!
        </h3>
        <div className="my-6">
          <p>
            ¿Te apasiona el atletismo? ¿Disfrutas de los retos y la superación
            personal?
          </p>
          <p>
            Un evento único te espera en Salto para vivir una experiencia
            inolvidable junto a corredores de varios países.
          </p>
          <br />
          <h3 className="text-xl font-semibold text-cyan-100">
            CORRÉ A INSCRIBIRTE
          </h3>
          <p>
            Prepárate para vivir una aventura atlética llena de adrenalina y
            emociones. No te quedes afuera. Inscríbete y sé parte de esta gran
            fiesta del deporte salteño.
          </p>
          <Link
            className="underline text-cyan-100 text-base"
            href={"/inscribirse"}
          >
            COMPLETAR FORMULARIO
          </Link>
        </div>
        <h3 className="text-xl font-semibold text-cyan-100">AGENDA</h3>
        <p>
          Ya tenemos fechas para lo que serán 7 etapas para este campeonato.
        </p>
        <h3 className=" mb-2 text-xl font-semibold text-cyan-100">
          CRONOGRAMA DE FECHAS
        </h3>
        <section className="flex flex-col gap-4">
          <article className=" bg-slate-800 rounded-sm p-1 grid grid-cols-3 gap-2">
            <div className=" rounded-sm  flex items-center justify-center text-2xl font-semibold">
              <h4>FECHA 1</h4>
            </div>
            <div className=" bg-white text-black rounded-sm p-2 col-span-2 text-sm">
              <ul>
                <li>Fecha:Domingo 21 de Abril</li>
                <li>Lugar: Salto Rowing Club</li>
                <li>Distancia: 5km competitiva y 3km participativa</li>
              </ul>
            </div>
          </article>
          <article className=" bg-cyan-200  rounded-sm p-1 grid grid-cols-3">
            <div className="text-black flex items-center justify-center text-xl font-semibold">
              <h4>FECHA 2</h4>
            </div>
            <div className="bg-white text-black rounded-sm p-2 col-span-2 text-sm">
              <ul>
                <li>Fecha:Domingo 12 de Mayo</li>
                <li>Lugar: Isla Bonita y/o aeropuerto</li>
                <li>Distancia: 6km competitiva y 3km participativa</li>
              </ul>
            </div>
          </article>
          <article className="bg-slate-800 rounded-sm p-1 grid grid-cols-3">
            <div className="flex items-center justify-center text-xl font-semibold">
              <h4>FECHA 3</h4>
            </div>
            <div className=" bg-white text-black rounded-sm p-2 col-span-2 text-sm">
              <ul>
                <li>Fecha:Domingo 16 de Junio</li>
                <li>Lugar:Parque del Lago</li>
                <li>Distancia:7km competitiva y 3km participativa</li>
              </ul>
            </div>
          </article>
          <article className="bg-cyan-200 rounded-sm p-1 grid grid-cols-3">
            <div className="text-black flex items-center justify-center text-xl font-semibold">
              <h4>FECHA 4</h4>
            </div>
            <div className="bg-white text-black rounded-sm p-2 col-span-2 text-sm">
              <ul>
                <li>Fecha: Domingo 21 de Julio</li>
                <li>Lugar: Hipódromo</li>
                <li>Distancia: 8km competitiva y 3km participativa</li>
              </ul>
            </div>
          </article>
          <article className="bg-slate-800 rounded-sm p-1 grid grid-cols-3">
            <div className="flex items-center justify-center text-xl font-semibold">
              <h4>FECHA 5</h4>
            </div>
            <div className="bg-white text-black rounded-sm p-2 col-span-2 text-sm">
              <ul>
                <li>Fecha:Domingo 18 de Agosto</li>
                <li>Lugar: Complejo Villa España</li>
                <li>Distancia: 8km competitiva y 3k participativa</li>
              </ul>
            </div>
          </article>
          <article className="bg-cyan-200 rounded-sm p-1 grid grid-cols-3">
            <div className="text-black flex items-center justify-center text-xl font-semibold">
              <h4>FECHA 6</h4>
            </div>
            <div className="bg-white text-black rounded-sm p-2 col-span-2 text-sm">
              <ul>
                <li>Fecha:Domingo 15 de Septiembre</li>
                <li>Lugar: Polo (Costanera Norte)</li>
                <li>Distancia: 6km competitiva y 3km participativa</li>
              </ul>
            </div>
          </article>
          <article className="bg-slate-800 rounded-sm p-1 grid grid-cols-3">
            <div className="flex items-center justify-center text-xl font-semibold">
              <h4>FECHA 7</h4>
            </div>
            <div className="bg-white text-black rounded-sm p-2 col-span-2 text-sm">
              <ul>
                <li>Fecha: Domingo 20 de Octubre</li>
                <li>Lugar: Plaza Treinta y Tres</li>
                <li>Distancia: 5km competitiva y 3km participativa</li>
              </ul>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
