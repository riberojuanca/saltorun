import React from "react";
import { AiFillTrophy } from "react-icons/ai";

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

async function GeneralMujeres() {
  const csv = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSDU5wnysIhArsJeWs5p1wQOfRBZbD-vCfR8LX0hASFE0e33uvnyBBFNsuXG8ueAyXsSpdcC95blH7d/pub?output=tsv"
  ).then((res) => res.text());

  const generalMujeres = csv
    .split("\n")
    .slice(1)
    .map((row) => {
      const [names, ages, totalPoints] = row.split("\t");

      return {
        names,
        ages,
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
  generalMujeres.sort((a, b) => b.totalPoints - a.totalPoints);

  return (
    <main className="ms-auto me-auto max-w-5xl mt-8 mb-8">
      <section className="p-4 ms-auto me-auto">
        <div className=" flex items-center justify-between text-center px-4 w-fit text-lg gap-4 me-auto ms-auto">
          <h1 className="">POSICIONES MUJERES GENERAL</h1>
        </div>
        <Table>
          <TableCaption>Campeonato Salto Run 2024</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Nombre</TableHead>
              {/* <TableHead>Edad</TableHead> */}
              <TableHead>Puntos</TableHead>
              {/* <TableHead>Tiempo</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {generalMujeres.map((player, index) => (
              <TableRow key={index} className="podioGeneralMujeres">
                <TableCell className="flex justify-center bg-zinc-900 w-12">
                  {podioIcon(index)}
                </TableCell>
                <TableCell>{player.names}</TableCell>
                {/* <TableCell>{player.ages}</TableCell> */}
                <TableCell>{player.totalPoints}</TableCell>
                {/* <TableCell>{player.times}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
}

export default GeneralMujeres;
