import React from "react";

function TablesMenu() {
  return (
    <>
      <div className="ms-auto me-auto w-full mb-10 bg-zinc-900 opacity-80 text-white flex items-center justify-between h-14 px-6">
        <ul className="flex gap-3 text-xs">
          <li>
            <a href="/tables/mujeres">MUJERES</a>
          </li>
          <li>
            <a href="/tables/hombres">HOMBRES</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TablesMenu;
