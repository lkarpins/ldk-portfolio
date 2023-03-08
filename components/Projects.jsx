import React from "react";
import Roed from "../public/assets/projects/roedtoaid.png";
import Office from "../public/assets/projects/officeionado.png";
import PickMeUp from "../public/assets/projects/pickmeup.png";
import Rancid from "../public/assets/projects/rancid.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-purple-900">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <h3 className="py-2 uppercase font-bold text-sm">
          Click Image to View Details
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Roe'd To Aid"
            backgroundImage={Roed}
            projectUrl="/roedtoaid"
          />
          <ProjectItem
            title="The Office-ionado"
            backgroundImage={Office}
            projectUrl="/theofficeionado"
          />
          <ProjectItem
            title="PickMeUp"
            backgroundImage={PickMeUp}
            projectUrl="/pickmeup"
          />
          <ProjectItem
            title="Rancid Tomatillos"
            backgroundImage={Rancid}
            projectUrl="/rancidtomatillos"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
