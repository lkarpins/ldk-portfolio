import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  console.log("Hi! Thanks for checking out my portfolio! :]");
  return (
    <div id="Home" className="w-full h-screen text-center">
      <div className=" max-w-[1240px] w-full h-full mx-auto p-2 min-h-screen flex items-center justify-center ">
        <div className="hidden md:flex relative w-full max-w-lg">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div>
          <h2 className=" tracking-widest text-slate-600">Hi! My name is</h2>
          <h1 className="py-4 text-black">Lidia Karpinski.</h1>
          <h2 className="py-2 text-slate-600">I'm a Software Engineer.</h2>
          <p className="py-4 text-black font-black max-w-[70%] m-auto">
            As a Speech-Language Pathologist turned Software Engineer, I merged
            a passion for communication and accessibility by creating inclusive
            technology through team collaboration, creative problem solving, and
            empathy to maximize user experience.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link
              href="https://www.linkedin.com/in/lidia-karpinski/"
              aria-label="Lidia's LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full bg-[#f9dc5c] shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-105  ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              href="https://github.com/lkarpins"
              aria-label="Lidia's Github"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full  bg-[#f9dc5c] shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-105  ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link
              href="mailto:lidiakarpinski@gmail.com"
              aria-label="Send an email to Lidia"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full  bg-[#f9dc5c]  shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-105  ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
