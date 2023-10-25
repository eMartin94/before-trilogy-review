'use client';
import React, { useReducer, useState } from 'react';
import Button from './Button';
import { formReducer, initialState } from '@/utils/formState';
import { sendEmail } from '@/utils/sendEmail';
import { useTranslations } from 'next-intl';

const Form = () => {
  const t = useTranslations();
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await sendEmail(
      formData.userName,
      formData.userEmail,
      formData.userMessage
    );
    if (res) {
      setSuccess(true);
      dispatch({ type: 'RESET' });
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } else {
      setSuccess(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'INPUT_CHANGE',
      payload: { [name]: value },
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col w-full justify-center gap-4 max-w-2xl'
    >
      <div className='flex flex-col sm:flex-row gap-4'>
        <input
          type='text'
          placeholder={t('footer.inputName')}
          className={`px-4 py-2 w-full outline-none bg-gray-100 text-black`}
          name='userName'
          value={formData.userName}
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder={t('footer.inputEmail')}
          className={`px-4 py-2 w-full outline-none bg-gray-100 text-black`}
          name='userEmail'
          value={formData.userEmail}
          onChange={handleChange}
        />
      </div>

      <textarea
        rows={5}
        placeholder={t('footer.inputMessage')}
        className='px-4 py-2 outline-none'
        name='userMessage'
        value={formData.userMessage}
        onChange={handleChange}
      ></textarea>
      <Button
        type='submit'
        text={t('button.textFooter')}
        className='bg-blue-400 hover:bg-blue-500 text-white flex-row-reverse uppercase font-bold'
      />
      {!success && <span className='text-green-500 text-center'>enviado</span>}
    </form>
  );
};

export default Form;
