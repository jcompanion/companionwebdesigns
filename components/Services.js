import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="services border-b bg-gradient-to-b from-white to-slate-100 dark:bg-gradient-to-b dark:from-black dark:to-slate-900 dark:border-gray-800">
      <div className="container mx-auto">
        <div>
          <h1 className="text-3xl text-center py-8 font-bold line tracking-wide">
            Services
          </h1>
        </div>
        <div className="services-cards flex flex-col justify-around sm:flex-row">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};

export default Services;
