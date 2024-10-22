import React from 'react'
import Stars from '../assets/stars.svg'

const Testimonial = ({testimonial, name}) => {
  return (
    <div className='space-y-4 border-2 border-gray-500 p-6'>
        <img src={Stars} alt="stars rating" />
        <p>
            {testimonial}
        </p>
        <p>
            {name}
        </p>
    </div>
  )
}

export default Testimonial
