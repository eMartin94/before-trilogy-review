import { styles } from '@/styles';
import { IconBrandYoutube } from '@tabler/icons-react';
import React from 'react';

const Button = ({ openModal }) => {
  return (
    <button
      onClick={openModal}
      className={`text-white bg-red-600 hover:bg-red-700 px-4 py-2 flex gap-2 rounded-lg ${styles.transition}`}
    >
      <IconBrandYoutube />
      ver trailer
    </button>
  );
};

export default Button;
