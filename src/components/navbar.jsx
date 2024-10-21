import React, { useState } from 'react';
import phone from '../assets/phone.svg';
import services from '../services'; 

const Navbar = () => { 
  const [dropdown, setDropDown] = useState(false);
  const navLinks = [
    { navLink: "Services", anchor: "#" },
    { navLink: "About Us", anchor: "#aboutUs" },
    { navLink: "Inquire", anchor: "#inquire" },
    { navLink: "Testimonials", anchor: "#testimonials" }
  ];

  const toggleDropdown = () => setDropDown(prev => !prev);

  return (
    <div className='responsivePad bg-c-5-0 flex justify-between px-4 text-white font-sans py-[32px] items-center'>
      
      <div>
        logo
      </div>

      <ul className='flex space-x-4 lg:space-x-8 max-sm:hidden'>
        {navLinks.map((navLink, navLinkIndex) => (
          <li key={navLinkIndex} className='hover:text-c-3-0 transition-all p'>
            {navLinkIndex === 0 ? (
              <>
                <div onClick={toggleDropdown} className='flex items-center cursor-pointer'>
                  <p className='mr-2'>{navLink.navLink}</p>
                  <i className={`fa-solid ${dropdown ? 'fa-angle-up' : 'fa-angle-down'} text-white cursor-pointer`}></i>
                </div>
                <div className={`absolute bg-c-5-0 p-2 text-c-4-0 border-2 border-white transition-opacity duration-300 ${dropdown ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <div className='space-y-2'>
                    {services.map((service, serviceIndex) => (
                      <a href={service.a} key={serviceIndex}>
                        <p className='p-2 hover:text-c-5-0 hover:bg-c-4-0 transition-all duration-300 cursor-pointer'>
                          {service.serviceName}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <a href={navLink.anchor}>{navLink.navLink}</a>
            )}
          </li>
        ))}
      </ul>

      <div className='space-x-4 flex font-medium m4 max-sm:font-semibold'>
        <button className='bg-c-4-0 p-2 rounded-md flex space-x-2 items-center hover:border-c-4-0 cursor-pointer hover:px-4 transition-all duration-200'>
          <img className='max-sm:w-6' src={phone} alt="Phone" />
          <a href="tel:0407070106">
            <p className='text-c-5-0'>0407 070 106</p>
          </a>
        </button>
        <button href="#contactForm" className='bg-c-3-0 p-2 rounded-md cursor-pointer hover:px-4 transition-all duration-200'>Request a Quote</button>
      </div>
    </div>
  );
}

export default Navbar;
