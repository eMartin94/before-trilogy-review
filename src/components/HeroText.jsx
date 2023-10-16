import React from 'react';
import { styles } from '@/styles';

const HeroText = () => {
  return (
    <div className={`${styles.innerWidth}`}>
      <h1 className='text-white text-7xl sm:text-9xl font-bold text-center'>
        Before Trilogy Reviews
      </h1>
      <p className='text-white text-center mt-8'>
        Lo que hace que esta trilogía sea excepcional es su enfoque en el
        diálogo natural y profundo, así como su capacidad para capturar la
        evolución de una relación a lo largo de los años. La química entre Hawke
        y Delpy es palpable y su actuación es increíblemente auténtica. La
        trilogía &ldquo;Before&rdquo; es un logro cinematográfico que nos invita
        a reflexionar sobre el amor, la conexión humana y el paso del tiempo de
        una manera que pocas otras películas logran. Cada película es como un
        capítulo en la vida de estos personajes, y juntas forman una narrativa
        emotiva y memorable.
      </p>
    </div>
  );
};

export default HeroText;
