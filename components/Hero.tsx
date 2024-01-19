import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className=" h-[80vh] max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
        <div className='hero-map' />
        <div className='relative z-20 flex flex-1 flex-col xl:w-1/5 bg-[#A19DA4]/70 rounded-3xl p-3'>
            <h1 className=" font-serif bold-40 lg:bold-64">Elysian Ways </h1>
            <h1 className="bold-52 lg:bold-88"> Grand Cayman </h1>
            <div className=' bg-[#A19DA4]/50 rounded-3xl m-2 p-2.5'>
                <p className='reg-20 lg:regular-24 lg:mt-10 xl:max-w-[520px]'>  
                    Embark on a retreat to Grand Cayman, where pristine beaches and crystal-clear waters set the stage for unparalleled luxury. Indulge in opulence at world-class resorts, prioritizing your relaxation. Dive into unforgettable experiences, from snorkeling in Stingray City to leisurely strolls through the Queen Elizabeth II Botanic Park. Discover the epitome of refinement and adventure on the captivating shores of Grand Cayman.
                </p>
            </div>
           
            <div className="my-11 flex flex-wrap gap-5">
                <div className="flex items-center gap-2">
                    {Array(5).fill(1).map((_,index) => (
                        <Image
                            src="/star.svg"
                            key={index}
                            alt="star"
                            width={24}
                            height={24}
                        />
                    ))}
                </div>
                <p className='bold-16 lg:bold-20 text-blue-70'>
                    198k
                    <span className='regular-16 lg:regular-20 ml-1'> Excellent Reviews</span>
                </p>
            </div>
            <div className='flex flex-col w-full gap-3 sm:flex-row'>
                <Button type ="button" title="Download App" variant="btn_green"/>
                <Button type="button" title="How it works" variant="btn_white_text"/>
        </div>
        </div>
            <div className='relative flex flex-1 items-start'>
               
            </div>
    </section>
  )
}

export default Hero
