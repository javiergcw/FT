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
    <div className="grid lg:grid-cols-6 gap-6 md:w-8/12 md:mx-auto lg:w-full place-items-center ">
      {/*  Bayer */}
      <div
        className="inline-block text-center text-white transition
                 rounded-full shadow ripple hover:shadow-lg focus:outline-none border-[#D9D9D9] border-2 "
      >
        <div className="px-5 py-5">
          <Link href="#">
            <Image
              src="/images/marks/bayer.svg"
              className="p-4"
              width={133}
              height={133}
            />
          </Link>
        </div>
      </div>
      {/* -- */}

      {/*  Bioderma */}
      <div
        className="inline-block text-center text-white transition
                 rounded-full shadow ripple hover:shadow-lg focus:outline-none border-[#D9D9D9] border-2 "
      >
        <div className="px-5 py-12">
          <Link href="#">
            <Image
              src="/images/marks/bioderma.svg"
              className="p-1"
              width={130}
              height={73}
            />
          </Link>
        </div>
      </div>
      {/* -- */}

      {/* Eucerin */}
      <div
        className="inline-block text-center text-white transition
                 rounded-full shadow ripple hover:shadow-lg focus:outline-none border-[#D9D9D9] border-2 "
      >
        <div className="px-5 py-12">
          <Link href="#">
            <Image
              src="/images/marks/eucerin.svg"
              className="p-1"
              width={140}
              height={80}
            />
          </Link>
        </div>
      </div>
      {/* -- */}

      {/* Headshoulders */}
      <div
        className="inline-block text-center text-white transition
                 rounded-full shadow ripple hover:shadow-lg focus:outline-none border-[#D9D9D9] border-2 "
      >
        <div className="px-5 py-12">
          <Link href="#">
            <Image
              src="/images/marks/headshoulders.svg"
              width={125}
              height={70}
            />
          </Link>
        </div>
      </div>
      {/* -- */}

      {/* Neutrogena */}
      <div
        className="inline-block text-center text-white transition
                 rounded-full shadow ripple hover:shadow-lg focus:outline-none border-[#D9D9D9] border-2 "
      >
        <div className="px-5 py-12">
          <Link href="#">
            <Image src="/images/marks/neutrogena.svg" width={140} height={80} />
          </Link>
        </div>
      </div>
      {/*  -- */}

      {/* Pedialyte */}
      <div
        className="inline-block text-center text-white transition
                 rounded-full shadow ripple hover:shadow-lg focus:outline-none border-[#D9D9D9] border-2 "
      >
        <div className=" px-5 py-16 ">
          <Link href="#">
            <Image
              src="/images/marks/pedialyte.svg"
              className="p-1"
              width={145}
              height={52}
            />
          </Link>
        </div>
      </div>
      {/* -- */}
    </div>
  );
};

export default Marks;
