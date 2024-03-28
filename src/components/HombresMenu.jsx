"use client";
import React from "react";
import Link from "next/link";
import "@/styles/globals.css";

function handleClick(e) {
  const links = document.querySelectorAll(".link");
  for (const link of links) {
    link.style.backgroundColor = "";
  }
  e.target.style.background = "red";
}

function HombresMenu() {
  return (
    <>
      <section>
        <h1 className=" text-center p-4 w-full text-3xl me-auto ms-auto">
          TABLA GENERAL HOMBRES EN CADA UNA DE SUS CATEGORÍAS
        </h1>
        <div className="  categoriesMenu ms-auto me-auto max-w-5xl h-40 mb-5  opacity-80 text-white flex items-center justify-center px-6">
          <ul className="ulMenu w-full grid grid-cols-3 gap-5 text-xs">
            <Link href="/tables/hombres/GeneralHombres">
              <li className="link" onClick={handleClick}>
                GENERAL
              </li>
            </Link>
            <Link href="/tables/hombres/GeneralHombres20">
              <li className="link" onClick={handleClick}>
                &lt; 20
              </li>
            </Link>
            <Link href="/tables/hombres/GeneralHombres20a24">
              <li className="link" onClick={handleClick}>
                20 a 24
              </li>
            </Link>
            <Link href="/tables/hombres/GeneralHombres25a29">
              <li className="link" onClick={handleClick}>
                25 A 29
              </li>
            </Link>
            <Link href="/tables/hombres/GeneralHombres30a34">
              <li className="link" onClick={handleClick}>
                30 A 34
              </li>
            </Link>
            <Link href="/tables/hombres/GeneralHombres35a39">
              <li className="link" onClick={handleClick}>
                35 A 39
              </li>
            </Link>
            <Link href="/tables/hombres/GeneralHombres40a44">
              <li className="link" onClick={handleClick}>
                40 A 44
              </li>
            </Link>
            <Link href="/tables/hombres/GeneralHombres45a49">
              <li className="link" onClick={handleClick}>
                45 A 49
              </li>
            </Link>
            <Link href="/tables/hombres/GeneralHombres50a54">
              <li className="link" onClick={handleClick}>
                50 A 54
              </li>
            </Link>
            <Link href="/tables/hombres/GeneralHombres55a59">
              <li className="link" onClick={handleClick}>
                55 A 59
              </li>
            </Link>
            <Link href="/tables/hombres/GeneralHombresMayores59">
              <li className="link" onClick={handleClick}>
                &gt; 59
              </li>
            </Link>
            <Link href="/tables/hombres/GeneralHombresEspeciales">
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

export default HombresMenu;
