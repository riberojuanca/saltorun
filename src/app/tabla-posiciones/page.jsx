import React from "react";

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

async function TablePositions() {
  const csv = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQGEd5A_U0S_RKqxMEma5cb2b-ORhup7yRFuCr0buOineP-WuO_3IHhFOoZpwPwZV4XFDO67LMK3Kx5/pub?output=tsv"
  ).then((res) => res.text());

  const fecha1 = csv
    .split("\n")
    .slice(1)
    .map((row) => {
      const [names, ages, times] = row.split("\t");
      return {
        names,
        ages,
        times,
        timeInSeconds: timeToSeconds(times), // Convertir el tiempo a segundos
      };
    });

  // Ordenar por tiempo en segundos
  fecha1.sort((a, b) => a.timeInSeconds - b.timeInSeconds);

  return (
    <main>
      <section className=" p-4">
        <h1>TABLA</h1>
        <Table>
          <TableCaption>
            Posiciones de la 1a. fecha del Campeonato Salto Run.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>P</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Edad</TableHead>
              <TableHead>Tiempo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fecha1.map((player, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>{" "}
                {/* Sumar 1 para mostrar la posición */}
                <TableCell>{player.names}</TableCell>
                <TableCell>{player.ages}</TableCell>
                <TableCell>{player.times}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
}

export default TablePositions;
