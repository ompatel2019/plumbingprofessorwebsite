import React from 'react';
import Service from './Service'; // Assuming the child component is named Service and imported correctly
import services from '../services'; 

const Services = () => {
  return (
    <>
      <div className='responsivePad lg:py-24 bg-c-5-0 py-12 flex flex-col space-y-8 text-white font-medium p m2'>
        <div className='flex flex-col space-y-8'>
          <h2 className='h4 font-bold'>No problem we can't solve</h2>
          <p className='text-white'>
            The Plumbing Professor is your trusted local plumber with over 25 years of experience, providing reliable and efficient services from small repairs to large-scale renovations.
            <span className='max-sm:hidden'>
              Our expert team specializes in emergency plumbing, new installations, maintenance, and system upgrades. Whether it's a burst pipe, hot water system replacement, or a full bathroom remodel, we deliver customized solutions with quality workmanship and peace of mind.
            </span>
          </p>
        </div>

        <div className='grid grid-cols-4 gap-4 max-md:grid-cols-2'>
          {services.map(service => (
            <Service key={service.id} serviceId={service.id} serviceIndex={service.index} serviceImg={service.serviceImg} serviceName={service.serviceName} />
          ))}
        </div>

        <p>
        Our team at The Plumbing Professor is dedicated to providing efficient, high-quality plumbing services for every job we undertake.
        </p>

        <p>
        Plumbing is best left to the experts—avoid the risks of DIY and trust The Plumbing Professor to handle all your plumbing needs with professionalism and precision!
        </p>
      </div>
    </>
  );
}

export default Services;
