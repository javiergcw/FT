import React from "react";
import Products from "./Products";
import Image from "next/image";

const Data = [
  {
    id: "1",
    src: "/images/products/arnica.svg",
  },

  {
    id: "2",
    src: "/images/products/jointima.svg",
  },

  {
    id: "3",
    src: "/images/products/nexcare.svg",
  },

  {
    id: "4",
    src: "/images/products/niveasun.svg",
  },

  {
    id: "5",
    src: "/images/products/pantene.svg",
  },

  {
    id: "6",
    src: "/images/products/procicar.svg",
  },

  {
    id: "7",
    src: "/images/products/tionacho.svg",
  },

  {
    id: "8",
    src: "/images/products/yogurt.svg",
  },
];

const ProductsOffers = () => {
  return (
    <div className="flex justify-between pt-2 lg:pt-10 border-[#D9D9D9] border-2 rounded-lg py-16 px-14 w-">
      <div className="grid lg:grid-cols-4 gap-11 md:w-8/12 md:mx-auto lg:w-full ">
        {Data.map((item, index) => (
          <Products src={item.src} />
        ))}
      </div>
    </div>
  );
};

export default ProductsOffers;
