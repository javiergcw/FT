import Image from "next/image"

const Welcome = () => {
    return (
        <div className="border-[#D9D9D9] border-2 rounded-lg">
            <div className="px-52 py-28 w-full text-center	">
                <Image
                    className="pb-14"
                    src="/images/Logo.svg"
                    width={1254}
                    height={85}
                />
                <h1 className="text-4xl text-[#0F51FA] font-semibold pb-5">
                    ¡Bienvenido a Farmacia Torres!
                </h1>
                <p className="text-xl">
                    Somos una cadena de droguerías líder en el suministro de medicamentos, productos de higiene personal, cuidado del bebé y cosméticos entre otros, que tiene como compromiso principal la salud y el bienestar de nuestros clientes.
                </p>
            </div>
        </div>
    )
}

export default Welcome