import { React, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]  bg-purple-300">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/logo.png"
          alt="/"
          width="120"
          height="50"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Project
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden pr-4">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/40" : ""
        }
      >
        <div
          className={
            nav
              ? "  fixed left-0 top-0 w-[75%] sm:w-[60%] md:w[45%] h-screen bg-pink-200 p-10 ease-in duration-500"
              : "fixed left-[100%] top-0 p-10 ease-in duration-500 "
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/logo.png"
                width="100"
                height="50"
                alt="/"
              />
              <div
                onClick={handleNav}
                className=" rounded-full  bg-[#fcaf58]/40 shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className=" border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Building inclusive & accessible applications with empathy and
                creativity.
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase ">
              <Link href="/">
                <li className="py-4 text-sm hover:text-black hover:scale-105 ">
                  Home
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm hover:text-black hover:scale-105">
                  About
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm hover:text-black hover:scale-105">
                  Skills
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm hover:text-black hover:scale-105">
                  Projects
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm hover:text-black hover:scale-105">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40 text-center">
              <p className="uppercase tracking-widest text-[#01161e]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className=" rounded-full  bg-[#fcaf58]/40 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full  bg-[#fcaf58]/40 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full  bg-[#fcaf58]/40 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full  bg-[#fcaf58]/40 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
