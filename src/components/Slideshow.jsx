import React, { useState, useEffect } from 'react';

function Slideshow({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <img src={images[index]} alt="slideshow" style={{ maxWidth: '300px', borderRadius: '20px', marginTop: '20px' }} />
  );
}

export default Slideshow;
