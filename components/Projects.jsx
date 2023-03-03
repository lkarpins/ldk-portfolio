import Image from "next/image";
import Link from "next/link";
import React from "react";
import Roed from "../public/assets/projects/roedtoaid.png";

const Projects = () => {
  return (
    <div className="w-full bg-purple-200">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-purple-500">
          Projects
        </p>
        <h2>What I've Built</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#fcaf58]/40 to-pink-200 ">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={Roed}
              alt="RoedToAid Screenshot Image"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-gray-50 tracking-wider text-center ">
                Roe'd To Aid
              </h3>
              <p className="text-center p-3 rounded-lg bg-white text-gray-700 fond-bold text-lg cursor-pointer">
                React JS
              </p>
              <p>See Details.</p>
              <Link href={"/"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
