import React from 'react'

const Stat = ({statIndex, stat, statHeading, statDescription}) => {
  return (
    <div key={statIndex} className='p-4 border-2 rounded-sm border-c-5-0 max-md:py-6 flex justify-around flex-col'>
        <h3 className='font-bold h4 mb-6 max-sm:text-[32px]'>
        {stat}
        </h3>
        <h4 className='h6 font-semibold m2'>
        {statHeading}
        </h4>
        <p className='max-md:hidden'>
        {statDescription}
        </p>
    </div>
  )
}

export default Stat