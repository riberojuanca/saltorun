import React from "react";
import { LiaReadme } from "react-icons/lia";
import { GoTrophy } from "react-icons/go";
import { PiIdentificationBadgeLight } from "react-icons/pi";
import { GiPodiumWinner } from "react-icons/gi";

import { MdOutlineAssignmentInd } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

function Menu() {
  return (
    <nav className=" mb-10 bg-zinc-900 opacity-80 text-white flex items-center justify-between h-14 px-6">
      <ul className="flex gap-6 text-l">
        <li>
          <a href="/noticias">📰</a>
        </li>
        <li>
          <a href="/tables">🏆</a>
        </li>
      </ul>
      <div className=" pt-10">
        <Link href="/">
          <Image
            className=" w-auto h-auto"
            src="/saltorun24.png"
            alt=""
            width={100}
            height={96.5}
            priority={true}
            quality={100}
          />
        </Link>
      </div>
      <ul className="flex gap-6 text-3xl">
        <li>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeUJR14q0nf-XY6hPt6LjMKGztsmWYwF1FakTSuKh_3WmuUJw/viewform?pli=1">
            🪪
          </a>
        </li>
        <li>
          <a href="/reglamento">📜</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
