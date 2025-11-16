import React from 'react'
import backimg from '/food1.jpg';

const Hero = () => {
  return (
    <div className='p-4  max-w-full '>
      <div className='
      max-h-[500px] relative'>
        <div className='absolute w-full h-full text-white max-h-[550px] flex-col justify-center bg-black/60 '>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold '>The<span className='text-orange-400  transition delay-150 duration-300 ease-in-out'>Awesome!</span></h1 >
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold text-o animate-bounce '><span className='text-orange-400  '>Meal</span> At Your's Door</h1>

            </div>
   <img src={backimg} alt=""  srcset="" className='w-full max-h-[500px] object-cover rounded-3xl shadow-black transition-all duration-500 '/>
      </div>
   
    </div>
  )
}

export default Hero
