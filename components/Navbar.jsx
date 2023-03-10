import { React, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/projects/logo.png";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#e8d7ff");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/roedtoaid" ||
      router.asPath === "/theofficeionado" ||
      router.asPath === "/pickmeup" ||
      router.asPath === "/rancidtomatillos"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#e8d7ff");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/" aria-label="Home">
          <Image src={Logo} alt="/" aria-label="LK Logo" width="100" />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/" aria-label="Home">
              <li className="ml-10 text-sm uppercase hover:scale-110">Home</li>
            </Link>
            <Link href="/#about" aria-label="About">
              <li className="ml-10 text-sm uppercase hover:scale-110">About</li>
            </Link>
            <Link href="/#skills" aria-label="Skills">
              <li className="ml-10 text-sm uppercase hover:scale-110">
                Skills
              </li>
            </Link>
            <Link href="/#projects" aria-label="Projects">
              <li className="ml-10 text-sm uppercase hover:scale-110">
                Projects
              </li>
            </Link>
            <Link href="/#contact" aria-label="Contact">
              <li className="ml-10 text-sm uppercase hover:scale-110">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <button
          onClick={handleNav}
          className="lg:display-none md:hidden pr-4"
          tabIndex={0}
          aria-label="View Menu"
        >
          <AiOutlineMenu size={25} />
        </button>
      </div>
      <div
        className={
          nav
            ? " md:hidden  fixed left-0 top-0 w-full h-screen bg-black/40"
            : ""
        }
      >
        <div
          className={
            nav
              ? "  fixed left-0 top-0 w-[75%] sm:w-[60%] md:w[45%] h-screen bg-[#f7f4f0] p-10 ease-in duration-500"
              : "fixed left-[100%] top-0 p-10 ease-in duration-500 "
          }
        >
          <div className="flex w-full items-center justify-between">
            <Link href="/" className="md:invisible">
              <Image src={Logo} width="100" alt="LK Logo" />
            </Link>
            <div
              onClick={handleNav}
              className=" rounded-full  bg-[#f9dc5c] shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <a href="/" className="md:invisible" aria-label="Close Menu">
                <AiOutlineClose />
              </a>
            </div>
          </div>
          <div className=" border-b border-gray-300 my-4 flex justify-center items-center">
            <p className="w-[85%] md:w-[90%] py-4">
              Building inclusive & accessible applications with empathy and
              creativity.
            </p>
          </div>

          <div className="py-4 flex flex-col md:invisible">
            <ul className="uppercase ">
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:text-black hover:scale-105 "
              >
                <Link href="/" aria-label="Home">
                  Home
                </Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:text-black hover:scale-105"
              >
                <Link href="/#about" aria-label="About">
                  About
                </Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:text-black hover:scale-105"
              >
                <Link href="/#skills" aria-label="Skills">
                  Skills
                </Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:text-black hover:scale-105"
              >
                <Link href="/#projects" aria-label="Projects">
                  Projects
                </Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:text-black hover:scale-105"
              >
                <Link href="/#contact" aria-label="Contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="pt-4 text-center">
              <p className="uppercase tracking-widest text-[#01161e]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link
                  href="https://www.linkedin.com/in/lidia-karpinski-350643236/"
                  aria-label="Lidia's LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className=" rounded-full bg-[#f9dc5c] shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link
                  href="https://github.com/lkarpins"
                  aria-label="Lidia's Github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full bg-[#f9dc5c] shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </Link>
                <Link
                  href="mailto:lidiakarpinski@gmail.com"
                  aria-label="Send an email to Lidia"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full bg-[#f9dc5c] shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
