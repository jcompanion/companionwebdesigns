import React, { useEffect } from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = ({ props }) => {
  const controlProjects = useAnimation();
  const { ref, inView } = useInView();
  const variant1 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controlProjects.start("visible");
    }
    if (!inView) {
      controlProjects.start("hidden");
    }
  }, [controlProjects, inView]);

  return (
    <section
      id="projects"
      className="projects bg-gradient-to-b py-12 from-white to-slate-100 dark:bg-gradient-to-b dark:from-black dark:to-slate-900 border-b dark:border-gray-800"
    >
      <div className="container mx-auto">
        <div className="flex items-center flex-col text-center p-2 mb-4">
          <h1 className="text-2xl font-semibold tracking-wide pb-4">
            Projects
          </h1>
          <p className="font-serif dark:text-slate-200 font-semibold tracking-wide">
            Collection of featured works that include designs, full sites, and
            Prototypes.
          </p>
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controlProjects}
          variants={variant1}
          className="projects-container space-y-4 py-4 w-2/3 masonry sm:masonry-sm mx-auto before:box-inherit after:box-inherit"
        >
          {props.map((project) => (
            <ProjectCard key={project.id} props={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
