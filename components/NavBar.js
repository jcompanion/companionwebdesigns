import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { BsSun, BsMoonFill } from 'react-icons/bs';
import Hamburger from 'hamburger-react';

import logo from '../public/images/joshNewLight.svg';
import logo2 from '../public/images/joshNewDark.svg';

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setOpen] = useState(false);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <nav className='sticky top-0 right-0 w-full p-2 transition-all bg-gray-100 dark:bg-black bg-opacity-50 dark:bg-opacity-70 backdrop-filter backdrop-blur-lg z-50 border dark:border-gray-900 shadow'>
        <div className='container mx-auto md:flex md:justify-between'>
          <div className='w-full md:w-1/2 flex justify-between items-center'>
            <div className='w-64 py-4'>
              <Link href='/'>
                <a>
                  {theme === 'dark' ? (
                    <Image src={logo2} alt='CompanionWebDesigns Logo' />
                  ) : (
                    <Image src={logo} alt='CompanionWebDesigns Logo' />
                  )}
                </a>
              </Link>
            </div>
            <div className='md:hidden'>
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </div>

          <div
            className={
              'transition-all md:flex md:flex-row md:w-1/2 lg:w-1/3 p-4 justify-between items-center ' +
              (isOpen ? 'flex flex-col' : 'hidden')
            }>
            <a
              target='_blank'
              href='/JoshuaCompanionResume.pdf'
              className='transition-all py-4 hover:text-brand font-medium text-lg'>
              Resume
            </a>

            <Link href='#projects'>
              <a className='transition-all py-4 hover:text-brand font-medium text-lg'>
                Projects
              </a>
            </Link>

            <Link href='#services'>
              <a className='transition-all py-4 hover:text-brand font-medium text-lg'>
                Services
              </a>
            </Link>
            <Link href='mailto: joshcompanion@gmail.com'>
              <a className='transition-all py-4 hover:text-brand font-medium text-lg'>
                Contact
              </a>
            </Link>
            <button
              aria-label='Toggle Dark Mode'
              type='button'
              className='transition-all border p-2 rounded hover:border-brand hover:text-brand font-medium text-lg'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <BsSun /> : <BsMoonFill />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
