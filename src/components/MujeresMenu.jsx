"use client";
import React from "react";
import Link from "next/link";
import { FaFemale } from "react-icons/fa";

function handleClick(e) {
  const links = document.querySelectorAll(".link");
  for (const link of links) {
    link.style.backgroundColor = "";
  }
  e.target.style.background = "rgb(196, 1, 196)";
}

function MujeresMenu() {
  return (
    <>
      <section>
        <div className=" flex items-center justify-between text-center p-4 mb-6 w-fit text-lg gap-4 me-auto ms-auto">
          <FaFemale className="text-2xl " />
          <h1 className="">GENERAL POR CATEGORÍA</h1>
        </div>
        <div className="  categoriesMenuMujeres ms-auto me-auto max-w-5xl h-40 mb-5  opacity-80 text-white flex items-center justify-center px-6">
          <ul className="ulMenuMujeres w-full grid grid-cols-3 gap-5 text-xs">
            <Link href="/tables/mujeres/GeneralMujeres">
              <li className="link" onClick={handleClick}>
                GENERAL
              </li>
            </Link>
            <Link href="/tables/mujeres/GeneralMujeres20">
              <li className="link" onClick={handleClick}>
                &lt; 20
              </li>
            </Link>
            <Link href="/tables/mujeres/GeneralMujeres20a24">
              <li className="link" onClick={handleClick}>
                20 a 24
              </li>
            </Link>
            <Link href="/tables/mujeres/GeneralMujeres25a29">
              <li className="link" onClick={handleClick}>
                25 A 29
              </li>
            </Link>
            <Link href="/tables/mujeres/GeneralMujeres30a34">
              <li className="link" onClick={handleClick}>
                30 A 34
              </li>
            </Link>
            <Link href="/tables/mujeres/GeneralMujeres35a39">
              <li className="link" onClick={handleClick}>
                35 A 39
              </li>
            </Link>
            <Link href="/tables/mujeres/GeneralMujeres40a44">
              <li className="link" onClick={handleClick}>
                40 A 44
              </li>
            </Link>
            <Link href="/tables/mujeres/GeneralMujeres45a49">
              <li className="link" onClick={handleClick}>
                45 A 49
              </li>
            </Link>
            <Link href="/tables/mujeres/GeneralMujeres50a54">
              <li className="link" onClick={handleClick}>
                50 A 54
              </li>
            </Link>
            <Link href="/tables/mujeres/GeneralMujeres55a59">
              <li className="link" onClick={handleClick}>
                55 A 59
              </li>
            </Link>
            <Link href="/tables/mujeres/GeneralMujeresMayores59">
              <li className="link" onClick={handleClick}>
                &gt; 59
              </li>
            </Link>
            <Link href="/tables/mujeres/GeneralMujeresEspeciales">
              <li className="link" onClick={handleClick}>
                ESPECIALES
              </li>
            </Link>
          </ul>
        </div>
      </section>
    </>
  );
}

export default MujeresMenu;
