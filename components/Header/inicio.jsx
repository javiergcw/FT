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
      <div className="text-[#637381] grid lg:grid-cols-2">
        <div>
          <span className="font-semibold">Llama ahora: </span>(605) 3851717
        </div>
        <div>
          <div className="flex mb-0">
            <div class="w-1/2 p-2 text-center"></div>

            <div class="w-5/6 text-center">
              <p className="text-sm">
                <Image
                  className="float-left pt-px"
                  src="/images/icons/CarGray.svg"
                  width={22}
                  height={16}
                />
                <span>Envíos gratis</span> por compras superiores a $49.900
              </p>
            </div>

            <div class="w-1/4 text-center text-sm">
              <Link href="#">Ver farmacias</Link>
            </div>
          </div>
        </div>
      </div>

      <hr width="100%" />

      <div className="flex">
        <div className="w-1/2">
          <Image src="/images/Logo.svg" width={315} height={32} />
        </div>

        <div className="w-1/2">
          <div className="relative w-96">
            <input
              type="search"
              id="search-dropdown"
              className="block rounded-lg
              p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Busca entre miles de productos y marcas"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5  text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <FaSearch className="text-xl" />
            </button>
          </div>
        </div>

        <div className="grid grid-flow-col w-44 ">
          <div className="content-center text-[#091535] font-semibold">
            <div className="grid grid-flow-row w-16 place-content-center">
              <button
                type="button"
                class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <Image
                  src="/images/icons/PProfilewhite.svg"
                  width={22}
                  height={23}
                />
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
