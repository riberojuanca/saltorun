import "@/styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import { BsCalendar4Event } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GiPathDistance } from "react-icons/gi";

export default function Home() {
  return (
    <main className="  w-full ms-auto me-auto">
      {/* <h1 className="ms-auto me-auto  text-center p-6  font-semibold w-full h-full text-4xl z-40  md:max-w-full xl:text-5xl md:sticky bg-slate-900  top-20">
        SALTO RUN 2024
      </h1> */}
      <div className="relative w-full h-full top-0 md:-top-64 xl:-top-80">
        <Image
          className="w-full md:z-30  md:mt-44 xl:pt-2"
          src={"/portadasaltorundesktop.jpg"}
          alt="Portada Salto Run foto de largada en calle Uruguay"
          width={1920}
          height={1080}
          quality={100}
          priority={true}
        ></Image>
        <div className="absolute top-0 left-0 w-full h-full opacity-60 bg-neutral-950 backdrop-blur-10 z-30"></div>
      </div>
      <section className="p-6 md: md:max-w-4xl ms-auto me-auto md:-mt-56 xl:-mt-72">
        <h2 className=" font-semibold text-4xl text-cyan-200 ">LARGAMOS</h2>
        <h3 className=" font-semibold text-2xl">
          ¡EL CAMPEONATO SALTO RUN TE ESPERA, COMO CADA AÑO CON NUEVAS
          EMOCIONES!
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
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSeUJR14q0nf-XY6hPt6LjMKGztsmWYwF1FakTSuKh_3WmuUJw/viewform?pli=1"
            }
          >
            COMPLETAR FORMULARIO
          </Link>
        </div>
        <h3 className="text-xl font-semibold text-cyan-100">AGENDA</h3>
        <p>
          Ya tenemos fechas para lo que serán 7 etapas para este campeonato.
        </p>
        <section className="tablebg rounded-md p-2 md:p-4 mt-4 md:mt-6 flex flex-col gap-4 md:grid md:grid-cols-2 md:max-w-3xl">
          <article className=" rounded-sm p-1 flex md:items-center md:justify-center gap-2 ">
            <h3 className=" text-xl md:text-2xl font-semibold text-cyan-100">
              CRONOGRAMA DE FECHAS
            </h3>
          </article>
          <article className=" bg-slate-800 rounded-sm grid grid-cols-3 gap-2 ">
            <div className=" rounded-sm  flex items-center justify-center text-xl font-semibold">
              <h4>FECHA 1</h4>
            </div>
            <div className=" bg-white text-black rounded-sm p-2 col-span-2 text-sm">
              <ul>
                <li>
                  <BsCalendar4Event /> Domingo 21 de Abril
                </li>
                <li>
                  <CiLocationOn /> Salto Rowing Club
                </li>
                <li>
                  <GiPathDistance /> 5km competitiva
                </li>
                <li>
                  <GiPathDistance /> 3km participativa
                </li>
              </ul>
            </div>
          </article>
          <article className=" bg-cyan-200  rounded-sm  grid grid-cols-3">
            <div className="text-black flex items-center justify-center text-xl font-semibold">
              <h4>FECHA 2</h4>
            </div>
            <div className="bg-white text-black rounded-sm p-2 col-span-2 text-sm ">
              <ul>
                <li>
                  <BsCalendar4Event /> Domingo 12 de Mayo
                </li>
                <li>
                  <CiLocationOn /> Isla Bonita y/o aeropuerto
                </li>
                <li>
                  <GiPathDistance /> 6km competitiva
                </li>
                <li>
                  <GiPathDistance /> 3km participativa
                </li>
              </ul>
            </div>
          </article>
          <article className="bg-slate-800 rounded-sm grid grid-cols-3">
            <div className="flex items-center justify-center text-xl font-semibold">
              <h4>FECHA 3</h4>
            </div>
            <div className=" bg-white text-black rounded-sm p-2 col-span-2 text-sm">
              <ul>
                <li>
                  <BsCalendar4Event /> Domingo 16 de Junio
                </li>
                <li>
                  <CiLocationOn /> Parque del Lago
                </li>
                <li>
                  <GiPathDistance /> 7km competitiva
                </li>
                <li>
                  <GiPathDistance /> 3km participativa
                </li>
              </ul>
            </div>
          </article>
          <article className="bg-cyan-200 rounded-sm  grid grid-cols-3">
            <div className="text-black flex items-center justify-center text-xl font-semibold">
              <h4>FECHA 4</h4>
            </div>
            <div className="bg-white text-black rounded-sm p-2 col-span-2 text-sm">
              <ul>
                <li>
                  <BsCalendar4Event /> Domingo 21 de Julio
                </li>
                <li>
                  <CiLocationOn /> Hipódromo
                </li>
                <li>
                  <GiPathDistance /> 8km competitiva
                </li>
                <li>
                  <GiPathDistance /> 3km participativa
                </li>
              </ul>
            </div>
          </article>
          <article className="bg-slate-800 rounded-sm grid grid-cols-3">
            <div className="flex items-center justify-center text-xl font-semibold">
              <h4>FECHA 5</h4>
            </div>
            <div className="bg-white text-black rounded-sm p-2 col-span-2 text-sm">
              <ul>
                <li>
                  <BsCalendar4Event /> Domingo 18 de Agosto
                </li>
                <li>
                  <CiLocationOn /> Complejo Villa España
                </li>
                <li>
                  <GiPathDistance /> 8km competitiva
                </li>
                <li>
                  <GiPathDistance /> 3km participativa
                </li>
              </ul>
            </div>
          </article>
          <article className="bg-cyan-200 rounded-sm grid grid-cols-3">
            <div className="text-black flex items-center justify-center text-xl font-semibold">
              <h4>FECHA 6</h4>
            </div>
            <div className="bg-white text-black rounded-sm p-2 col-span-2 text-sm">
              <ul>
                <li>
                  <BsCalendar4Event /> Domingo 15 de Septiembre
                </li>
                <li>
                  <CiLocationOn /> Polo (Costanera Norte)
                </li>
                <li>
                  <GiPathDistance /> 6km competitiva
                </li>
                <li>
                  <GiPathDistance /> 3km participativa
                </li>
              </ul>
            </div>
          </article>
          <article className="bg-slate-800 rounded-sm  grid grid-cols-3">
            <div className="flex items-center justify-center text-xl font-semibold">
              <h4>FECHA 7</h4>
            </div>
            <div className="bg-white text-black rounded-sm p-2 col-span-2 text-sm">
              <ul>
                <li>
                  <BsCalendar4Event /> Domingo 20 de Octubre
                </li>
                <li>
                  <CiLocationOn /> Plaza Treinta y Tres
                </li>
                <li>
                  <GiPathDistance /> 5km competitiva
                </li>
                <li>
                  <GiPathDistance /> 3km participativa
                </li>
              </ul>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
