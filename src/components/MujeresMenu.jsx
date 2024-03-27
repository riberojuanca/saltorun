import React from "react";

function MujeresMenu() {
  return (
    <>
      <div className=" bg-fuchsia-700 opacity-80 text-white flex flex-row items-center justify-between h-fit px-6">
        <ul className="flex flex-col gap-2 text-m">
          <li>
            <a href="/tables/generalmujeres/GeneralMujeres20">MENORES A 20</a>
          </li>
          <li>
            <a href="/tables/generalmujeres/GeneralMujeres20a24">20 A 24</a>
          </li>
          <li>
            <a href="/tables/generalmujeres/GeneralMujeres25a29">25 A 29</a>
          </li>
          <li>
            <a href="/tables/generalmujeres/GeneralMujeres30a34">30 A 34</a>
          </li>
          <li>
            <a href="/tables/generalmujeres/GeneralMujeres35a39">35 A 39</a>
          </li>
          <li>
            <a href="/tables/generalmujeres/GeneralMujeres40a44">40 A 44</a>
          </li>
          <li>
            <a href="/tables/generalmujeres/GeneralMujeres45a49">45 A 49</a>
          </li>
          <li>
            <a href="/tables/generalmujeres/GeneralMujeres50a54">50 A 54</a>
          </li>
          <li>
            <a href="/tables/generalmujeres/GeneralMujeres55a59">55 A 59</a>
          </li>
          <li>
            <a href="/tables/generalmujeres/GeneralMujeresMayores59">
              MAYORES A 59
            </a>
          </li>
          <li>
            <a href="/tables/generalmujeres/GeneralMujeresEspeciales">
              ESPECIALES
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MujeresMenu;
