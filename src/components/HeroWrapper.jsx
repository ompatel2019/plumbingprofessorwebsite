import React, { useEffect, useState } from 'react';
import Hero1 from '../assets/hero1.png';
import Hero2 from '../assets/hero2.png';
import Hero3 from '../assets/hero3.png';
import Hero4 from '../assets/hero4.png';

const HeroWrapper = () => {
  const images = [Hero1, Hero2, Hero3, Hero4];
  const [imageIndex, setImageIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false); 
    const interval = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='absolute inset-0 bg-cover bg-center bg'>
      <img 
        src={images[imageIndex]}
        alt="Background"
        className={`absolute inset-0 w-full h-full object-cover fade-in ${loaded ? 'active' : ''}`}
        onLoad={() => setLoaded(true)} 
        style={{ transition: 'opacity 0.5s ease-in-out' }}
      />
    </div>
  );
};

export default HeroWrapper;
