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

async function GeneralHombresEspeciales() {
  const csv = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRqmLOJiETzbl53J0MLAI9uc60NCduT3vn2GnvXsGqtYDbHQcABsOqubF9qEI_fqt_i7EMKUdPueuJG/pub?output=tsv"
  ).then((res) => res.text());

  const generalHombresEspeciales = csv
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
  generalHombresEspeciales.sort((a, b) => b.totalPoints - a.totalPoints);

  return (
    <section className="p-4 ms-auto me-auto">
      <h1 className="text-2xl">POSICIONES</h1>
      <h2 className="text-xl">GENERAL HOMBRES ESPECIALES</h2>
      <Table>
        <TableCaption>Posiciones tabla general hombres especiales</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Puntos</TableHead>
            {/* <TableHead>Tiempo</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {generalHombresEspeciales.map((player, index) => (
            <TableRow key={index} className="podioGeneralHombres">
              <TableCell className="flex justify-center bg-zinc-900 w-12">
                {podioIcon(index)}
              </TableCell>
              <TableCell>{player.names}</TableCell>
              <TableCell>{player.ages}</TableCell>
              <TableCell>{player.totalPoints}</TableCell>
              {/* <TableCell>{player.times}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}

export default GeneralHombresEspeciales;
