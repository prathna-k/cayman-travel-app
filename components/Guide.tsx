import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="2xl:max-container flexCenter flex-col bg-[#52777D]/40 rounded-5xl p-4 m-4">
      <div className="padding-container max-container w-full pb-24">
        <p className="uppercase regular-18 -mt-1 mb-3 text-[#3a4c4c]">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <div className='flex flex-col'>
            <h2 className="bold-40 lg:bold-64 ">Guide You to Relaxation</h2>
            <Image 
              src="/lotus.png"
              alt="lotus"
              width={600}
              height={450}
              className="hidden 2xl:inline object-scale-down ml-5"
            />
          </div>

          <div className='flex p-2 h-[200%]'>
            <p className="regular-20 lg:regular-24 text-gray-50 xl:max-w-[490px] ">Elevate your Cayman Islands experience with the Elysian Ways app, your gateway to personalized luxury and relaxation. Seamlessly navigate through a curated selection of resorts and activities tailored to your preferences, ensuring a bespoke getaway. Whether you seek serene beachfront retreats or thrilling underwater adventures, our app ensures there is something for every traveler. Indulge in the epitome of tranquility and opulence, effortlessly discovered through Elysian Ways, your key to an unforgettable escape in the Cayman Islands.</p>
          </div>
          
        </div>
      </div>

      <div className="flex max-container relative w-full">
        <Image 
          src="/chair.png"
          alt="chair"
          width={1440}
          height={580}
          className="w-full object-cover object-center rounded-3xl 2xl:rounded-5xl"
        />
         <div className='absolute bottom-5 right-5  z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-[#52777D]/40 px-7 py-8'>
                    <div className='flex flex-col'>
                        <div className='flexBetween'>
                            <p className='regular-16 text-gray-50'>Location</p>
                            <Image src="/close.svg" alt="close" width={24} height={24} />
                        </div>
                        <p className='bold-20 text-white'>Seven Mile Beach</p>
                    </div>

                    <div className='flexBetween'>
                        <div className='flex flex-col'>
                            <p className='regular block text-gray-50'>Distance</p>
                            <p className='bold-20 text-white'>7.000 mi</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='regular block text-gray-50'>Elevation</p>
                            <p className='bold-20 text-white'>9.040 m</p>
                        </div>
                    </div>
                </div>
      </div>
    </section>
  )
}

export default Guide
