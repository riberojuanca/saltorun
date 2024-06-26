import React from "react";
import Image from "next/image";

function page() {
  return (
    <main className=" w-full ms-auto me-auto p-6">
      <div className=" max-w-80 md:max-w-xl relative ms-auto me-auto">
        <Image
          className=" image rounded-md ms-auto me-auto"
          src={"/greta.jpg"}
          alt="Foto de Greta Rodríguez, ganadora edición 2023"
          width={500}
          height={300}
          quality={100}
          priority={true}
        ></Image>
        <div className=" bgGreta text-sm md:text-lg text-white top-4 md:top-8 p-1 md:p-2 rounded-e-sm absolute ">
          Greta Rodríguez, ganadora edición 2023
        </div>
      </div>
    </main>
  );
}

export default page;
