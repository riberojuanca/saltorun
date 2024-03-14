import React from "react";
import { LiaReadme } from "react-icons/lia";
import { GiPodiumWinner } from "react-icons/gi";
import { MdOutlineAssignmentInd } from "react-icons/md";

function Menu() {
  return (
    <nav className=" bg-zinc-900 opacity-50 text-white flex items-center justify-between h-14 px-2">
      <h1 className="text-3xl">SALTO RUN</h1>
      <ul className="flex gap-3 text-3xl">
        <li>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeUJR14q0nf-XY6hPt6LjMKGztsmWYwF1FakTSuKh_3WmuUJw/viewform?pli=1">
            <MdOutlineAssignmentInd />
          </a>
        </li>
        <li>
          <a href="/tabla-posiciones">
            <GiPodiumWinner />
          </a>
        </li>
        <li>
          <a href="/reglamento">
            <LiaReadme />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
