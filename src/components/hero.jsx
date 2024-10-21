import React, { useEffect, useState } from 'react';
import HeroWrapper from './HeroWrapper';
import HeroBottomWrapper from './HeroWrapper';
import Hero1Tab from '../assets/hero1tab.png';
import Hero2Tab from '../assets/hero2tab.png';
import Hero3Tab from '../assets/hero3tab.png';
import Hero4Tab from '../assets/hero4tab.png';

const Hero = () => {
  const images = [Hero1Tab, Hero2Tab, Hero3Tab, Hero4Tab];
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
      <>
        <div className='relative flex flex-col items-center'>
          <HeroWrapper/>
            <div className='responsivePad py-24 text-center bg-c-5-0 opacity-85 w-full'>
              <div className='space-y-4 text-c-4-0 md:py-24 lg:py-32 2xl:py-48'>
                <h1 className='h2 font-black'>
                  The Plumbing Professor
                </h1>
                <p className='p m3'>
                  The Plumbing Professor is a locally run plumber with over 25 years of experience in the business. No plumbing job is too big or too small.
                </p>
              </div>
              <img src={images[imageIndex]} alt="" />
            </div>
        </div>
      </>
  );
};

export default Hero;
