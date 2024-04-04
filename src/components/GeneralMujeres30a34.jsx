import React from "react";
import { AiFillTrophy } from "react-icons/ai";
import { GiCheckeredFlag } from "react-icons/gi";

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

async function GeneralMujeres30a34() {
  const csv = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRf6jZbLJRUUzpFjGuF_tHctXN40oJmAvg7-sb5xEC3BxQo272XF3WUvQjWpbOUnQWqRS4gbCa_lkpj/pub?output=tsv"
  ).then((res) => res.text());

  const generalMujeres30a34 = csv
    .split("\n")
    .slice(1)
    .map((row) => {
      const [
        names,
        country,
        totalPoints,
        fecha1Points,
        fecha2Points,
        fecha3Points,
        fecha4Points,
        fecha5Points,
        fecha6Points,
        fecha7Points,
      ] = row.split("\t");

      return {
        names,
        country,
        // times,
        // timeInSeconds: timeToSeconds(times), // Convertir el tiempo a segundos
        totalPoints,
        fecha1Points,
        fecha2Points,
        fecha3Points,
        fecha4Points,
        fecha5Points,
        fecha6Points,
        fecha7Points,
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
  generalMujeres30a34.sort((a, b) => b.totalPoints - a.totalPoints);

  return (
    <main className="ms-auto me-auto max-w-5xl mt-8 mb-8">
      <section className="p-4 ms-auto me-auto">
        <div className=" flex items-center justify-between text-center px-4 w-fit text-lg md:text-xl gap-4 me-auto ms-auto">
          <h1 className="md:text-2xl font-semibold">GENERAL MUJERES 30 A 34</h1>
        </div>
        <Table className="landscape:hidden md:hidden">
          <TableCaption>Campeonato Salto Run 2024</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead className="md:max-w-6 text-center">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {generalMujeres30a34.map((player, index) => (
              <TableRow key={index} className="podioGeneralMujeres">
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

        {/* TABLA COMPLETA*/}

        <Table className="opacity-0 pointer-events-none absolute overflow-hidden landscape:opacity-100 landscape:relative  md:opacity-100 md:relative">
          <TableCaption>Campeonato Salto Run 2024</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>
                <GiCheckeredFlag className="inline" />1
              </TableHead>
              <TableHead>
                <GiCheckeredFlag className="inline" />2
              </TableHead>
              <TableHead>
                <GiCheckeredFlag className="inline" />3
              </TableHead>
              <TableHead>
                <GiCheckeredFlag className="inline" />4
              </TableHead>
              <TableHead>
                <GiCheckeredFlag className="inline" />5
              </TableHead>
              <TableHead>
                <GiCheckeredFlag className="inline" />6
              </TableHead>
              <TableHead>
                <GiCheckeredFlag className="inline" />7
              </TableHead>
              <TableHead className="text-center">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {generalMujeres30a34.map((player, index) => (
              <TableRow key={index} className="podioGeneralMujeres">
                <TableCell className="flex justify-center bg-zinc-900 w-12">
                  {podioIcon(index)}
                </TableCell>
                <TableCell className="w-full">
                  {player.country} {player.names}
                </TableCell>
                <TableCell>{player.fecha1Points}</TableCell>
                <TableCell>{player.fecha2Points}</TableCell>
                <TableCell>{player.fecha3Points}</TableCell>
                <TableCell>{player.fecha4Points}</TableCell>
                <TableCell>{player.fecha5Points}</TableCell>
                <TableCell>{player.fecha6Points}</TableCell>
                <TableCell>{player.fecha7Points}</TableCell>
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

export default GeneralMujeres30a34;
