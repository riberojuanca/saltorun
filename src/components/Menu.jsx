import React from "react";
import { LiaReadme } from "react-icons/lia";
import { GoTrophy } from "react-icons/go";
import { PiIdentificationBadgeLight } from "react-icons/pi";
import { GiPodiumWinner } from "react-icons/gi";
import { FaWpforms } from "react-icons/fa6";
import { GrStatusInfo } from "react-icons/gr";
import { TbTableShortcut } from "react-icons/tb";
import { FaFemale, FaMale } from "react-icons/fa";
import { Famale } from "react-icons/fa";
import { GiCheckeredFlag } from "react-icons/gi";

import { MdOutlineAssignmentInd } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

function Menu() {
  return (
    <div>
      <nav className=" fixed top-0 z-50 w-full bg-neutral-950 text-white flex items-center justify-center gap-4 h-20 px-6 border-b-4 border-neutral-900">
        <div className="flex gap-6 z-50 w-fit rounded-md  text-white p-2">
          <div className="">
            <Link href="/">
              <Image
                className=" w-24 h-auto "
                src="/saltorun24.png"
                alt=""
                width={100}
                height={50}
                priority={true}
                quality={100}
              />
            </Link>
          </div>
          <ul className="flex gap-6 text-3xl opacity-65">
            <li>
              <Link href="/tables/mujeres">
                <FaFemale />
              </Link>
            </li>
            <li>
              <Link href="/tables/hombres">
                <FaMale />
              </Link>
            </li>
            <li>
              <Link href="/fechas">
                <GiCheckeredFlag />
              </Link>
            </li>
            {/* <li>
              <Link href="/reglamento">
                <GrStatusInfo />
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
