import Image from "next/image";
import React from "react";
import Profile from "../public/assets/projects/profile.jpg";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16 bg-gray-50">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className=" uppercase text-xl tracking-widest text-purple-600">
            About
          </p>
          <h2 className="py-4 ">Who I am</h2>
          <p className=" uppercase text-xl tracking-widest text-purple-600">
            From Speech therapist to web developer.
          </p>
          <p className="py-2 text-slate-600">
            Working in healthcare for the last 7 years, I've seen the countless
            ways technology benefits the lives of young and old. From
            augmentative and alternative communication devices to cellphones and
            computers, our world is deeply connected by software. Despite
            advances in technology, accesssibility and inclusivity are still
            barriers for so many folks. Through healthcare, I found a connection
            and passion for building applications that are responsive,
            accessible, and engaging for all users.
          </p>
          <p className="py-2 text-slate-600">
            In March of 2022, I quit my full-time job and enrolled at Turing
            School of Software & Design. Over the course of 7 months, I learned
            the foundations of Frontend development with React.js, JavaScript,
            HTML, and CSS. Since that time, I've continued to challenge myself
            with learning new frameworks and libraries such as Next.js, Tailwind
            CSS, and Express.js.
          </p>
          <p className="py-2 text-slate-600 underline cursor-pointer">
            View some of my latest projects!
          </p>
        </div>

        <div className="w-full h-auto m-auto  shadow-xl shadow-slate-300 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={Profile} alt="Image of Lidia" />
        </div>
      </div>
    </div>
  );
};

export default About;
