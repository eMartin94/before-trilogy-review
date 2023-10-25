import React from 'react';
import { styles } from '@/styles';
import { useTranslations } from 'next-intl';
import { useTextAnimate } from '@/hooks/useTextAnimate';
const HeroText = () => {
  const t = useTranslations('hero');
  const { textHero } = useTextAnimate();
  return (
    <div className={`${styles.innerWidth}`}>
      <h1
        className='text-white text-7xl sm:text-9xl font-bold text-center uppercase'
        ref={(el) => (textHero.current[0] = el)}
      >
        {t('title')}
      </h1>
      <p
        ref={(el) => (textHero.current[1] = el)}
        className='text-white text-center mt-8'
      >
        {t('text')}
      </p>
    </div>
  );
};

export default HeroText;
