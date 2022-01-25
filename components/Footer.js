import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import logo2 from "../public/images/logo 2.svg";
import logo from "../public/images/logo.svg";
import {
  AiFillGithub,
  AiOutlineBehance,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="py-12">
      <div className="container mx-auto flex items-center flex-wrap justify-center px-10 text-center md:text-left md:justify-around">
        <div className="pb-4 w-2/3 md:w-1/3 lg:w-1/4">
          <Link href="/">
            <a>
              {theme === "dark" ? (
                <Image src={logo2} alt="CompanionWebDesigns Logo" />
              ) : (
                <Image src={logo} alt="CompanionWebDesigns Logo" />
              )}
            </a>
          </Link>
        </div>
        <div className="pb-2">
          <a href="/">
            <p className="text-brandtwo font-semibold tracking-wide font-serif pb-2 hover:text-cyan-200 transition-all">
              Privacy Policy
            </p>
          </a>
          <a href="/">
            <p className="text-brandtwo font-semibold tracking-wide pb-2 font-serif hover:text-cyan-200 transition-all">
              Terms &amp; Conditions{" "}
            </p>
          </a>
          <p className="text-gray-300 font-serif">
            &copy; {new Date().getFullYear()} CompanionWebDesigns
          </p>
        </div>
        <div className="flex flex-row">
          <a href="/">
            <AiFillGithub className="transition-all h-6 w-6 m-2 hover:fill-brand" />
          </a>

          <a href="/">
            <AiOutlineBehance className="transition-all h-6 w-6 m-2 hover:fill-brand" />
          </a>
          <a href="/">
            <AiOutlineInstagram className="transition-all h-6 w-6 m-2 hover:fill-brand" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
