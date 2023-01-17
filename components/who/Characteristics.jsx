
import Image from "next/image";

const Data = [
    {
        id: "1",
        src: "/images/icons/Money.svg",
        label: "Precios competitivos",
    },

    {
        id: "2",
        src: "/images/icons/VectorA.svg",
        label: "Oportuna y amable atención",
    },

    {
        id: "3",
        src: "/images/icons/Shop.svg",
        label: "Surtido extenso de productos",
    },

    {
        id: "4",
        src: "/images/icons/Icons.svg",
        label: "Prácticas confiables",
    },

    {
        id: "5",
        src: "/images/icons/VectorB.svg",
        label: "Un gran número de sucursales",
    },
];

const Characteristics = () => {
    return (
        <>
            <div className="bg-[#0F51FA] rounded-lg px-36">
                <h1 className='text-3xl text-white font-bold text-center pt-16'>
                    Nuestro compromiso es apoyar la economía de nuestros clientes para poder brindarles:
                </h1>
                <div class="grid justify-items-center grid-cols-3 pt-24 pb-20 gap-y-14">
                    {Data.map((item, index) => (
                        <div className="flex flex-col text-center">
                            <Image
                                src={item.src}
                                width={100}
                                height={100}
                            />
                            <p className="text-white text-xl">
                                {item.label}
                            </p>
                        </div>
                    ))}

                </div>
            </div>

        </>
    )
}

export default Characteristics