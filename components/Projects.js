import React from "react";
import Image from "next/image";
import image from "../public/images/mainHeroC.svg";
import ProjectCard from "./ProjectCard";

const projectCards = [
  {
    company: "Volcon",
    title: "3D Configurator for Grunt EV",
    image: "https://www.volcon.com/images/configurator/view-2.png",
  },
];

const Projects = ({ projectCards }) => {
  return (
    <section className="projects py-12 border-b border-gray-800">
      <div className="container mx-auto">
        <div className="flex items-center flex-col text-center p-2 mb-4">
          <h1 className="text-2xl font-semibold tracking-wide pb-4">
            Projects
          </h1>
          <p className="font-serif text-slate-200 font-semibold tracking-wide">
            Collection of featured works that include designs, full sites, and
            Prototypes.
          </p>
        </div>
        <div className="projects flex flex-wrap justify-center">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
