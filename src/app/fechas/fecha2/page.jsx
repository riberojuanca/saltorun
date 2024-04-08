import React from "react";
import { AiFillTrophy } from "react-icons/ai";
import { BsCalendar4Event } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GiPathDistance } from "react-icons/gi";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Función para convertir el tiempo en formato hh:mm:ss a segundos
function timeToSeconds(time) {
  const parts = time.split(":");
  const hours = parseInt(parts[0], 10) * 3600;
  const minutes = parseInt(parts[1], 10) * 60;
  const seconds = parseInt(parts[2], 10);
  return hours + minutes + seconds;
}

async function SegundaFecha() {
  const csv = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSqw4FX7cpb-KYGkjt_zS8fnsp86KI6urOXmT29zhjp-ZsAV8dgKjW9GsNxTpeBZt0PHpN-3QwTvx6z/pub?output=tsv"
  ).then((res) => res.text());

  const segundaFecha = csv
    .split("\n")
    .slice(1)
    .map((row) => {
      const [names, country, totalPoints] = row.split("\t");

      return {
        names,
        country,
        // times,
        // timeInSeconds: timeToSeconds(times), // Convertir el tiempo a segundos
        totalPoints,
      };
    });

  //Agregar iconos a los podios
  function podioIcon(index) {
    if (index === 0) {
      return (index = "🥇");
    } else if (index === 1) {
      return (index = "🥈");
    } else if (index === 2) {
      return (index = "🥉");
    } else {
      return (index += 1);
    }
  }

  // Ordenar por tiempo en segundos
  segundaFecha.sort((a, b) => b.totalPoints - a.totalPoints);

  return (
    <main className="ms-auto me-auto md:mt-4 mb-4">
      <section className=" p-4 ms-auto me-auto ">
        <article className=" bg-slate-800 rounded-sm grid grid-cols-3  md:flex md:flex-col items-center md:w-fit ms-auto me-auto">
          <div className="px-4 md:p-4 rounded-sm  flex items-center justify-center text-xl md:text-3xl font-semibold">
            <h4>FECHA 2</h4>
          </div>
          <div className=" col-span-2 bg-white text-black rounded-sm p-2 text-sm md:text-base px-6">
            <ul className="md:flex  md:gap-6">
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
        <Table>
          <TableCaption>Fecha n°2 del Campeonato Salto Run 2024</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Nombre</TableHead>
              {/* <TableHead>Categoría</TableHead> */}
              <TableHead className="md:max-w-6 text-center">Puntos</TableHead>

              {/* <TableHead>Tiempo</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {segundaFecha.map((player, index) => (
              <TableRow key={index} className=" podioFecha">
                <TableCell className="flex justify-center bg-zinc-900 w-12">
                  {podioIcon(index)}
                </TableCell>
                <TableCell>
                  {player.country} {player.names}
                </TableCell>
                <TableCell className="text-center">
                  {player.totalPoints}
                </TableCell>
                {/* <TableCell>{player.times}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
}

export default SegundaFecha;
