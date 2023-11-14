import React, { useEffect, useState } from 'react';

export const useScrollTo = () => {
  const [scrollTo, setScrollTo] = useState(null);

  useEffect(() => {
    setScrollTo(document.getElementById('slider'));
  }, []);
  // const scrollTo = document.getElementById('slider');
  if (scrollTo) {
    window.scrollTo({
      top: scrollTo.offsetTop,
      behavior: 'smooth',
    });
  }

  return;
};
