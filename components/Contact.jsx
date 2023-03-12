import React from "react";
import Computer from "../public/assets/projects/contact.jpg";
import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-purple-900 mt-6">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4  bg-[#f7f4f0]">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl"
                  src={Computer}
                  alt="/"
                  aria-label="Person typing on computer"
                />
              </div>
              <div>
                <h2 className="py-2">Lidia Karpinski</h2>
                <p>Frontend Software Engineer</p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with Me</p>
                <div className="flex items-center justify-between max-w-[330px] py-4 mt-6">
                  <Link
                    href="https://www.linkedin.com/in/lidia-karpinski/"
                    aria-label="Lidia's LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full bg-[#f9dc5c] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105  ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link
                    href="https://github.com/lkarpins"
                    aria-label="Lidia's Github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full  bg-[#f9dc5c]  shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105  ease-in duration-300">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link
                    href="mailto:lidiakarpinski@gmail.com"
                    aria-label="Send an email to Lidia"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full  bg-[#f9dc5c] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105  ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 bg-[#f7f4f0] p-2">
            <div className="p-y">
              <form
                action="https://getform.io/f/7c676a74-84ee-4d94-b58d-e0d58d0b4611"
                method="POST"
                encType="multi-part/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label
                      htmlFor="fullname"
                      className="uppercase text-sm py-2"
                    >
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      id="fullname"
                      aria-label="Full Name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                      id="Phonenumber"
                      aria-label="Phone Number"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    id="email"
                    aria-label="Email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    id="subject"
                    aria-label="Subject"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="Message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                    id="message"
                    aria-label="Message"
                    required
                  />
                </div>
                <button
                  aria-label="Send Message"
                  className="w-full p-3 uppercase text-black mt-4  bg-[#f9dc5c] shadow-lg shadow-gray-400 cursor-pointer hover:scale-105  ease-in duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/" aria-label="Home">
            <div className="rounded-full  bg-[#f9dc5c] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105  ease-in duration-300">
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
