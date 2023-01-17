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
    <div className="border-2 rounded-lg ">
      <div className="grid grid-cols-4">
        {Data.map((item, index) => (
          <Products src={item.src} />
        ))}
      </div>
    </div>
  );
};

export default ProductsOffers;
