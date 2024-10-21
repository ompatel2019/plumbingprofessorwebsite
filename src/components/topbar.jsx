import React, { useState } from 'react';

const Topbar = () => {
  const [dropdown, setDropDown] = useState(false); 

  const toggleDropdown = () => setDropDown(prev => !prev);

  return (
    <div className="topbar font-sans text-colour-3-0 responsivePad bg-c-3-0 py-[16px] p">
      <div className="flex justify-between">
        <p className="text-c-4-0 font-medium p m3">
          <span className="max-sm:hidden">The Plumbing Professor -</span> 25 Years of Excellence
        </p>
        <div onClick={toggleDropdown} className='cursor-pointer'>
          <div className='flex items-center gap-2 max-sm:gap-[2px]'>
            <p className='p m3 text-white font-medium'>Locations</p>
            <i className={`fa-solid ${dropdown ? 'fa-angle-up' : 'fa-angle-down'} text-white`}></i>
          </div>
          <div className={`absolute bg-c-3-0 p-2 text-c-4-0 border-2 border-white transition-opacity duration-300 ${dropdown ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <p className='p-2'>Sydney</p>
            <p className='p-2'>Melbourne</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
