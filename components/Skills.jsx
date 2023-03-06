import React from "react";
import Image from "next/image";
import ReactImg from "../public/assets/projects/react.png";
import CssImg from "../public/assets/projects/css.png";
import Javascript from "../public/assets/projects/javascript.png";
import HtmlImg from "../public/assets/projects/html.png";
import Node from "../public/assets/projects/node.png";
import Tailwind from "../public/assets/projects/tailwind.png";
import Typescript from "../public/assets/projects/typescript.png";
import Next from "../public/assets/projects/nextjs.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="[max-w-1240px] mx-2 flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-purple-900">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className=" bg-[#f7f4f0] p-6 shadow-xl rounded-xl ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={ReactImg}
                  width="64px"
                  height="64px"
                  alt="React Icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React.js</h3>
              </div>
            </div>
          </div>
          <div className=" bg-[#f7f4f0]  p-6 shadow-xl rounded-xl ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Javascript}
                  width="64px"
                  height="64px"
                  alt="Javascript Icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className=" bg-[#f7f4f0]  p-6 shadow-xl rounded-xl ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={HtmlImg}
                  width="64px"
                  height="64px"
                  alt="Html Icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className=" bg-[#f7f4f0]  p-6 shadow-xl rounded-xl ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={CssImg} width="64px" height="64px" alt="Css Icon" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className=" bg-[#f7f4f0]  p-6 shadow-xl ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Node}
                  width="64px"
                  height="64px"
                  alt="Node.js icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node.js</h3>
              </div>
            </div>
          </div>
          <div className=" bg-[#f7f4f0] p-6 shadow-xl rounded-xl ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Next}
                  width="64px"
                  height="64px"
                  alt="Next.js Icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next.js</h3>
              </div>
            </div>
          </div>
          <div className=" bg-[#f7f4f0]  p-6 shadow-xl rounded-xl ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Tailwind}
                  width="64px"
                  height="64px"
                  alt="Tailwind CSS Icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>
          <div className=" bg-[#f7f4f0]  p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Typescript}
                  width="64px"
                  height="64px"
                  alt="Typescript Icon"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
