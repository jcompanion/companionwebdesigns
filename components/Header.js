import React, { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import Model from "./Rocket1";
import { Canvas } from "@react-three/fiber";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  OrbitControls,
  useProgress,
  Html,
  ContactShadows,
} from "@react-three/drei";

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html center>{Math.round(progress)} % loading..</Html>;
}

const Header = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const variant1 = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
      },
    },
  };
  const variant2 = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: 0.2,
      },
    },
  };
  const variant3 = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: 0.4,
      },
    },
  };
  const variant4 = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <>
      <section className="hero py-12 md:py-24 border-b bg-gradient-to-b from-white to-slate-100 dark:bg-gradient-to-b dark:from-black dark:to-slate-900 dark:border-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="px-2 md:w-1/2 lg:2/3 z-20">
            <motion.h3
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variant1}
              className="font-serif font-semibold text-gray-700 pb-4 tracking-wide md:text-2xl dark:text-slate-400"
            >
              Hello! I&apos;m Josh
            </motion.h3>

            <motion.h1
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variant2}
              className="tracking-wider text-2xl font-bold md:text-4xl pb-4"
            >
              Freelance Web Developer & Designer
            </motion.h1>

            <motion.p
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variant3}
              className="font-serif text-gray-700 dark:text-zinc-200 text-lg leading-7 pb-4 md:text-xl"
            >
              I help grow your brand through understanding your target audience,
              creating a truly special user experience.
            </motion.p>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variant4}
              className="flex flex-col items-center sm:flex-row justify-center md:justify-start"
            >
              <Link href="#projects">
                <button className="transition-all text-white dark:text-black text-md hover:opacity-70 shadow-lg hover:shadow-xl hover:scale-105 dark:hover:shadow-cyan-500/50 bg-brandtwo  border-4 border-brandtwo p-2 my-2 sm:mr-2 rounded-full font-medium tracking-wide w-36 dark:hover:border-cyan-200 dark:hover:bg-cyan-200 dark:hover:text-cyan-600">
                  View Projects
                </button>
              </Link>
              <Link href="#services">
                <button className="transition-all text-brandtwo text-md drop-shadow-lg hover:opacity-70 hover:shadow-xl hover:scale-105 dark:hover:shadow-cyan-500/50 border-4 border-brandtwo p-2 my-4 sm:ml-2 rounded-full font-medium tracking-wide w-36 dark:hover:text-cyan-200 dark:hover:border-cyan-200">
                  Learn More
                </button>
              </Link>
            </motion.div>
          </div>
          <div className="webgl w-full lg:w-1/3 ">
            <Canvas
              dpr={[1, 2]}
              camera={{
                fov: 45,
                position: [0, 0, 8],
              }}
            >
              <ambientLight />

              <pointLight position={[10, 10, 10]} />
              <OrbitControls
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                autoRotate={true}
                rotation={[0, 0, 0.25]}
                enableZoom={false}
                enablePan={false}
              />
              <Suspense fallback={<Loader />}>
                <ContactShadows
                  opacity={1}
                  scale={10}
                  blur={1}
                  far={10}
                  resolution={256}
                />
                <Model position={[0, -2, 0]} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
