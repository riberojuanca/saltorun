import React from "react";
import { AiFillTrophy } from "react-icons/ai";
import GeneralHombres20 from "@/components/GeneralHombres20";
import GeneralHombres20a24 from "@/components/GeneralHombres20a24";
import GeneralHombres25a29 from "@/components/GeneralHombres25a29";
import GeneralHombres30a34 from "@/components/GeneralHombres30a34";
import GeneralHombres35a39 from "@/components/GeneralHombres35a39";
import GeneralHombres40a44 from "@/components/GeneralHombres40a44";
import GeneralHombres45a49 from "@/components/GeneralHombres45a49";
import GeneralHombres50a54 from "@/components/GeneralHombres50a54";
import GeneralHombres55a59 from "@/components/GeneralHombres55a59";
import GeneralHombresEspeciales from "@/components/GeneralHombresEspeciales";
import GeneralHombresMayores59 from "@/components/GeneralHombresMayores59";

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

async function GeneralHombres() {
  const csv = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQGEd5A_U0S_RKqxMEma5cb2b-ORhup7yRFuCr0buOineP-WuO_3IHhFOoZpwPwZV4XFDO67LMK3Kx5/pub?output=tsv"
  ).then((res) => res.text());

  const generalHombres = csv
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
  generalHombres.sort((a, b) => b.totalPoints - a.totalPoints);

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
              <TableHead>Puntos</TableHead>
              {/* <TableHead>Tiempo</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {generalHombres.map((player, index) => (
              <TableRow key={index} className="podioGeneralHombres">
                <TableCell className="flex justify-center bg-zinc-900 w-12">
                  {podioIcon(index)}
                </TableCell>{" "}
                <TableCell>{player.names}</TableCell>
                <TableCell>{player.ages}</TableCell>
                <TableCell>{player.totalPoints}</TableCell>
                {/* <TableCell>{player.times}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      <GeneralHombres20 />
      <GeneralHombres20a24 />
      <GeneralHombres25a29 />
      <GeneralHombres30a34 />
      <GeneralHombres35a39 />
      <GeneralHombres40a44 />
      <GeneralHombres45a49 />
      <GeneralHombres50a54 />
      <GeneralHombres55a59 />
      <GeneralHombresEspeciales />
      <GeneralHombresMayores59 />
    </main>
  );
}

export default GeneralHombres;
