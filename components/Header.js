import React from "react";
import heroImg from "../public/images/mainHeroC.svg";
import Image from "next/image";

const Header = () => {
  return (
    <section className="hero py-12 border-b border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="px-2 md:w-1/2 lg:2/3">
          <h3 className="font-serif font-semibold pb-4 tracking-wide md:text-2xl text-slate-400">
            Hello! I&apos;m Josh
          </h3>
          <h1 className="tracking-wider text-2xl font-bold md:text-4xl pb-4">
            Freelance Web Developer & Designer
          </h1>

          <p className="font-serif text-zinc-200 text-lg leading-7 pb-4 md:text-xl">
            I help people and brands reach their goals by designing & building
            user-centric digital products and interactive experiences
          </p>
          <div className="flex flex-col items-center sm:flex-row justify-center md:justify-start">
            <button className="transition-all bg-brand border-4 border-brand p-2 my-2 sm:mr-2 rounded font-medium tracking-wide w-36 hover:bg-slate-800 hover:border-slate-800">
              View Projects
            </button>
            <button className="transition-all border-4 border-brand p-2 my-4 sm:ml-2 rounded-lg font-medium tracking-wide w-36 hover:border-slate-800">
              Learn More
            </button>
          </div>
        </div>
        <div className="my-4 p-2 md:w-1/2 lg:1/3">
          <Image src={heroImg} />
        </div>
      </div>
    </section>
  );
};

export default Header;
