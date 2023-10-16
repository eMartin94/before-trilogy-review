'use client';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { infoTrilogy } from '@/constants';
import { IconArrowDown } from '@tabler/icons-react';
import { styles } from '@/styles';
import { VideoModal } from '@/components/VideoModal';
import HeroText from '@/components/HeroText';
import HeroPanel from '@/components/HeroPanel';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const component = useRef();
  const slider = useRef();
  const textHero = useRef([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const openModal = (url) => {
    setVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    textHero.current.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 300, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
        }
      );
    });
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray('.panel');
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => '+=' + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className='overflow-x-hidden' ref={component}>
      <div
        className={`${styles.flexCenter} relative flex-col h-screen bg-hero-pattern bg-no-repeat bg-cover bg-center px-4`}
      >
        <HeroText />
        <IconArrowDown className='absolute bottom-8 text-black text-9xl animate-bounce bg-white rounded-full' />
      </div>
      <section
        ref={slider}
        className='min-w-[400vw] h-screen flex flex-wrap bg-green-300'
      >
        {infoTrilogy.map((item) => (
          <HeroPanel key={item.id} item={item} openModal={openModal} />
        ))}
      </section>
      <VideoModal isOpen={isModalOpen} onClose={closeModal} url={videoUrl} />
    </div>
  );
};

export default Hero;
