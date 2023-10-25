'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function useTextAnimate() {
  const textHero = useRef([]);

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

  return { textHero };
}
