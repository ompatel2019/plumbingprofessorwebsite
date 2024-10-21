import React from 'react';

const Service = ({ serviceId, serviceIndex, serviceImg, serviceName }) => {
  return (
    <div id={`service-${serviceId}`} className='bg-c-4-0 rounded-md p-4 flex flex-col items-center justify-center space-y-4 lg:py-12 md:py-8 sm:py-6 hover:translate-y-[-10px] transition-translate duration-[0.2s]'>
      <img src={serviceImg} alt={serviceName} className="max-md:w-12 max-md:h-12"/>
      <p className="text-center font-medium text-c-5-0">{serviceName}</p>
    </div>
  );
}

export default Service;
