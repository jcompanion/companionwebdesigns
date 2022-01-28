import React from "react";
import Image from "next/image";
import cardImg from "../public/images/logo.png";

const ProjectCard = ({ props }) => {
  return (
    <div className="transition-all relative project break-inside bg-brand dark:hover:shadow-cyan-500/50 rounded-lg shadow-md hover:shadow-xl">
      <div className="absolute text-white left-4 top-4 flex flex-col justify-items-center">
        <h3 className="text-md font-bold text-gray-100 tracking-wide">
          {props.client}
        </h3>
        <h1 className="text-lg font-bold tracking-wide text-gray-200">
          {props.title}
        </h1>
      </div>
      {props.image ? (
        <img
          className="transition-all rounded-lg hover:opacity-30"
          src={props.image.url}
          alt="project image"
        />
      ) : null}
    </div>
  );
};

export default ProjectCard;
