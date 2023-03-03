import Image from "next/image";
import Link from "next/link";
import React from "react";
import Roed from "../public/assets/projects/roedtoaid.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full bg-purple-200">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-purple-500">
          Projects
        </p>
        <h2>What I've Built</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem />
        </div>
      </div>
    </div>
  );
};

export default Projects;
