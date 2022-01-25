import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section className="skills py-12 border-b dark:border-gray-800">
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
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
      </div>
    </section>
  );
};

export default Skills;
