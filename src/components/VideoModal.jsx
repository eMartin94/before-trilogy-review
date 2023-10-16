'use client';
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(2px)',
  },
  content: {
    maxWidth: '600px',
    margin: 'auto',
    padding: 0,
  },
};
export const VideoModal = ({ isOpen, onClose, url }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel='Video Modal'
      shouldCloseOnOverlayClick={true}
      style={customStyles}
      className='left-1/2 fixed top-1/2 -translate-x-1/2 w-full -translate-y-1/2'
    >
      <div className='w-full flex justify-center items-center aspect-video'>
        <iframe
          width='100%'
          height='100%'
          src={`${url}?autoplay`}
          frameborder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='YouTube Video'
        ></iframe>
      </div>
      <button
        onClick={onClose}
        className='absolute -top-2 -right-2 text-white bg-red-400 w-7 h-7 p-2 rounded-full flex justify-center items-center'
      >
        X
      </button>
    </Modal>
  );
};
