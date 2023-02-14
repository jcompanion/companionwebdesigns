import React from 'react';
import { AiOutlineMail, AiFillPhone } from 'react-icons';

const Cta = () => {
  return (
    <div className='py-12 border-b bg-brand bg-opacity-30 dark:border-gray-800'>
      <div className='container mx-auto flex justify-center flex-wrap items-center text-center sm:text-left'>
        <div className='w-1/2'>
          <h1 className='text-3xl font-bold tracking-wide pb-4'>
            How can I help?
          </h1>
          <div className='flex items-center pb-4'>
            <div className='bg-brandtwo w-2 h-2 rounded-full animate-ping mr-2'></div>
            <p className='text-brandtwo font-bold text-lg tracking-wide font-serif'>
              I am currently open to work.
            </p>
          </div>

          <a href='mailto: joshcompanion@gmail.com'>
            <button className='transition-all hover:bg-opacity-70 bg-brandtwo drop-shadow-lg hover:shadow-lg hover:scale-105 dark:hover:shadow-cyan-500/50 text-white dark:text-black text-center p-4 mb-10 sm:mb-0 font-serif rounded-full tracking-wide text-lg font-bold dark:hover:bg-cyan-200 dark:hover:text-cyan-600'>
              Message Me
            </button>
          </a>
        </div>
        <div>
          <a href='tel:512 630-0893'>
            <p className='transition-all text-lg mb-8 font-medium text-gray-700 dark:text-gray-200 hover:text-brandtwo dark:hover:text-brandtwo'>
              512 630-0893
            </p>
          </a>
          <a href='mailto: joshcompanion@gmail.com'>
            <p className='transition-all text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-brandtwo dark:hover:text-brandtwo'>
              joshcompanion@gmail.com
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cta;
