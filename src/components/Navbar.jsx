'use client';
import { styles } from '@/styles';
import { IconMenu2 } from '@tabler/icons-react';
import React, { useState } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleChange = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div
        className={`flex justify-between ${styles.innerWidth} ${styles.xPadding} py-4 z-20`}
      >
        <h1 className='text-white'>eMartin</h1>
        <IconMenu2
          className='cursor-pointer text-white'
          onClick={handleChange}
        />
      </div>
      <div
        className={`fixed top-11 right-11 aspect-square translate-x-1/2 -translate-y-1/2 h-20 bg-black rounded-full opacity-0 transition-all duration-300 ease-in-out ${
          toggle ? 'bg-black h-[1000vh] opacity-[98%]' : ''
        }`}
      ></div>
    </>
  );
};

export default Navbar;
