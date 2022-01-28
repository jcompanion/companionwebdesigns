import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ title, icon, bullets, id }) => {
  const controlServices = useAnimation();
  const { ref, inView } = useInView();
  const variant1 = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: id / 3,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controlServices.start("visible");
    }
    if (!inView) {
      controlServices.start("hidden");
    }
  }, [controlServices, inView]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controlServices}
      variants={variant1}
      className="service-card text-center"
    >
      <Image height={250} width={250} src={icon} />
      <h1 className="py-4 text-2xl font-bold">{title}</h1>
      <ul className="dark:text-gray-300 pb-8 font-medium font-serif">
        {bullets.map((e) => (
          <li
            key={bullets.indexOf(e)}
            className="pb-2 font-serif font-semibold text-lg text-gray-400"
          >
            {e}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;
