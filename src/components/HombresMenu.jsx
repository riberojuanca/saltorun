"use client";
import React from "react";
import Link from "next/link";

const handleClick = (e) => {
  e.target.classList.add("active");
};

function HombresMenu() {
  return (
    <>
      <div className=" categoriesMenu ms-auto me-auto max-w-5xl h-40 mb-5  opacity-80 text-white flex items-center justify-center px-6">
        <ul className="ulMenu w-full grid grid-cols-3 gap-5 text-xs">
          <Link
            onClick={handleClick}
            href="/tables/generalhombres/GeneralHombres20"
          >
            <li>&lt; 20</li>
          </Link>
          <Link href="/tables/generalhombres/GeneralHombres20a24">
            <li>20 a 24</li>
          </Link>
          <Link href="/tables/generalhombres/GeneralHombres25a29">
            <li>25 A 29</li>
          </Link>
          <Link href="/tables/generalhombres/GeneralHombres30a34">
            <li>30 A 34</li>
          </Link>
          <Link href="/tables/generalhombres/GeneralHombres35a39">
            <li>35 A 39</li>
          </Link>
          <Link href="/tables/generalhombres/GeneralHombres40a44">
            <li>40 A 44</li>
          </Link>
          <Link href="/tables/generalhombres/GeneralHombres45a49">
            <li>45 A 49</li>
          </Link>
          <Link href="/tables/generalhombres/GeneralHombres50a54">
            <li>50 A 54</li>
          </Link>
          <Link href="/tables/generalhombres/GeneralHombres55a59">
            <li>55 A 59</li>
          </Link>
          <Link href="/tables/generalhombres/GeneralHombresMayores59">
            <li>&gt; 59</li>
          </Link>
          <Link href="/tables/generalhombres/GeneralHombresEspeciales">
            <li>ESPECIALES</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default HombresMenu;
