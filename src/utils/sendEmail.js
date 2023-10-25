import emailjs from '@emailjs/browser';
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from './keys';

export const sendEmail = async (userName, userEmail, userMessage) => {
  const templateParams = {
    to_name: 'Eduardo',
    from_name: userName,
    from_email: userEmail,
    reply_to: userEmail,
    message: userMessage,
  };

  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Correo enviado con éxito', response);

    return true;
  } catch (error) {
    console.error('Error al enviar el correo', error);
    return false;
  }
};
