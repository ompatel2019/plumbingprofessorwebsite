import React from 'react'
import Testimonial from './Testimonial'
import Stars from '../assets/stars.svg'

const Testimonials = () => {

  const testimonialData = [
    {testimonial: "The company installed my washing machine, gas tumble dryer, dishwasher, and connected my fridge's ice-maker, ensuring everything works perfectly without leaks or issues—excellent, smooth service!", name:"Rhonda Walker"},
    {testimonial: "I found this company through a Facebook ad for complex plumbing projects. They expertly installed new vanity units, sinks, showers, and bathtubs during our bathroom makeover—excellent service!", name:"Katie Fox"},
    {testimonial: "Plumbing Professor NSW fixed my water supply pipe after discovering a blockage, providing timely, thorough service when the water company wouldn't help. Excellent, affordable work!", name:"Andrea Neang"}
  ]

  return (
    <div className='responsivePad py-6 md:py-12 2xl:py-16 lg:space-y-12 space-y-6'>
      <h2 className='h4 m1 font-bold text-left'>
        Customer testimonials
      </h2>
      <p>Hear it from our very own customers that have had an experience of our great work!</p>      

      <div className='flex justify-between max-lg:flex-col max-lg:space-y-4 lg:space-x-4'>
        {testimonialData.map((testimonial, index) => ( 
          <Testimonial key={index} testimonial={testimonial.testimonial} name={testimonial.name}/>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
