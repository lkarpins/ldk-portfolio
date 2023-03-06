import React from "react";
import Image from "next/image";
import Roed from "../public/assets/projects/roedtoaid.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const roedtoaid = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-slate-600/90 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Roed}
          alt="Roed To Aid Screenshot"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Roe'd To Aid</h2>
          <h3> React JS / React Router / Apollo GraphQL</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-xl tracking-widest uppercase text-purple-900">
            Group Project - 7 members
          </p>
          <h2 className="py-4">Overview</h2>
          <p className="italic font-bold text-lg">
            After the U.S. Supreme Court officially reversed Roe v. Wade in June
            of 2022, millions lost a fundamental constitutional protection, the
            right to abortion.
          </p>
          <p className="italic font-bold text-lg mt-3">
            Roe'd To Aid was created to bring awareness and expand access to
            safe, authorized clinics that provide necessary healthcare to all
            birthers. This application compiles current clinic information by
            state and clearly defines authorized clinics and distinguishes them
            from misinformation centers. Users can learn about current state
            policies as well as available resources in their state.
          </p>
          <p className="mt-3">
            Roe'd To Aid is a project that is near and dear to my heart. After
            the reversal of Roe v. Wade, I felt lost, angry, and motivated to
            shed light on the injustice this decision placed on women,
            non-binary, and birthing-capable folks. I proposed this idea for a
            class project and I am so grateful for the FE/BE engineers that
            joined me to create Roe'd To Aid.
          </p>
          <p className="mt-3">
            We were unable to access APIs that provided the information we were
            seeking, so our BE team worked diligently to build an API that
            provided authorized clinics, misinformation centers, resources, and
            abortion-status for all 50 states.
          </p>
          <p className="mt-3">
            Serving as a project manager and member of the FE team, I worked on
            the design and imagery of the user experience. We purchased an
            illustration assets pack from Dribbble so it would have a consistent
            look and feel. It was also important to us as a team to utilize
            diverse and inclusive imagery. We used FIGMA to construct our
            wireframes and imported GoogleFonts of different styles, sizes, and
            weights for our fonts.
          </p>
          <p className="mt-3">
            Being our first experience working with a full-stack team, it was
            critical for all team members to communicate throughtout the
            planning and develpment stages. We adopted continuous integration
            (CI) through CircleCI to integrate changes made by all team members
            into a central, shared version frequently deployed on Heroku. Most
            importantly, we incorporated Agile scrum ceremonies for our project
            management, including morning standups, weekly retros, and a shared
            organization project board used for refinement and planning.
          </p>

          <p className="mt-3"></p>
          <div className="flex items-center justify-center pt-8 ">
            <Link
              className="bg-[#f9dc5c] px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase text-black hover:scale-105 ease-in duration-300"
              href="https://roed-to-aid.herokuapp.com/"
              aria-label="Check out the deployed site for Roe'd To Aid"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </Link>
            <Link
              className="bg-[#f9dc5c] px-8 py-2 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase text-black hover:scale-105 ease-in duration-300"
              href="https://github.com/Roe-dToAid/roed_to_aid_fe"
              aria-label="Check out the code repository for Roe'd To Aid"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Code
            </Link>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 bg-[#f7f4f0] mx-6">
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
              </p>{" "}
              <p className="text-slate-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-slate-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Apollo GraphQL
              </p>
              <p className="text-slate-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CircleCI
              </p>
              <p className="text-slate-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Cypress
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

export default roedtoaid;
