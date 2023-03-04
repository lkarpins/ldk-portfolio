import Image from "next/image";
import React from "react";
import Profile from "../public/assets/projects/profile.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className=" uppercase text-xl tracking-widest text-purple-900">
            About
          </p>
          <h2 className="py-4 ">Who I Am</h2>
          <p className=" uppercase text-xl tracking-widest text-purple-900">
            From Speech therapist to web developer.
          </p>
          <p className="py-2 text-black">
            Having worked in skilled nursing facilities for the last seven
            years, I treated individuals with varied neurodegenerative disorders
            and assisted them with learning how to use augmentative and
            alternative communication (AAC) devices. Through this experience, I
            saw the many ways in which these specialized devices can be improved
            to create a better experience for the patients who relied on these
            technologies to communicate their wants and needs.
          </p>
          <p className="py-2 text-black">
            Despite advances in technology, accesssibility and inclusivity are
            still barriers for so many folks. Through my experience as a
            clinician, I developed a passion for building applications that are
            responsive, accessible, and engaging for all users regardless of age
            group.
          </p>

          <p className="py-2  text-black">
            In March 2022, I began my journey into software development at
            Turing School of Software & Design. Over the course of the program,
            I learned the foundations of Frontend development with React.js,
            JavaScript, HTML, and CSS. Since graduating from the program, I
            continue to challenge myself with learning new frameworks and
            languages such as Next.js, Tailwind CSS, and TypeScript.
          </p>
        </div>

        <div className="w-full h-auto m-auto  shadow-xl shadow-slate-300 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={Profile} alt="Image of Lidia" />
        </div>
      </div>
    </div>
  );
};

export default About;
