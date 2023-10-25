'use client';
import React, { useReducer, useState } from 'react';
import Button from './Button';
import { formReducer, initialState } from '@/utils/formState';
import { sendEmail } from '@/utils/sendEmail';
import { useTranslations } from 'next-intl';
import { IconLoader } from '@tabler/icons-react';

const Form = () => {
  const t = useTranslations();
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [loading, setLoading] = useState(false);
  const [fieldValidity, setFieldValidity] = useState({
    userName: true,
    userEmail: true,
    userMessage: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await sendEmail(
      formData.userName,
      formData.userEmail,
      formData.userMessage
    );
    if (res) {
      setLoading(true);
      dispatch({ type: 'RESET' });
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else {
      setLoading(false);
    }
  };

  const validate = () => {
    const newFieldValidity = {
      userName: formData.userName.length > 3,
      userEmail: formData.userEmail.match(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      ),
      userMessage: formData.userMessage.length > 9,
    };

    setFieldValidity(newFieldValidity);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'INPUT_CHANGE',
      payload: { [name]: value },
    });
    validate();
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
          className={`px-4 py-2 w-full outline-none bg-gray-100  ${
            fieldValidity.userName ? 'text-black' : 'text-red-500'
          }`}
          name='userName'
          value={formData.userName}
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder={t('footer.inputEmail')}
          className={`px-4 py-2 w-full outline-none bg-gray-100 ${
            fieldValidity.userEmail ? 'text-black' : 'text-red-500'
          }`}
          name='userEmail'
          value={formData.userEmail}
          onChange={handleChange}
        />
      </div>

      <textarea
        rows={5}
        placeholder={t('footer.inputMessage')}
        className={`px-4 py-2 outline-none ${
          fieldValidity.userMessage ? 'text-black' : 'text-red-500'
        }`}
        name='userMessage'
        value={formData.userMessage}
        onChange={handleChange}
      ></textarea>
      <Button
        type='submit'
        text={t('button.textFooter')}
        className='bg-blue-400 hover:bg-blue-500 text-white flex-row-reverse uppercase font-bold disabled:cursor-not-allowed disabled:hover:bg-blue-400'
        icon={
          <IconLoader
            className={`${loading ? 'block animate-spin' : 'hidden'}`}
          />
        }
        disabled={
          !fieldValidity.userName ||
          !fieldValidity.userEmail ||
          !fieldValidity.userMessage
        }
      />
    </form>
  );
};

export default Form;
