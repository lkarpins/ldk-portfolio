import React from "react";
import Image from "next/image";
import Officeionado from "../public/assets/projects/officeionado.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const theofficeionado = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-slate-600/90 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Officeionado}
          alt="The Office-ionado Screenshot"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">The Office-ionado</h2>
          <h3> React / React Router / Express</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-xl tracking-widest uppercase text-purple-900">
            Solo Project
          </p>
          <h2 className="py-4">Overview</h2>
          <p className="italic font-bold text-lg">
            Arguably the best comedy series of the 2000s, The Office provided
            millions with an artillery of excellent one-liners. The series is
            over, but generations will continue to enjoy this classic through
            The Office-ionado, an application designed for users to test their
            recollection of some of the most legendary quotes. A search input
            allows users to easily find their favorites!
          </p>
          <p className="mt-3">
            With the use of React and Express.js, the Office-ionado was my first
            "full-stack" application. I initially had a different API in mind
            for this project idea, however a CORS issue prompted me to get
            creative and construct my own. I really enjoyed having the option to
            modifty/update the API throughout the development process.
          </p>
          <p className="mt-3">
            For each character quote, I embedded a gif to add to the user
            experience. This addition complicated the layout and sizing of my
            containers. To resolve this issue, I downloaded the
            html-react-parser dependency so I could style and size the embed
            gifs.
          </p>
          <div className="flex items-center justify-center pt-8">
            <a
              href="https://the-office-seven.vercel.app/"
              aria-label="Check out the deployed site for The Office-ionado"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-[#f9dc5c]/40 px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">
                Demo
              </button>
            </a>
            <a
              href="https://github.com/lkarpins/the-office"
              aria-label="Check out the code repository for The Office-ionado"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-[#f9dc5c]/40 px-8 py-2 mt-4 hover:scale-105 ease-in duration-300">
                Code
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 bg-[#fcaf58]/40 mx-6">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-black">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-slate-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-slate-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React Router
              </p>
              <p className="text-slate-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-slate-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Express
              </p>
              <p className="text-slate-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Cypress
              </p>
              <p className="text-slate-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vercel
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default theofficeionado;
