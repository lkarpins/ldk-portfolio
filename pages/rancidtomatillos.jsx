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
          <p className="text-xl tracking-widest uppercase text-purple-900">
            Paired Project
          </p>
          <h2 className="py-4">Overview</h2>
          <p className="italic font-bold text-lg mt-3">
            Leveraging the power of React, we created a quasi-clone of Rotten
            Tomatoes dubbed Rancid Tomatillos! This application provides a list
            of movie cards from an API with their poster image and rating, which
            can each be individually clicked on by the user, routing to a movie
            summary page. Each summary containins movies details, a promotional
            photo, and a movie trailer.
          </p>
          <p className="mt-3">
            Rancid Tomatillos was my first React application. I recall how
            exciting it was to see how quickly a project came together using
            React. We experienced some obstacles while familiarizing ourselves
            with JSX syntax and React Router, however developed a rhythm as we
            went. Utilizing class components, we got to see how state was
            managed and data was passed through props. Overall, it was a great
            introduction to the world of JavaScript libraries and frameworks.
          </p>
          <div className="flex items-center justify-center pt-8">
            <Link
              className="bg-[#f9dc5c] px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase text-black hover:scale-105 ease-in duration-300"
              href="https://rancid-tomatillos-vert.vercel.app/"
              aria-label="Check out the deployed site for Rancid Tomatillos"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </Link>
            <Link
              className="bg-[#f9dc5c] px-8 py-2 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase text-black hover:scale-105 ease-in duration-300"
              href="https://github.com/lkarpins/rancid-tomatillos"
              aria-label="Check out the code repository for Rancid Tomatillos"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </Link>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4  bg-[#f7f4f0] mx-6">
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
                JSX
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

export default rancidtomatillos;
