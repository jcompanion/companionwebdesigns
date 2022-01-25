import React, { Suspense } from "react";

import Model from "./Rocket1";

import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Stars,
  useProgress,
  Html,
  ContactShadows,
} from "@react-three/drei";

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html center>{Math.round(progress)} % loading..</Html>;
}

const Header = () => {
  return (
    <>
      <section className="hero py-12  border-b bg-gradient-to-b from-white to-slate-100 dark:bg-gradient-to-b dark:from-black dark:to-slate-900 dark:border-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="px-2 md:w-1/2 lg:2/3 z-20">
            <h3 className="font-serif font-semibold text-gray-700 pb-4 tracking-wide md:text-2xl dark:text-slate-400">
              Hello! I&apos;m Josh
            </h3>
            <h1 className="tracking-wider text-2xl font-bold md:text-4xl pb-4">
              Freelance Web Developer & Designer
            </h1>

            <p className="font-serif text-gray-700 dark:text-zinc-200 text-lg leading-7 pb-4 md:text-xl">
              I help grow your brand through understanding your target audience,
              creating a truly special user experience.
            </p>
            <div className="flex flex-col items-center sm:flex-row justify-center md:justify-start">
              <button className="transition-all text-white dark:text-black text-md hover:opacity-70 shadow-lg hover:shadow-xl hover:scale-105 dark:hover:shadow-cyan-500/50 bg-brandtwo  border-4 border-brandtwo p-2 my-2 sm:mr-2 rounded-full font-medium tracking-wide w-36 dark:hover:border-cyan-200 dark:hover:bg-cyan-200 dark:hover:text-cyan-600">
                View Projects
              </button>
              <button className="transition-all text-brandtwo text-md drop-shadow-lg hover:opacity-70 hover:shadow-xl hover:scale-105 dark:hover:shadow-cyan-500/50 border-4 border-brandtwo p-2 my-4 sm:ml-2 rounded-full font-medium tracking-wide w-36 dark:hover:text-cyan-200 dark:hover:border-cyan-200">
                Learn More
              </button>
            </div>
          </div>
          <div className="webgl left-0 w-full lg:w-1/3">
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
