'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IconArrowDown } from '@tabler/icons-react';
import { styles } from '@/styles';
import { VideoModal } from '@/components/VideoModal';
import HeroText from '@/components/HeroText';
import HeroPanel from '@/components/HeroPanel';
import useModal from '@/hooks/useModal';
import { useAnimationGsap } from '@/hooks/useAnimationGsap';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const component = useRef();

  const { slider } = useAnimationGsap();

  const { openModal, closeModal, isModalOpen, videoUrl } = useModal();
  const scrollTo = () => {
    document.querySelector('#trilogy').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='overflow-x-hidden' ref={component}>
      <div
        className={`${styles.flexCenter} relative flex-col h-screen bg-hero-pattern bg-no-repeat bg-cover bg-center px-4`}
      >
        <HeroText />
        <IconArrowDown
          className='absolute bottom-8 text-black text-9xl animate-bounce bg-white rounded-full'
          onClick={scrollTo}
        />
      </div>
      <section
        ref={slider}
        className='min-w-[400vw] h-screen flex flex-wrap bg-green-300'
        id='trilogy'
      >
        <HeroPanel openModal={openModal} />
      </section>
      <VideoModal isOpen={isModalOpen} onClose={closeModal} url={videoUrl} />
    </div>
  );
};

export default Hero;
