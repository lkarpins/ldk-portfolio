import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, backgroundImage, projectUrl }) => {
  return (
    <Link
      href={projectUrl}
      className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl m-4 group hover:bg-gradient-to-r from-[#fcaf58]/40 to-pink-200"
    >
      <Image
        className="rounded-xl w-full h-full hover:scale-105"
        src={backgroundImage}
        alt="RoedToAid Screenshot Image"
      />
    </Link>
  );
};

export default ProjectItem;
