import React from "react";

function TablesMenu() {
  return (
    <>
      <div className=" mb-10 bg-zinc-900 opacity-80 text-white flex items-center justify-between h-14 px-6">
        <ul className="flex gap-3 text-xs">
          <li>
            <a href="/tables/generalmujeres">GENERAL MUJERES</a>
          </li>
          <li>
            <a href="/tables/generalhombres">GENERAL HOMBRES</a>
          </li>
          <li>
            <a href="/tables/fecha1">FECHA 1</a>
          </li>
          <li>
            <a href="/tables/fecha2">FECHA 2</a>
          </li>
          <li>
            <a href="/tables/fecha3">FECHA 3</a>
          </li>
          <li>
            <a href="/tables/fecha4">FECHA 4</a>
          </li>
          <li>
            <a href="/tables/fecha5">FECHA 5</a>
          </li>
          <li>
            <a href="/tables/fecha6">FECHA 6</a>
          </li>
          <li>
            <a href="/tables/fecha7">FECHA 7</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TablesMenu;
