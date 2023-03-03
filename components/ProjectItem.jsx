import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, backgroundImage, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#fcaf58]/40 to-pink-200 ">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImage}
        alt="RoedToAid Screenshot Image"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-black tracking-wider text-center ">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-black text-center">React JS</p>
        <Link href={projectUrl}>
          <p className="text-center p-3 rounded-lg bg-white text-purple-500 font-bold text-lg cursor-pointer">
            See Details
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
