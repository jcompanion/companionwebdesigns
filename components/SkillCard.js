import React, { useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const SkillCard = ({ title, icon, id }) => {
  const controlSkills = useAnimation();
  const { ref, inView } = useInView();
  const variant1 = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        delay: id / 30,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controlSkills.start("visible");
    }
    if (!inView) {
      controlSkills.start("hidden");
    }
  }, [controlSkills, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controlSkills}
      variants={variant1}
      className="skill text-center flex flex-col justify-center items-center transition-all p-4 sm:p-10 bg-brand bg-opacity-30 rounded shadow m-4 hover:scale-105 dark:hover:shadow-cyan-500/50 hover:shadow-xl"
    >
      <Image height={90} width={90} src={icon} />
      <p>{title}</p>
    </motion.div>
  );
};

export default SkillCard;
