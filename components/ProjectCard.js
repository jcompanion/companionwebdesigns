import React from "react";
import Image from "next/image";
import cardImg from "../public/images/logo.png";

const ProjectCard = () => {
  return (
    <div className="transition-all project w-full sm:w-2/3 lg:w-1/3 relative bg-brand hover:bg-opacity-40 dark:hover:bg-opacity-10 p-2 m-4 rounded-md shadow-md hover:scale-105 hover:shadow-xl">
      <h3 className="text-md font-bold dark:text-gray-300 tracking-wide z-50">
        Volcon
      </h3>
      <h1 className="text-lg font-bold tracking-wide z-50">
        3D Configurator for Grunt EV
      </h1>
      <div className="project-image absolute inset-0">
        <Image src={cardImg} alt="project image" />
      </div>
    </div>
  );
};

export default ProjectCard;
