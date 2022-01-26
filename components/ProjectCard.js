import React from "react";
import Image from "next/image";
import cardImg from "../public/images/logo.png";

const ProjectCard = ({ props }) => {
  let big = true;
  return (
    <div className="transition-all relative project mb-8 break-inside bg-brand dark:hover:shadow-cyan-500/50 rounded-md shadow-md hover:scale-105 hover:shadow-xl">
      <div className="absolute text-white left-4 top-4 flex flex-col justify-items-center">
        <h3 className="text-md font-bold dark:text-gray-300 tracking-wide">
          {props.client}
        </h3>
        <h1 className="text-lg font-bold tracking-wide">{props.title}</h1>
      </div>
      {props.image ? (
        <img
          className="transition-all rounded hover:opacity-10"
          src={props.image.url}
          alt="project image"
        />
      ) : null}
    </div>
  );
};

export default ProjectCard;
