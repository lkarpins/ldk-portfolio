import React from "react";
import Image from "next/image";
import PickMeUp from "../public/assets/projects/pickmeup.png";
import Link from "next/link";

const pickmeup = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-slate-600/90 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={PickMeUp}
          alt="/"
          aria-label="PickMeUp Screenshot"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">PickMeUp</h2>
          <h3> React / TypeScript / Local Storage</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-xl tracking-widest uppercase text-purple-900">
            Group Project - 3 members
          </p>
          <h2 className="py-4">Overview</h2>
          <p className="italic font-bold text-lg">
            Everyone has bad days…PickMeUp is an application that provides an
            uplifting compliment and/or a solid piece of advice to put a smile
            on your face! Users have the opportunity to browse through a variety
            of compliments/advice as well as favorite their most liked!
          </p>
          <p className="mt-3">
            Utilizing TypeScript for the first time, my group members and I got
            to experience the advantages of a built-in type system. Before
            getting started, I conducted research on TypeScript by reviewing the
            docs and completing a Scrimba course. As a team we then shared our
            learning experiences to start the build. There were plenty of
            hurdles learning the syntax, however the type and error checking of
            the compiler far exceeded the challenge of having to write a few
            extra lines of code. It definitely showed us the value of implenting
            TypeScript with large-scale applications; so many hours saved from
            refactoring and debugging!
          </p>
          <p className="mt-3">
            Throughout this project, my group members and I took full advantage
            of React’s modular nature by creating dynamically rendered
            components and views. This helped us keep the app small yet provided
            the user with a pleasant experience. We implemented thoughtful
            architecture through the use of shared utilities, global extendable
            interfaces, and views as well as implemented Local Storage to store
            our favorite compliments and pieces of advice. We styled the app
            using shared classes that reduced the amount of repeated CSS
            throughout the app as well as applying media queries to make
            everything mobile responsive.
          </p>
          <div className="flex items-center justify-center pt-8">
            <Link
              className="bg-[#f9dc5c] px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase text-black hover:scale-105 ease-in duration-300"
              href="https://pick-me-up-ten.vercel.app/"
              aria-label="Check out the deployed site for PickMeUp"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </Link>
            <Link
              className="bg-[#f9dc5c] px-8 py-2 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase text-black hover:scale-105 ease-in duration-300"
              href="https://github.com/lkarpins/pick-me-up"
              aria-label="Check out the code repository for PickMeUp"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </Link>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 bg-[#f7f4f0] mx-6">
          <div className="p-2">
            <p className="text-center font-extrabold text-black border-b border-black my-4">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-slate-600 py-2 flex items-center">
                TypeScript
              </p>
              <p className="text-slate-600 py-2 flex items-center">React</p>
              <p className="text-slate-600 py-2 flex items-center">
                React Router
              </p>
              <p className="text-slate-600 py-2 flex items-center">
                Local Storage
              </p>
              <p className="text-slate-600 py-2 flex items-center">Cypress</p>
            </div>
          </div>
        </div>
        <Link href="/#projects" aria-label="Go back to Projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default pickmeup;
