import React from "react";
import { LiaReadme } from "react-icons/lia";
import { GoTrophy } from "react-icons/go";
import { PiIdentificationBadgeLight } from "react-icons/pi";
import { GiPodiumWinner } from "react-icons/gi";
import { FaWpforms } from "react-icons/fa6";
import { GrStatusInfo } from "react-icons/gr";
import { TbTableShortcut } from "react-icons/tb";

import { MdOutlineAssignmentInd } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

function MenuBottom() {
  return (
    <nav className=" fixed bottom-0 z-50 w-full bg-zinc-900 opacity-80 text-white flex items-center justify-between h-14 px-6">
      <ul className="flex gap-6 text-3xl">
        <li>
          <Link href="/tables">
            <TbTableShortcut />
          </Link>
        </li>
        <li>
          <Link href="/tables">
            <TbTableShortcut />
          </Link>
        </li>
      </ul>
      <div className="">
        <Link href="/">
          <Image
            className=" w-20 h-auto"
            src="/saltorun24.png"
            alt=""
            width={100}
            height={50}
            priority={true}
            quality={100}
          />
        </Link>
      </div>
      <ul className="flex gap-6 text-3xl">
        <li>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeUJR14q0nf-XY6hPt6LjMKGztsmWYwF1FakTSuKh_3WmuUJw/viewform?pli=1">
            <FaWpforms />
          </Link>
        </li>
        <li>
          <Link href="/reglamento">
            <GrStatusInfo />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuBottom;
