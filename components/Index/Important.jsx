import React from "react";
import Image from "next/image";

const Data = [
  {
    id: "1",
    src: "/images/icons/Shopping.svg",
    title: " productos",
    bold: "+10.000",
  },

  {
    id: "2",
    src: "/images/icons/Hands.svg",
    title: "Acumula puntos y ahorra",
  },

  {
    id: "3",
    src: "/images/icons/Car.svg",
    title: "Envíos gratis",
  },
];


const Important = () => {
  return (
    <div className="border-[#D9D9D9] border-2 rounded-lg h-36">
      <div className="grid grid-cols-3 justify-items-center">
        {Data.map((item, index) => (
          <div className="flex flex-row p-14 gap-x-4 ">
            <Image src={item.src} width={80} height={80} />
            <p className="text-[#091535] text-3xl font-semibold pt-5">
              <span className="font-bold">{item.bold} </span>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Important