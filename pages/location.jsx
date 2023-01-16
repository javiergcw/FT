
import Routelabel from "../components/routelabel";
import Image from "next/image";

const Data = [
  {
    id: "1",
    label: "BARANOA – CARRERA 19 No. 14-36",
  },

  {
    id: "2",
    label: "BARANOA – CARRERA 19 Nº 9 – 34",
  },

  {
    id: "3",
    label: "CALLE 19 No. 17-101",
  },

  {
    id: "4",
    label: "CALLE 21 No. 46-45",
  },

  {
    id: "5",
    label: "CALLE 47 No. 18-35",
  },

  {
    id: "6",
    label: "CALLE 57 No. 23-07",
  },

  {
    id: "7",
    label: "BARANOA – CARRERA 19 Nº 9 – 34",
  },

  {
    id: "8",
    label: "BARANOA – CARRERA 19 No. 14-36",
  },

  {
    id: "9",
    label: "CALLE 19 No. 17-101",
  },

  {
    id: "10",
    label: "CALLE 21 No. 46-45",
  },

  {
    id: "11",
    label: "CALLE 47 No. 18-35",
  },
  {
    id: "12",
    label: "CALLE 57 No. 23-07",
  },

];

const location = () => {
  return (
    <>
      <div className="pt-6">
        <Routelabel label="Ver farmacias" />
        <div class="relative">
          <Image
            src="/images/Banner.svg"
            className="w-full"
            width={255}
            height={1246}
          />
          <h1 className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">

            <p1 className="text-7xl font-bold ">Atlantico</p1>

            <div class="flex justify-between text-center pt-5">
              <div class="...">Atlántico</div>
              <div class="...">Bolívar</div>
              <div class="...">Magdalena</div>
            </div>
          </h1>
        </div>

        <h2 className="text-4xl font-semibold py-8">Direcciones</h2>

        <div class="grid grid-cols-3 gap-4">
          {Data.map((item, index) => (
            <div class="border-[#D9D9D9] border-2 
             rounded-lg font-semibold p-5 
             ">
              <div className="grid grid-flow-col auto-cols-max">
                <Image src="/images/Logotype.svg" width={50} height={50} />
                <p className="py-3 pl-4">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>


  );
};

export default location;
