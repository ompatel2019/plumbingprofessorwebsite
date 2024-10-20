import React, { useState } from 'react';

const Topbar = () => {
  const [dropdown, setDropDown] = useState(false); 

  const toggleDropdown = () => setDropDown(prev => !prev);

  return (
    <div className="font-sans text-colour-3-0 responsivePad bg-c-3-0 py-[16px]">
      <div className="flex justify-between">
        <p className="text-c-4-0 font-medium p m2">
          <span className="max-sm:hidden">The Plumbing Professor -</span> 25 Years of Excellence
        </p>
        <div>
          <div className='flex items-center gap-2 max-sm:gap-[2px]'>
            <p className='p m2 text-white font-medium'>Locations</p>
            <i onClick={toggleDropdown} className={`fa-solid ${dropdown ? 'fa-angle-up' : 'fa-angle-down'} text-white cursor-pointer`}></i>
          </div>
          <div className={`absolute bg-c-3-0 p-2 text-c-4-0 border-2 border-white transition-opacity duration-300 ${dropdown ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <p className='p-2'>Sydney</p>
            <p className='border-t-2 p-2'>Melbourne</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
