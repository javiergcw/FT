import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { SlArrowDown, SlMenu } from "react-icons/sl";
import { RiMenuLine } from "react-icons/ri";

const Links = [
  { id: "1", src: "#", title: "Medicamentos" },
  { id: "2", src: "#", title: "Salud y belleza" },
  { id: "3", src: "#", title: "Botiquin" },
  { id: "4", src: "#", title: "Alimentos y bebidas" },
  { id: "5", src: "#", title: "Cuidado del bebé" },
  { id: "6", src: "#", title: "Varios" },
];

const Inicio = () => {
  return (
    <>
      <div className="text-[#637381] grid justify-between grid-flow-col auto-cols-max py-3">
        <div>
          <span className="font-bold">Llama ahora: </span>(605) 3851717
        </div>
        <div>
          <div className="flex justify-between text-center">
            <div className="pr-3">
              <Image
                className="float-left pt-1"
                src="/images/icons/CarGray.svg"
                width={24}
                height={16}
              />
              <span className="pl-3"> <span className="font-bold">Envíos gratis</span> por compras superiores a $49.900</span>
            </div>
            <Link href="#">Ver farmacias</Link>
          </div>
        </div>
      </div>

      <hr width="100%" className="px-px" />

      <div className="flex ">
        <div className="py-8">
          <Image src="/images/Logo.svg" width={315} height={32} />
        </div>

        <div className="py-8">
          <div className="relative w-full grid grid-flow-col auto-cols-max object-center">
            <input
              type="search"
              id="search-dropdown"
              className="
              p-2.5 w-96 z-20 bg-[#EFF4FF] rounded-l-lg text-base font-semibold
              focus:ring-blue-500 border-r-[#EFF4FF] focus:border-blue-500 border-[#D9D9D9] border-2 "
              placeholder="Busca entre miles de productos y marcas"
            />

            <button
              type="submit"
              className=" p-2.5 w-12 h-12  text-sm font-medium  text-white bg-blue-700 rounded-r-lg  hover:bg-blue-800  focus:ring-blue-300 border-1"
            >
              <div className="">
                <Image
                  className=""
                  src="/images/icons/Search.svg"
                  width={30}
                  height={30} />
              </div>
            </button>


          </div>
        </div>

        <div className="grid grid-flow-col w-48 pt-6  ">
          <div className="content-center text-[#091535] font-semibold ">
            <div className="grid grid-flow-row place-content-center pl-1 w-14 h-14">
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <div className=""> <Image
                  className=""
                  src="/images/icons/PProfilewhite.svg"
                  width={30}
                  height={23}
                /></div>
              </button>
            </div>
            Mi cuenta
          </div>
          <div className="content-center text-[#091535] font-semibold ">
            <div className="grid grid-flow-row place-content-center">
              <button
                type="button"
                class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <Image
                  src="/images/icons/ShoppingWhite.svg"
                  width={30}
                  height={23}
                />
              </button>
            </div>
            Mi carrito
          </div>
        </div>
      </div>

      <hr width="100%" />

      <div className="flex">
        <div className="w-2/3">
          <button
            type="button"
            class="text-white bg-[#0F51FA] hover:bg-[#0F51FA]/80 focus:ring-4 focus:outline-none focus:ring-[#0F51FA]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
          >
            <SlMenu className="" />
            <p className="px-2">Categorias</p>
            <SlArrowDown />
          </button>
        </div>
        <div className="w-1/2" />
        {Links.map((item, index) => (
          <div className="w-1/2 text-center text-base text-[#637381]">
            <Link href={item.src}>{item.title}</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Inicio;
