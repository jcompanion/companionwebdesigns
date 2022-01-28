import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    icon: "https://res.cloudinary.com/dogaruo2j/image/upload/v1643301083/design_a5f93b45c4.svg",
    title: "UI/UX",
    bullets: [
      "UX Design",
      "Accessibility Testing",
      "Interactive Design",
      "Emmersive Experieces",
      "Modern Technologies",
    ],
  },
  {
    id: 2,
    icon: "https://res.cloudinary.com/dogaruo2j/image/upload/v1643301061/code_1ce05b33f5.svg",
    title: "Web Development",
    bullets: [
      "Front-End Development",
      "Responsive",
      "3D Interations",
      "Animation Systems",
      "Backend CMS",
      "Mobile Apps",
    ],
  },
  {
    id: 3,
    icon: "https://res.cloudinary.com/dogaruo2j/image/upload/v1643301091/hosting_8ae1a3efa7.svg",
    title: "Hosting Service",
    bullets: [
      "Site Hosting",
      "24/7 Support",
      "Site Anylitics",
      "SEO Updates",
      "Codebase Updates",
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="services border-b py-12 bg-gradient-to-b from-white to-slate-100 dark:bg-gradient-to-b dark:from-black dark:to-slate-900 dark:border-gray-800"
    >
      <div className="container mx-auto">
        <div>
          <h1 className="text-4xl text-center py-8 font-bold line tracking-wide">
            Services
          </h1>
        </div>
        <div className="services-cards flex flex-wrap justify-around">
          {services.map((e) => (
            <ServiceCard
              key={e.id}
              id={e.id}
              title={e.title}
              bullets={e.bullets}
              icon={e.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
