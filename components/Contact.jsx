import React from "react";
import Computer from "../public/assets/projects/contact.jpg";
import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-purple-600">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/*left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4  bg-[#fcaf58]/40">
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
                <div className="flex items-center justify-between py-4 mt-6">
                  <a
                    href="https://www.linkedin.com/in/lidia-karpinski/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full bg-[#f9dc5c]/40 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105  ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/lkarpins"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full  bg-[#f9dc5c]/40 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105  ease-in duration-300">
                      <FaGithub />
                    </div>{" "}
                  </a>
                  <div className="rounded-full  bg-[#f9dc5c]/40 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105  ease-in duration-300">
                    <AiOutlineMail />
                  </div>{" "}
                  <div className="rounded-full  bg-[#f9dc5c]/40 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105  ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 bg-[#fcaf58]/40 p-2">
            <div className="p-y">
              <form
                action="https://getform.io/f/7c676a74-84ee-4d94-b58d-e0d58d0b4611"
                method="POST"
                encType="multi-part/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject
                    "
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                  />
                </div>
                <button className="w-full p-4 text-black mt-4  bg-[#f9dc5c]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full  bg-[#f9dc5c]/40 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105  ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className="m-auto text-black"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
