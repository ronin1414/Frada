"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-custom-blue min-h-screen flex items-center justify-center">
      <div className="w-full lg:flex lg:gap-x-20 lg:px-24">
        {/* Texto */}
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:text-left flex flex-col justify-center">
          <h2 className="
  font-bold
  text-white
  xxs:text-[16px]
  xs:text-[20px]
  ssm:text-[24px]
  sm:text-[28px]
  md:text-[32px]
  lg:text-[20px]
  xl:text-[24px]
  xxl:text-[28px]
  2xl:text-[30px]
  3xl:text-[32px]
">
            Diseños Personalizados.
          </h2>
          <h3 className="mt-6 text-gray-300  
            font-semibold
            xxs:text-[14px]
            xs:text-[18px]
            ssm:text-[22px]
            sm:text-[26px]
            md:text-[30px]
            lg:text-[18px]
            xl:text-[20px]
            xxl:text-[24px]
            2xl:text-[26px]
            3xl:text-[28px]
  "
          >
            Tazas, gorras, remeras y stickers únicos, creados a tu medida para que cada detalle cuente tu historia.
          </h3>
          <p className="mt-6 text-gray-300
            font-normal
            xxs:text-[10px]
            xs:text-[12px]
            ssm:text-[16px]
            sm:text-[20px]
            md:text-[22px]
            lg:text-[15px]
            xl:text-[16px]
            xxl:text-[20px]
            2xl:text-[22px]
            3xl:text-[24px]
          ">
            En nuestro taller transformamos ideas en objetos únicos. Ya sea para regalar, promocionar tu marca o darte un gusto personal, personalizamos cada pieza con tu diseño favorito, cuidando cada detalle y la calidad de los materiales.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="#"
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow hover:bg-gray-100"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-white hover:text-gray-100"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Imagen con tamaños personalizados */}
        <div className="relative mt-16 lg:mt-0 lg:flex-auto flex justify-center items-center">
          <Image
            src="/img01.png"
            alt="Tazas Personalizadas"
            className="
              w-auto h-auto rounded-md
              xxs:w-[33px] xxs:h-[10px]
              xs:w-[222px] xs:h-[213px]
              ssm:w-[329px] ssm:h-[315px]
              sm:w-[400px] sm:h-[385px]
              md:w-[490px] md:h-[470px]
              lg:w-[300px] lg:h-[289px]
              xl:w-[550px] xl:h-[528px]
              xxl:w-[618px] xxl:h-[594px]
              2xl:w-[660px] 2xl:h-[634px]
              3xl:w-[722px] 3xl:h-[694px]
            "
          />
        </div>
      </div>
    </div>
  );
}