import React from "react";
import SkillCard from "./SkillCard";

const skills = [
  {
    id: 1,
    icon: "https://res.cloudinary.com/dogaruo2j/image/upload/v1643305170/react_2_7092894c5e.svg",
    title: "React",
  },
  {
    id: 2,
    icon: "https://res.cloudinary.com/dogaruo2j/image/upload/v1643305168/next_js_b097b397ec.svg",
    title: "NextJS",
  },
  {
    id: 3,
    icon: "https://res.cloudinary.com/dogaruo2j/image/upload/v1643305171/tailwindcss_0288d04747.svg",
    title: "TailwindCSS",
  },
  {
    id: 4,
    icon: "https://res.cloudinary.com/dogaruo2j/image/upload/v1643305171/webpack_icon_ad76860acc.svg",
    title: "Webpack",
  },
  {
    id: 5,
    icon: "https://res.cloudinary.com/dogaruo2j/image/upload/v1643305171/wordpress_blue_0ec4125dce.svg",
    title: "WordPress",
  },
  {
    id: 6,
    icon: "https://res.cloudinary.com/dogaruo2j/image/upload/v1643305168/nodejs_icon_8da152706c.svg",
    title: "NodeJS",
  },
  {
    id: 7,
    icon: "https://res.cloudinary.com/dogaruo2j/image/upload/v1643305165/logo_javascript_4005c0973d.svg",
    title: "JavaScript",
  },
  {
    id: 8,
    icon: "https://res.cloudinary.com/dogaruo2j/image/upload/v1643305168/nginx_1_f05feb3a67.svg",
    title: "Nginx",
  },
  {
    id: 9,
    icon: "https://res.cloudinary.com/dogaruo2j/image/upload/v1643305165/css_3_946dc4bc4f.svg",
    title: "CSS3",
  },
  {
    id: 10,
    icon: "https://res.cloudinary.com/dogaruo2j/image/upload/v1643305170/sass_1_bb57b79a82.svg",
    title: "Sass",
  },
  {
    id: 11,
    icon: "https://res.cloudinary.com/dogaruo2j/image/upload/v1643305164/html_1_3c69dd0ff3.svg",
    title: "HTML5",
  },
  {
    id: 12,
    icon: "https://res.cloudinary.com/dogaruo2j/image/upload/v1643305164/blender_2_3f356df2c1.svg",
    title: "Blender",
  },
  {
    id: 13,
    icon: "https://res.cloudinary.com/dogaruo2j/image/upload/v1643305164/gatsby_23c52fcfb2.svg",
    title: "Gatsby",
  },
  {
    id: 14,
    icon: "https://res.cloudinary.com/dogaruo2j/image/upload/v1643305165/figma_1_7a5ae09bff.svg",
    title: "Figma",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills py-12 border-b bg-gradient-to-b from-white to-slate-100 dark:bg-gradient-to-b dark:from-black dark:to-slate-900 dark:border-gray-800"
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="pb-4 font-bold text-3xl tracking-wide">
            Skills & Tools
          </h1>
          <h3 className="font-medium font-serif tracking-wide text-lg">
            List of my proficiencies for specific needs.
          </h3>
        </div>
        <div className="skills flex flex-wrap justify-center py-6">
          {skills.map((e) => (
            <SkillCard key={e.id} id={e.id} icon={e.icon} title={e.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
