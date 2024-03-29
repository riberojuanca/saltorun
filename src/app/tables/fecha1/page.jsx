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

async function Fecha1() {
  const csv = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZFZjXCkMI6mYIOyh-MYaGVMEYwp7AtwOH08isxhDobyT-yvWW9X67a-VyAxx1KtNoPBx53KniGhoX/pub?output=tsv"
  ).then((res) => res.text());

  const fecha1 = csv
    .split("\n")
    .slice(1)
    .map((row) => {
      const [names, ages, times, points] = row.split("\t");
      return {
        names,
        ages,
        times,
        timeInSeconds: timeToSeconds(times),
        points, // Convertir el tiempo a segundos
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
  fecha1.sort((a, b) => a.points + b.points);

  return (
    <main>
      <section className="p-4 ms-auto me-auto">
        <h1 className="text-2xl">POSICIONES</h1>
        <h2 className="text-xl">GENERAL HOMBRES</h2>
        <Table>
          <TableCaption>
            Posiciones de la 1a. fecha del Campeonato Salto Run.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Categoría</TableHead>
              {/* <TableHead>Tiempo</TableHead> */}
              <TableHead>Puntos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fecha1.map((player, index) => (
              <TableRow key={index} className="podioGeneralHombres">
                <TableCell className="flex justify-center bg-zinc-900 w-12">
                  {podioIcon(index)}
                </TableCell>{" "}
                <TableCell>{player.names}</TableCell>
                <TableCell>{player.ages}</TableCell>
                {/* <TableCell>{player.times}</TableCell> */}
                <TableCell>{player.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
}

export default Fecha1;
