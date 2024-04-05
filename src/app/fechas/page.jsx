import React from "react";
import Image from "next/image";

function page() {
  return (
    <main className="flex w-full ms-auto me-auto p-6">
      <div className="relative flex gap-4 ms-auto me-auto">
        <Image
          className="image rounded-lg"
          src={"/villaespana.jpg"}
          alt="Foto largada Complejo Villa España 2023"
          width={700}
          height={400}
          quality={100}
          priority={true}
        ></Image>
        <div className=" z-40 bgFechas text-sm md:text-lg text-white top-4 md:top-8 p-1 md:p-2 rounded-e-sm absolute ">
          Largada Complejo Villa España, edición 2023
        </div>
      </div>
    </main>
  );
}

export default page;
