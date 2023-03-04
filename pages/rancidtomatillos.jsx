import React from "react";
import Image from "next/image";
import Rancid from "../public/assets/projects/rancid.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const rancidtomatillos = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-slate-600/90 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Rancid}
          alt="Rancid Tomatillos Screenshot"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Rancid Tomatillos</h2>
          <h3> React / React Router / JavaScript</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-xl tracking-widest uppercase text-purple-600">
            Project
          </p>
          <h2 className="py-4">Overview</h2>
          <p>
            Discuss why you made it, who you made it with, what you learned, and
            obstacles along the way.
          </p>
          <div className="flex items-center justify-center pt-8">
            <a
              href="https://rancid-tomatillos-vert.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-[#f9dc5c]/40 px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">
                Demo
              </button>
            </a>
            <a
              href="https://github.com/lkarpins/rancid-tomatillos"
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
              </p>{" "}
              <p className="text-slate-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>{" "}
              <p className="text-slate-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JSX
              </p>{" "}
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

export default rancidtomatillos;