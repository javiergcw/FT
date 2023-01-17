import Image from "next/image";
import React from "react";

const Products = (props) => {
  return (
    <div className="border-[#D9D9D9] border-2 rounded-lg text-center w-64 h-474 mx-auto">
      <Image className="w-" src={props.src} width={250} height={245} />
      <hr width="100%" className="h-0.5 mx-auto bg-[#D9D9D9] border-0 " />

      <div className="px-4">
        <p className="text-[#637381] text-sm font-semibold py-3">Pedialyte</p>
        <p className="text-[#091535] text-sm font-semibold pb-3">
          Suero rehidratación pedialyte 30 meq durazno
        </p>
        <p className="text-[#637381] text-sm font-semibold">Frasco x 500 ml</p>
        <p className="text-[#0F51FA] font-bold text-2xl py-2">$ 7.230</p>

        <button
          className="bg-[#0F51FA] content-center  text-lg text-white font-semibold py-3 h-10 w-full rounded-lg">
          Comprar
        </button>
      </div>

    </div>
  );
};

export default Products;
