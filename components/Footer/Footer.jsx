import React from "react";

import Link from "next/link";
import Image from "next/image";

import {
  FaFacebookF,
  FaInstagramSquare,
  FaYoutube,
  FaTiktok,
  FaRegQuestionCircle,
  FaAngleUp,
} from "react-icons/fa";

import { AiOutlineMail } from "react-icons/ai";

export const Footerft = () => (
  <div >
    {/* Boton */}
    <div className="flex justify-end">
      <Link href="#">
        <button className="inline-block text-center text-white transition bg-[#8CA6EA] rounded-full shadow ripple hover:shadow-lg focus:outline-none">
          <FaAngleUp className="w-9 h-9 p-2 text-[#0F51FA]" />
        </button>
      </Link>
    </div>
    {/*  Centro de ayuda y contactanos */}
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 pb-4">
      <div className="grid grid-cols-1">
        <h3 className="font-bold text-[#091535]">Centro de ayuda y contacto</h3>

        <label className="inline-flex items-center text-[#637381]">
          <FaRegQuestionCircle />
          <span>¿Tienes alguna duda?</span>
        </label>

        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Te ayudamos aqui
          </button>
        </div>
        <div className="text-[#637381]">
          Consulta tus dudas sobre medicamentos con nuestros farmaceuticos aqui
        </div>
      </div>

      <div className="grid grid-cols-1 pb-2 lg:pb-14 ">
        <h3 className="font-bold text-[#091535]">Conócenos</h3>
        <Link className="text-[#637381]" href="#">
          ¿Qué es farmacia Torres?
        </Link>
        <Link className="text-[#637381]" href="#">
          Trabaja con nosotros
        </Link>
      </div>

      <div className="grid grid-cols-1 pb-4">
        <div className="font-bold text-[#091535]"> Siguenos en</div>

        <div className="flex justify-start pb-2 lg:pb-14">
          <div className="">
            <Link href="https://es-la.facebook.com/FarmaciatorresWeb/">
              <button className="inline-block text-center text-white transition bg-white rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
                <FaFacebookF className="w-9 h-9 p-2 hover:text-white text-black" />
              </button>
            </Link>
            <Link href="https://www.instagram.com/farmaciatorres/">
              <button className="inline-block text-center text-white transition bg-white rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
                <FaInstagramSquare className="w-9 h-9 p-2 hover:text-white text-black" />
              </button>
            </Link>
            <Link href="https://www.youtube.com/@farmaciatorres6804">
              <button className="inline-block text-center text-white transition bg-white rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
                <FaYoutube className="w-9 h-9 p-2 hover:text-white text-black" />
              </button>
            </Link>
            <Link href="https://www.tiktok.com/@farmaciatorres_">
              <button className="inline-block text-center text-white transition bg-white rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
                <FaTiktok className="w-9 h-9 p-2 hover:text-white text-black" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <hr width="100%" />
    {/* Newslestter */}
    <>
      <h3 className="py-2 font-bold text-[#091535]">
        Suscríbete a nuestro Newsletter
      </h3>
      <form>
        <div className="grid grid-cols-1 py-2">
          <div className="relative w-64">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Digite su correo electronico"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <AiOutlineMail className="text-xl" />
            </button>
          </div>
          <p className="py-4 text-[#637381]">
            Entérate primero de nuestras exclusivas ofertas y promociones.
            ¡Suscríbete!
          </p>
          <div className="flex ">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-[#637381]">
                He leido la
                <span className="font-semibold">
                  <Link href="#"> politica y privacidad</Link>
                </span>{" "}
                y acepto los <span> </span>
                <span className="underline font-semibold">
                  <Link href="#"> términos y condiciones</Link>
                </span>
              </span>
            </label>
          </div>
        </div>
      </form>
      <p className="py-2 text-[#637381]">
        Te informamos de que Farmacia Torres tratará el correo electrónico
        facilitado para remitirte comunicaciones comerciales o promociones en
        base a tu perfil de usuario, en caso de otorgar tu consentimiento. Más
        información aquí
      </p>
    </>
    <hr width="100%" />
    {/*  Images */}
    <div className="grid grid-cols-1 lg:flex lg:justify-between py-4">
      <Image
        className="pb-6 lg:py-0"
        src="/images/industriaycomercio.svg"
        width={190}
        height={50}
      />
      <Image
        className="pb-2 lg:py-0"
        src="/images/cards.svg"
        width={190}
        height={30}
      />
    </div>
    <hr width="100%" />
    {/* Derechos reservados */}
    <div className="grid grid-cols-1 text-left lg:text-start text-[#637381] lg:flex lg:justify-between py-2 lg:pb-0">
      <p>© 2023 Farmacia Torres. Todos los derechos reservados.</p>
      <div className="grid grid-cols-1 text-left lg:text-right py-4 lg:py-0">
        <Link className="pb-1" href="#">
          Condiciones de uso
        </Link>
        <Link className="pb-1" href="#">
          Politicas de Cookies
        </Link>
        <Link className="pb-1" href="#">
          Politicas y términos de uso
        </Link>
        <Link className="pb-4" href="#">
          Politicas de prviacidad
        </Link>
      </div>
    </div>
  </div>
);

export default Footerft;
