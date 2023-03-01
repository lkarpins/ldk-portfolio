import React from "react";

const Main = () => {
  return (
    <div className="w-full h-screen ">
      <div className="  bg-gray-50 min-h-screen flex items-center justify-center px-8">
        <div className="relative w-full max-w-lg">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="flex flex-col justify-start max-width-[500px]  ">
          <h2 className=" tracking-widest text-gray-600">Hi! My name is</h2>
          <h1 className="py-4 text-black">Lidia Karpinski.</h1>
          <h2 className="py-2 text-slate-600">
            I'm a Frontend Software Engineer.
          </h2>
          <p>
            As a Speech-Language Pathologist turned Software Engineer, I merged
            a passion for communication and accessibility by creating inclusive
            technology through team collaboration, creative problem solving, and
            empathy to maximize user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
