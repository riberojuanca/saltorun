import React from "react";
import Image from "next/image";

function page() {
  return (
    <main className=" w-full ms-auto me-auto p-6">
      <div className=" max-w-2xl relative ms-auto me-auto">
        <Image
          className=" rounded-md ms-auto me-auto"
          src={"/greta.jpg"}
          alt="Foto de Greta Rodríguez, ganadora edición 2023"
          width={676}
          height={676}
        ></Image>
        <div className=" bgGreta text-white top-4 md:top-8 left-0 p-2 rounded-e-sm absolute ">
          Greta Rodríguez, ganadora edición 2023
        </div>
      </div>
    </main>
  );
}

export default page;
