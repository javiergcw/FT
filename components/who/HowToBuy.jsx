
import Image from "next/image";

const Data = [
    {
        id: "1",
        src: "/images/icons/Pill.svg",
        title: "Busca tus productos de salud y belleza",
        label: "Utiliza el buscador o navega por las diferentes categorías",
    },

    {
        id: "2",
        src: "/images/icons/Cart.svg",
        title: "Ahorra en tu cesta",
        label: "Nuestro algoritmo busca entre más de 1.000 farmacias la mejor opción para que tu compra sea más económica",
    },

    {
        id: "3",
        src: "/images/icons/Bag.svg",
        title: "Realiza tu compra",
        label: "Introduce tu dirección y confirma el pago de forma segura",
    },

    {
        id: "4",
        src: "/images/icons/CarBlue.svg",
        title: "Recibe tu pedido",
        label: "Recogemos tu pedido en la farmacia y lo entregamos donde tú quieras",
    },

];


const HowToBuy = () => {
    return (
        <div className="border-[#D9D9D9] bg-[#EFF4FF] border-2 rounded-lg py-16 px-14">
            <h2 className="text-4xl font-bold text-[#0F51FA] text-center pb-10">¿Cómo comprar en Farmacia Torres?</h2>
            <div className="grid grid-cols-1" >
                {Data.map((item, index) => (
                    <div className="grid grid-flow-col justify-start pt-20">


                        <Image
                            className="w-20 h-20 "
                            src={item.src}
                            width={80}
                            height={78}
                        />

                        <div className="pl-5 mx-auto pt-2">
                            <text className=""> <h4 className="font-semibold text-2xl  ">{item.title}</h4> </text>
                            <text className="text-[#637381] text-lg " >{item.label}</text>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default HowToBuy