import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { styles } from '@/styles';
import Button from './Button';
import { infoTrilogy } from '@/constants';
import { IconBrandYoutube } from '@tabler/icons-react';

const HeroPanel = ({ openModal }) => {
  const t = useTranslations();
  const movies = ['sunrise', 'sunset', 'midnight'];

  return (
    <>
      {movies.map((item) => (
        <div
          key={item}
          className={`${
            styles.flexCenter
          } panel w-screen h-screen flex-col gap-4 ${t(
            `infoTrilogy.${item}.id`
          )}`}
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.45), rgba(0,0,0,1)), url(${t(
              `infoTrilogy.${item}.imagen`
            )})`,
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
                  {t(`infoTrilogy.${item}.title`)}
                </h2>
                <p className='text-white text-xl font-bold'>
                  {t(`infoTrilogy.${item}.director`)}
                </p>
                <p className='text-white'>{t(`infoTrilogy.${item}.genre`)}</p>
              </div>
              <strong className='absolute top-32 md:top-16 right-0 text-white/40 text-4xl sm:text-5xl'>
                {t(`infoTrilogy.${item}.year`)}
              </strong>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 justify-between items-center w-full'>
              <p className='text-white max-w-2xl'>
                {t(`infoTrilogy.${item}.review`)}
              </p>
              <Image
                src={t(`infoTrilogy.${item}.poster`)}
                alt='imagen'
                width={250}
                height={250}
                className='shadow-lg hidden sm:block w-auto h-auto'
              />
            </div>
            <div className='flex flex-col w-full'>
              <h4 className='text-white font-bold'>Reparto:</h4>
              {t(`infoTrilogy.${item}.repart`)
                .split(', ')
                .map((a, index) => (
                  <p key={index} className='text-white'>
                    {a}
                  </p>
                ))}
            </div>
            <div className='flex flex-col gap-4 justify-start w-full'>
              <div className={`flex justify-start items-end gap-2`}></div>
              <div className='flex gap-4'>
                <Image
                  src={t(`infoTrilogy.${item}.stream`)}
                  alt='imagen'
                  width={40}
                  height={40}
                  className='rounded-lg w-auto h-auto'
                />
                <Button
                  openModal={() => openModal(t(`infoTrilogy.${item}.trailer`))}
                  text={t('button.textHero')}
                  className='text-white bg-red-600 hover:bg-red-700'
                  type='button'
                  icon={<IconBrandYoutube />}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HeroPanel;
