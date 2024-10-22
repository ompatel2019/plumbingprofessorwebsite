import React from 'react'
import dino from '../assets/dino.png'
import Stat from './Stat'

const Results = () => {
  const stats = [
    {stat: '100%', heading: 'Satisfaction rate', description: 'We take pride in ensuring every customer is completely satisfied with our services, delivering results that exceed expectations.'},
    {stat: '100%', heading: 'On-time', description: 'Dependability matters—our team is committed to arriving on time and completing every job without delays.'}, 
    {stat: '100+', heading: 'Jobs Done', description: 'With over 100 jobs successfully completed, we have the expertise to tackle all kinds of plumbing challenges.'},
    {stat: '25 Years', heading: 'Of Experience', description: 'With 25 years of industry experience, The Plumbing Professor brings unmatched knowledge and skills to every project.'}
  ];

  return (
    <div className='responsivePad py-12 2xl:py-16 lg:space-y-12 space-y-6'>
      <h2 className='h4 m1 font-bold text-center'>
        Our Results in Numbers
      </h2>

      <div className='grid grid-cols-3 md:space-x-6 max-md:flex max-md:flex-col max-md:space-y-6'>
        <div className='col-span-1 flex justify-center'>
          <img className='h-full max-md:max-h-[24rem]' src={dino} alt="Dino Mascot" />
        </div>

        <div className='col-span-2'>
          <div className='gap-4 grid grid-cols-2 h-full'>
            {stats.map((stat, index) => (
              <Stat key={index} stat={stat.stat} statHeading={stat.heading} statDescription={stat.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results
