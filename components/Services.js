import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    id: 1,
    icon: 'https://res.cloudinary.com/dogaruo2j/image/upload/v1643301083/design_a5f93b45c4.svg',
    title: 'Front End Magic',
    bullets: [
      '3D Interactions to increase customer time on site',
      'Animations that bring the page to life',
      'Knowledge of tools to make this happen',
      'Modern and fast styling libraries',
      'Optimizing assets and SEO',
      'Knowledge to bring all of these together',
    ],
  },

  {
    id: 2,
    icon: 'https://res.cloudinary.com/dogaruo2j/image/upload/v1643301091/hosting_8ae1a3efa7.svg',
    title: 'Back End Tools',
    bullets: [
      'Engineering hosting and redundancy solutions',
      'Code knowledge to automate backend processes',
      'Data engineering and security',
      'Authentication and user management',
      'Tool set to implement these solutions',
    ],
  },
];

const Services = () => {
  return (
    <section
      id='services'
      className='services border-b py-12 bg-gradient-to-b from-white to-slate-100 dark:bg-gradient-to-b dark:from-black dark:to-slate-900 dark:border-gray-800'>
      <div className='container mx-auto'>
        <div>
          <h1 className='text-4xl text-center py-8 font-bold line tracking-wide'>
            Specialties
          </h1>
        </div>
        <div className='services-cards flex flex-wrap justify-around'>
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
