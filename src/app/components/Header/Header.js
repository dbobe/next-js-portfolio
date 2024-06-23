'use client';
import React, { useEffect, useState } from 'react';
import Drawer from './DiagonalDrawer';
import Image from 'next/image';
import './DiagonalDrawer.css';

export default function Header() {
  const [selectedIndex1, setSelectedIndex1] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openDrawer = () => {
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      <div className={`diagonal-drawer ${isOpen ? 'open' : ''}`}>
        <Drawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedIndex1={selectedIndex1}
          setSelectedIndex1={setSelectedIndex1}
        />
      </div>
      <header
        className={`${isScrolled ? 'headerShow' : ''} fixed top-0 z-50 w-full transition-all duration-500 ${isScrolled ? 'bg-white shadow-[-10px_25px_50px_10px] shadow-[#48afde]' : 'bg-transparent'}`}
      >
        <div className='relative'>
          <div
            onClick={openDrawer}
            className='absolute z-30 flex h-14 w-14 cursor-pointer items-center justify-center rounded-br-3xl bg-[#48afde] lg:h-24 lg:w-24'
          >
            <div className='relative flex h-7 w-7 items-center justify-center lg:h-10 lg:w-10'>
              <Image src='/drawer.png' alt='drawer' width={150} height={40} />
            </div>
          </div>
        </div>
        <nav className='invisible mx-auto xl:visible xl:max-w-4xl 2xl:max-w-7xl'>
          <ul className='font-recoletaBlack flex h-24 flex-row items-center'>
            <li className='group relative mr-20 text-2xl font-bold'>
              {selectedIndex1 === 0 ? (
                <span className='menu-effect -rotate-12 transform opacity-100 group-hover:-rotate-12 group-hover:opacity-100'></span>
              ) : (
                <span className='menu-effect rotate-12 transform opacity-0 group-hover:-rotate-12 group-hover:opacity-100'></span>
              )}
              <a
                className={`menu-item ${selectedIndex1 === 0 ? 'text-black' : ''} text-[#666d47] group-hover:text-black`}
                href='/#home'
                onClick={() => setSelectedIndex1(0)}
              >
                Home
              </a>
            </li>
            <li className='group relative mr-20 text-2xl font-bold'>
              {selectedIndex1 === 1 ? (
                <span className='menu-effect -rotate-12 transform opacity-100 group-hover:-rotate-12 group-hover:opacity-100'></span>
              ) : (
                <span className='menu-effect rotate-12 transform opacity-0 group-hover:-rotate-12 group-hover:opacity-100'></span>
              )}
              <a
                className={`menu-item ${selectedIndex1 === 1 ? 'text-black' : ''} text-[#666d47] group-hover:text-black`}
                href='/#portfolio'
                onClick={() => setSelectedIndex1(1)}
              >
                Portfolio
              </a>
            </li>
            <li className='group relative mr-20 text-2xl font-bold'>
              {selectedIndex1 === 2 ? (
                <span className='menu-effect -rotate-12 transform opacity-100 group-hover:-rotate-12 group-hover:opacity-100'></span>
              ) : (
                <span className='menu-effect rotate-12 transform opacity-0 group-hover:-rotate-12 group-hover:opacity-100'></span>
              )}
              <a
                className={`menu-item ${selectedIndex1 === 2 ? 'text-black' : ''} text-[#666d47] group-hover:text-black`}
                href='/#about-me-component'
                onClick={() => setSelectedIndex1(2)}
              >
                About Me
              </a>
            </li>
            <li className='group relative mr-20 text-2xl font-bold'>
              {selectedIndex1 === 3 ? (
                <span className='menu-effect -rotate-12 transform opacity-100 group-hover:-rotate-12 group-hover:opacity-100'></span>
              ) : (
                <span className='menu-effect rotate-12 transform opacity-0 group-hover:-rotate-12 group-hover:opacity-100'></span>
              )}
              <a
                className={`menu-item ${selectedIndex1 === 3 ? 'text-black' : ''} text-[#666d47] group-hover:text-black`}
                href='/contactme'
                onClick={() => setSelectedIndex1(3)}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}
