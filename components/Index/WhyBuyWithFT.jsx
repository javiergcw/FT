import React from "react";

import {
  FaHandHoldingUsd,
  FaAngleRight,
  FaRegUserCircle,
  FaDiaspora,
} from "react-icons/fa";

import Image from "next/image";

const Cards = [
  {
    id: "1",
    src: "/images/icons/Profile.svg",
    title: "Acumula puntos por tus compras y ahorra",
    category: "Cosmética facial",
  },

  {
    id: "2",
    src: "/images/icons/Profile.svg",
    title: "-50%*",
    category: "Tratamiento anticaida",
  },

  {
    id: "3",
    src: "/images/icons/Discount.svg",
    title: "-30%*",
    category: "Alimentación infantil",
  },
];

const WhyBuyWithFT = () => {
  return (
    <div className="bg-[#EDF2FF]">
      <div>
        <h1 className="text-[#0F51FA] text-4xl font-bold flex justify-center pb-14 pt-6">
          ¿Por qué comprar con Farmacia Torres?
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 text-white gap-x-8 space-x-2 gap-y-8 px-14">
          {Cards.map((item, index) => (
            <div className="bg-[#0F51FA] flex flex-row p-11 rounded-lg gap-x-2">
              <Image src={item.src} width={45} height={44} />
              <div className="pt-2 flex flex-row">
                <p className="text-lg">
                  Acumula puntos por tus compras y ahorra
                </p>
                <FaAngleRight className="text-3xl" />
              </div>
            </div>
          ))}
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default WhyBuyWithFT;
