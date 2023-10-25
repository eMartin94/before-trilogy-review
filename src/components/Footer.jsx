import { styles } from '@/styles';
import { IconMail, IconPhone } from '@tabler/icons-react';
import React from 'react';
import { useTranslations } from 'next-intl';
import Form from './Form';

const Footer = () => {
  const t = useTranslations();

  return (
    <section
      className={`w-full min-h-screen px-8 py-4 ${styles.flexCenter} flex-col gap-4 bg-gray-800 transition-all duration-300 ease-linear relative`}
    >
      <div className='w-full h-full flex flex-col justify-evenly items-center'>
        <div className='flex flex-col sm:flex-row gap-2 justify-evenly w-full'>
          <div className='flex flex-col gap-2 justify-center items-center px-4 py-8'>
            <IconMail className='text-gray-500' size={30} />
            <span className='text-lg font-bold text-gray-500'>
              {t('footer.email')}
            </span>
            <span className={`text-white`}>eduardo.martin688@gmail.com</span>
          </div>
          <div className='flex flex-col gap-2 justify-center items-center px-4 py-8'>
            <IconPhone className='text-gray-500' size={30} />
            <span className='text-lg font-bold text-gray-500'>
              {t('footer.phone')}
            </span>
            <span className={`text-white`}>+51 987 654 321</span>
          </div>
        </div>
        <div className='w-[1px] h-14 bg-gray-500'></div>
        <div className='flex flex-col gap-4 w-full justify-center items-center my-4'>
          <span className={`uppercase text-center text-sm text-white`}>
            {t('footer.title')}
          </span>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Footer;
