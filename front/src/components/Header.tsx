"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <section>
        <article
          className={`
            flex justify-between 
            items-center
            bg-custom-blue w-full
            xxs:h-[42px] xss:px-1
            xs:h-[61px] xs:px-2
            ssm:h-[61px] ssm:px-3
            sm:h-[61px] sm:px-4
            md:h-[61px] md:px-12
            lg:h-[61px] lg:px-20
            xl:h-[61px] xl:px-23
            xxl:h-[61px] xxl:px-23
            2xl:h-[61px] 2xl:px-25
            3xl:h-[61px] 3xl:px-27
          `}
        >
          <Image
            src="/Logo.svg"
            alt="Logo"
            className="
              xxs:w-[33px] xxs:h-[10px]
              xs:w-[61px] xs:h-[38px]
              ssm:w-[61px] ssm:h-[38px]
              sm:w-[61px] sm:h-[38px]
              md:w-[61px] md:h-[38px]
              lg:w-[61px] lg:h-[38px]
              xl:w-[61px]] xl:h-[38px]
              xxl:w-[61px] xxl:h-[38px]
              2xl:w-[61px] 2xl:h-[38px]
              3xl:w-[61px] 3xl:h-[38px]
            "
            priority
          />

          {/* Menú escritorio */}
          <div
          className={`
            flex
            items-center
          `}
        >
          <ul className="hidden md:flex flex-row font-medium space-x-8">
            <li>
              <a
                href="#"
                className="block font-normal rounded-sm md:text-xs md:text-white md:hover:text-blue-400"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block font-normal rounded-sm md:text-xs md:text-white md:hover:text-blue-400"
              >
                Productos
              </a>
            </li>
          </ul>

          {/* Botones */}
          <div className="flex items-center space-x-3 xxs:mr-[4px] xs:mr-[8px] ssm:mr-[12px] sm:mr-[16px] md:ml-[8px] lg:ml-[10px] xl:ml-[12px] xxl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[20px]">
            <button
              type="button"
              className="
                text-white
                bg-blue-700
                hover:bg-blue-800
                focus:ring-4
                focus:outline-none
                focus:ring-blue-300
                font-medium
                rounded-lg
                xxs:text-[3px] xxs:leading-[5px] xxs:px-[4px] xxs:py-[2px]
                xs:text-[14px] xs:leading-[20px] xs:px-[16px] xs:py-[8px]
                ssm:text-[14px] ssm:leading-[20px] ssm:px-[16px] ssm:py-[8px]
                sm:text-[14px] sm:leading-[20px] sm:px-[16px] sm:py-[8px]
                md:text-[14px] md:leading-[20px] md:px-[16px] md:py-[8px]
                lg:text-[14px] lg:leading-[20px] lg:px-[16px] lg:py-[8px]
                xl:text-[14px] xl:leading-[20px] xl:px-[16px] xl:py-[8px]
                xxl:text-[14px] xxl:leading-[20px] xxl:px-[16px] xxl:py-[8px]
                2xl:text-[14px] 2xl:leading-[20px] 2xl:px-[16px] 2xl:py-[8px]
                3xl:text-[14px] 3xl:leading-[20px] 3xl:px-[16px] 3xl:py-[8px]
                text-center
                dark:bg-blue-600
                dark:hover:bg-blue-700
                dark:focus:ring-blue-800
              "
            >
              Get started
            </button>
            </div>
            {/* Botón hamburguesa */}
            <button
              type="button"
              className="
                inline-flex items-center md:hidden
                text-gray-500 rounded-lg
                hover:bg-gray-100 focus:outline-none focus:ring-2
                focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
                xxs:text-[7px] xxs:p-[5px] xxs:w-[20px] xxs:h-[20px]
                xs:text-[10px] xs:p-[5px] xs:w-[30px] xs:h-[30px]
                ssm:text-[10px] ssm:p-[6px] ssm:w-[30px] ssm:h-[30px]
                sm:text-[14px] sm:p-[8px] sm:w-[40px] sm:h-[40px]
              "
              aria-controls="navbar-cta"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </article>

        {/* Menú móvil */}
        <div id="navbar-cta" className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col font-medium rounded-lg xxs:bg-gray-50 xxs:border xxs:border-gray-100 xs:bg-gray-50 xs:border xs:border-gray-100 sm:bg-gray-50 sm:border sm:border-gray-100">
            <li>
              <a href="#" className="block p-2">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="block p-2">
                Productos
              </a>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
}