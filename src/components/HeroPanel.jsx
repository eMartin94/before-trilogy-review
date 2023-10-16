import React from 'react';
import Image from 'next/image';
import { styles } from '@/styles';
import Button from './Button';

const HeroPanel = ({ item, openModal }) => {
  return (
    <div
      key={item.id}
      className={`${styles.flexCenter} panel w-screen h-screen flex-col gap-4 ${item.id}`}
      style={{
        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.45), rgba(0,0,0,1)), url(${item.imagen})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      <div
        className={`${styles.innerWidth} ${styles.xPadding} flex flex-col gap-4 relative`}
      >
        <div className='flex gap-4 justify-between items-start w-full relative'>
          <div>
            <h2 className='text-white text-6xl sm:text-7xl font-bold'>
              {item.title}
            </h2>
            <p className='text-white text-xl font-bold'>{item.director}</p>
            <p className='text-white'>{item.genre.join(', ')}</p>
          </div>
          <strong className='absolute top-32 md:top-16 right-0 text-white/40 text-4xl sm:text-5xl'>
            {item.year}
          </strong>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 justify-between items-center w-full'>
          <p className='text-white max-w-2xl'>{item.review}</p>
          <Image
            src={item.poster}
            alt='imagen'
            width={250}
            height={250}
            className='shadow-lg hidden sm:block'
          />
        </div>
        <div className='flex flex-col w-full'>
          <h4 className='text-white font-bold'>Reparto:</h4>
          {item.repart.map((item, index) => (
            <p className='text-white' key={index}>
              {item}
            </p>
          ))}
        </div>
        <div className='flex flex-col gap-4 justify-start w-full'>
          <div className={`flex justify-start items-end gap-2`}></div>
          <div className='flex gap-4'>
            <Image
              src={item.stream}
              alt='imagen'
              width={40}
              height={40}
              className='rounded-lg'
            />
            <Button openModal={() => openModal(item.trailer)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPanel;
