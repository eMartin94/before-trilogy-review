import React from 'react';
import { styles } from '@/styles';

const Button = ({ openModal, text, type, className, icon }) => {
  return (
    <button
      type={type}
      onClick={openModal}
      className={`${className} px-4 py-2 ${styles.flexCenter} gap-2 rounded-lg ${styles.transition}`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
