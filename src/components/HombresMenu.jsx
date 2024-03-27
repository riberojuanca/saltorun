import React from "react";

function HombresMenu() {
  return (
    <>
      <div className=" mb-10 bg-red-800 opacity-80 text-white flex items-center justify-between h-14 px-6">
        <ul className="flex gap-3 text-xs">
          <li>
            <a href="/tables/generalhombres/GeneralHombres20">MENORES A 20</a>
          </li>
          <li>
            <a href="/tables/generalhombres/GeneralHombres20a24">20 A 24</a>
          </li>
          <li>
            <a href="/tables/generalhombres/GeneralHombres25a29">25 A 29</a>
          </li>
          <li>
            <a href="/tables/generalhombres/GeneralHombres30a34">30 A 34</a>
          </li>
          <li>
            <a href="/tables/generalhombres/GeneralHombres35a39">35 A 39</a>
          </li>
          <li>
            <a href="/tables/generalhombres/GeneralHombres40a44">40 A 44</a>
          </li>
          <li>
            <a href="/tables/generalhombres/GeneralHombres45a49">45 A 49</a>
          </li>
          <li>
            <a href="/tables/generalhombres/GeneralHombres50a54">50 A 54</a>
          </li>
          <li>
            <a href="/tables/generalhombres/GeneralHombres55a59">55 A 59</a>
          </li>
          <li>
            <a href="/tables/generalhombres/GeneralHombresMayores59">
              MAYORES A 59
            </a>
          </li>
          <li>
            <a href="/tables/generalhombres/GeneralHombresEspeciales">
              ESPECIALES
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HombresMenu;
