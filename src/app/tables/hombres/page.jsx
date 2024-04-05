import React from "react";
import Image from "next/image";

function page() {
  return (
    <main className=" w-full ms-auto me-auto p-6">
      <div className=" max-w-xl relative ms-auto me-auto">
        <Image
          className=" rounded-md ms-auto me-auto"
          src={"/bryan.jpg"}
          alt="Foto de Bryan Ribero, ganador edición 2023"
          width={676}
          height={676}
          quality={100}
          priority={true}
        ></Image>
        <div className=" bgBryan text-white top-4 md:top-8 left-0 p-2 rounded-e-sm absolute ">
          Bryan Ribero, ganador edición 2023
        </div>
      </div>
    </main>
  );
}

export default page;
