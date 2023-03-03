import React from "react";
import Computer from "../public/assets/projects/contact.jpg";
import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="w-full lg:h-screen bg-purple-200">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-purple-600">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/*left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={Computer}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Lidia Karpinski</h2>
                <p>Frontend Software Engineer</p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full bg-[#fcaf58]/40 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105  ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full  bg-[#fcaf58]/40 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105  ease-in duration-300">
                    <FaGithub />
                  </div>{" "}
                  <div className="rounded-full  bg-[#fcaf58]/40 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105  ease-in duration-300">
                    <AiOutlineMail />
                  </div>{" "}
                  <div className="rounded-full  bg-[#fcaf58]/40 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105  ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*right */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
