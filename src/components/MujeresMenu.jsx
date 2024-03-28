"use client";
import React from "react";
import Link from "next/link";

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
      <div className="  categoriesMenuMujeres ms-auto me-auto max-w-5xl h-40 mb-5  opacity-80 text-white flex items-center justify-center px-6">
        <ul className="ulMenuMujeres w-full grid grid-cols-3 gap-5 text-xs">
          <Link href="/tables/generalmujeres/GeneralMujeres20">
            <li className="link" onClick={handleClick}>
              &lt; 20
            </li>
          </Link>
          <Link href="/tables/generalmujeres/GeneralMujeres20a24">
            <li className="link" onClick={handleClick}>
              20 a 24
            </li>
          </Link>
          <Link href="/tables/generalmujeres/GeneralMujeres25a29">
            <li className="link" onClick={handleClick}>
              25 A 29
            </li>
          </Link>
          <Link href="/tables/generalmujeres/GeneralMujeres30a34">
            <li className="link" onClick={handleClick}>
              30 A 34
            </li>
          </Link>
          <Link href="/tables/generalmujeres/GeneralMujeres35a39">
            <li className="link" onClick={handleClick}>
              35 A 39
            </li>
          </Link>
          <Link href="/tables/generalmujeres/GeneralMujeres40a44">
            <li className="link" onClick={handleClick}>
              40 A 44
            </li>
          </Link>
          <Link href="/tables/generalmujeres/GeneralMujeres45a49">
            <li className="link" onClick={handleClick}>
              45 A 49
            </li>
          </Link>
          <Link href="/tables/generalmujeres/GeneralMujeres50a54">
            <li className="link" onClick={handleClick}>
              50 A 54
            </li>
          </Link>
          <Link href="/tables/generalmujeres/GeneralMujeres55a59">
            <li className="link" onClick={handleClick}>
              55 A 59
            </li>
          </Link>
          <Link href="/tables/generalmujeres/GeneralMujeresMayores59">
            <li className="link" onClick={handleClick}>
              &gt; 59
            </li>
          </Link>
          <Link href="/tables/generalmujeres/GeneralMujeresEspeciales">
            <li className="link" onClick={handleClick}>
              ESPECIALES
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default MujeresMenu;
