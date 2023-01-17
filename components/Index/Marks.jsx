import React from "react";
import Image from "next/image";
import Link from "next/link";

const Data = [
  {
    id: "1",
    src: "/images/marks/bayer.svg",
    href: "#",
    width: "113",
    height: "113",
  },
  {
    id: "2",
    src: "/images/marks/bioderma.svg",
    href: "#",
    width: "130",
    height: "73",
  },
  {
    id: "3",
    src: "/images/marks/eucerin.svg",
    href: "#",
    width: "140",
    height: "80",
  },
  {
    id: "4",
    src: "/images/marks/headshoulders.svg",
    href: "#",
    width: "125",
    height: "70",
  },
  {
    id: "5",
    src: "/images/marks/neutrogena.svg",
    href: "#",
    width: "140",
    height: "80",
  },
  {
    id: "6",
    src: "/images/marks/pedialyte.svg",
    href: "#",
    width: "145",
    height: "52",
  },
];

const Marks = () => {
  return (
    <div className="container grid lg:grid-cols-6 gap-6 md:w-8/12 md:mx-auto lg:w-full pb-16">


      {Data.map((item, index) => (
        <Link href={item.href} className=" inline-block text-center text-white transition
        rounded-full shadow ripple hover:shadow-lg focus:outline-none w-44 h-44 border-[#D9D9D9] border-2">

          <div className="">
            <Image
              className="flex-shrink-0 object-cover object-center w-full h-full mx-auto -mt-8 rounded-full shadow-xl"
              src={item.src}
              width={100}
              height={100}
            />
          </div>
        </Link>
      ))}

    </div>
  );
};

export default Marks;
