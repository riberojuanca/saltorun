import React from "react";
import Link from "next/link";
import { TbFileDownload } from "react-icons/tb";

function deslinde() {
  return (
    <main className=" font-light p-6 text-zinc-200 flex flex-col gap-4 ms-auto me-auto max-w-4xl text-lg">
      <h1 className="mt-6 font-semibold text-4xl">DESLINDE</h1>
      <Link
        className="w-fit flex items-center gap-1 underline text-cyan-200 hover:brightness-110"
        href="https://drive.google.com/file/d/1SIC2TbSsb_kTBl-v5hh8Ki1sltZNUDLf/view?pli=1 "
        target="_blank"
        rel="noopener"
      >
        DESCARGAR
      </Link>
      <p>
        Declaro bajo juramento que no padezco afecciones físicas adquiridas o
        congénitas, ni lesiones que pudieran ocasionar trastornos en mi salud o
        condiciones de vida, y por lo tanto puedo participar en las carreras del
        CAMPEONATO SALTEÑO DE CARRERAS 2024.
      </p>
      <p>
        Las mismas serán llevadas a cabo los días: Domingo 21 de Abril, Domingo
        12 de Mayo, Domingo 16 de Junio, Domingo 21 de Julio, Domingo 18 de
        Agosto, Domingo 15 de Setiembre y Domingo 20 de Octubre. (Fechas sujetas
        a modificación por imprevistos que puedan surgir) Asimismo, declaro bajo
        juramento que antes de participar en las mencionadas carreras, me he
        realizado un chequeo médico y me encuentro en condiciones físicas
        óptimas para participar del mismo, como así también asumo todos los
        riesgos asociados con la participación en la presente competencia
        (caídas, contacto con otros participantes, consecuencias del clima,
        tránsito vehicular, condiciones del camino, y/o cualquier otra clase de
        riesgo que se pudiera ocasionar).
      </p>
      <p>
        Tomo conocimiento y acepto de conformidad, que los grupos organizadores,
        las autoridades departamentales, los sponsors y auspiciantes, y/o sus
        empresas contratadas o vinculadas al campeonato, NO toman a su cargo, ni
        se responsabilizan por ningún tipo de reclamo que eventualmente pueda
        significar una indemnización, así como se deslindan de toda
        responsabilidad ante costos, daños y/o perjuicios incluyendo y no
        limitado a: daños por accidentes, daños materiales, físicos o psíquicos
        o morales, lucro cesante, causados a mi persona o a mis
        derechohabientes, con motivo y en ocasión de la actividad física en la
        que participaré, carreras antes mencionadas.
      </p>
      <p>
        Por todo lo expuesto, libero a los grupos organizadores, las autoridades
        departamentales, los sponsors y auspiciantes, y/o a sus empresas
        contratadas o vinculadas, de todo y cualquier reclamo o responsabilidad
        de cualquier tipo que surja de mi participación en esta competencia, así
        como de cualquier extravío, robo y/o hurto que pudiera sufrir mientras
        se desarrolla la misma.
      </p>
      <p>
        Como así manifiesto que no serán responsables por incendios,
        cortocircuitos, robos, hurtos, caso fortuito, cualquiera fuera la causa
        que lo origine, daño en mi salud provenientes de riñas o peleas de
        terceros, daños en mi salud provenientes de afecciones físicas o no, que
        puedan acontecer con anterioridad, durante el transcurso o con
        posterioridad a la finalización de las carreras mencionadas arriba.
      </p>
      <p>
        Autorizo a los organizadores de la competencia y sponsors a utilizar,
        reproducir, distribuir y/o publicar fotografías, películas, videos,
        grabaciones y/o cualquier otro medio de registración de mi persona
        tomadas como motivo y en ocasión de la presente competencia, sin
        compensación económica alguna a mi favor. Autorizo a publicar mis datos
        personales a los fines de informar los resultados de las carreras en las
        cuales participe.
      </p>
      <p>
        Mediante mi firma acepto de conformidad las decisiones de las
        autoridades de la prueba, así como también los reglamentos de la misma,
        extendiendo el presente deslinde de responsabilidad.
      </p>
    </main>
  );
}

export default deslinde;
