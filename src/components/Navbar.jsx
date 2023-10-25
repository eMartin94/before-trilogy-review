'use client';
import { styles } from '@/styles';
import { IconMenu2 } from '@tabler/icons-react';
import Link from 'next/link';
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
        <div className='flex gap-2'>
          <div className='flex gap-2 mr-4'>
            <Link href='/es' locale='es'>
              <span className='text-white'>ES |</span>
            </Link>
            <Link href='/en' locale='en'>
              <span className='text-white'>EN |</span>
            </Link>
            <Link href='/pt' locale='pt'>
              <span className='text-white'>PT</span>
            </Link>
          </div>
          {/* <IconMenu2
            className='cursor-pointer text-white'
            onClick={handleChange}
          /> */}
        </div>
      </div>
      {/* <div
        className={`fixed top-11 right-11 aspect-square translate-x-1/2 -translate-y-1/2 h-20 bg-black rounded-full opacity-0 transition-all duration-300 ease-in-out ${
          toggle ? 'bg-black h-[1000vh] opacity-[98%]' : ''
        }`}
      ></div> */}
    </>
  );
};

export default Navbar;
