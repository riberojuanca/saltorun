"use client";
import React from "react";
import Link from "next/link";
import "@/styles/globals.css";
import { FaMale } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { BsCalendar4Event } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GiPathDistance } from "react-icons/gi";
import { LiaBuyNLarge } from "react-icons/lia";
import { GiCheckeredFlag } from "react-icons/gi";

function handleClick(e) {
  const links = document.querySelectorAll(".link");
  for (const link of links) {
    link.style.backgroundColor = "";
    link.style.color = "";
    link.style.borderRadius = "";
  }
  e.target.style.background = "#A5F3FC";
  e.target.style.color = "#1e293b";
  e.target.style.borderRadius = "4px";
}

function FechasMenu() {
  return (
    <>
      <main className="p-4 ms-auto me-auto ">
        <div className=" flex items-center justify-between text-center pt-8 px-4 w-fit text-lg  me-auto ms-auto">
          <GiCheckeredFlag className="text-4xl " />
          <h1 className="font-semibold text-3xl md:text-4xl">FECHAS</h1>
        </div>
        <div className=" flex items-center justify-between text-center md:pb-6 md:mb-6 w-fit text-xl md:text-2xl font-semibold text-cyan-200 me-auto ms-auto">
          <h2 className="">POSICIONES FECHA A FECHA</h2>
        </div>
        <section className="categoriesMenu rounded-md p-2 md:px-6 mt-4 grid grid-cols-7 gap-4 md:grid md:max-w-3xl ms-auto me-auto">
          <article className="bg-slate-800 rounded-sm">
            <Link
              href={"/fechas/fecha1"}
              className="link h-10 flex items-center justify-center text-3xl md:text-4xl font-semibold"
              onClick={handleClick}
            >
              <h4 className=" pointer-events-none">1</h4>
            </Link>
          </article>
          <article className="bg-slate-800 rounded-sm">
            <Link
              href={"/fechas/fecha2"}
              className="link h-10 flex items-center justify-center text-3xl md:text-4xl font-semibold"
              onClick={handleClick}
            >
              <h4 className=" pointer-events-none">2</h4>
            </Link>
          </article>
          <article className="bg-slate-800 rounded-sm ">
            <Link
              href={"/fechas/fecha3"}
              className="link h-10 flex items-center justify-center text-3xl md:text-4xl font-semibold"
              onClick={handleClick}
            >
              <h4 className=" pointer-events-none">3</h4>
            </Link>
          </article>
          <article className="bg-slate-800 rounded-sm">
            <Link
              href={"/fechas/fecha4"}
              className="link h-10 flex items-center justify-center text-3xl md:text-4xl font-semibold"
              onClick={handleClick}
            >
              <h4 className=" pointer-events-none">4</h4>
            </Link>
          </article>
          <article className="bg-slate-800 rounded-sm">
            <Link
              href={"/fechas/fecha5"}
              className="link h-10 flex items-center justify-center text-3xl md:text-4xl font-semibold"
              onClick={handleClick}
            >
              <h4 className=" pointer-events-none">5</h4>
            </Link>
          </article>
          <article className="bg-slate-800 rounded-sm">
            <Link
              href={"/fechas/fecha6"}
              className="link h-10 flex items-center justify-center text-3xl md:text-4xl font-semibold"
              onClick={handleClick}
            >
              <h4 className=" pointer-events-none">6</h4>
            </Link>
          </article>
          <article className="bg-slate-800 rounded-sm">
            <Link
              href={"/fechas/fecha7"}
              className="link h-10 flex items-center justify-center text-3xl md:text-4xl font-semibold"
              onClick={handleClick}
            >
              <h4 className=" pointer-events-none">7</h4>
            </Link>
          </article>
        </section>
      </main>
    </>
  );
}

export default FechasMenu;
