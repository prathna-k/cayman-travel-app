import { PEOPLE_URL } from '@/constants';
import Image from 'next/image';
import React from 'react'

interface LocationProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const Location = ({backgroundImage,title, subtitle}: LocationProps) => {
  return (
    <div className={`h-full w-[95%] min-w-[300px] ml-5 mb-5 ${backgroundImage} bg-cover bg-no-repeat rounded-5xl `}>
      <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>
        <div className='flexCenter gap-4  bg-white/30 rounded-3xl p-4'>
          <div className='rounded-full bg-[#7D8E8E] p-4'>
            <Image
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <h4 className='bold-18 text-white'>{title}</h4>
            <p className='regular-14 text-white'>{subtitle}</p>
          </div>
        </div>
    </div>
  </div>
  )
}

const Camp = () => {
  return (
    <section className=' 2xl:max-container relative flex flex-col py-10 lg:py-20 xl:mb-20'>
      <div className='flex flex-row xl:gap-x-48 xl:ml-20'>
      <div className='mr-50 -mt-10'>
            <Image
              src="/shell.png"
              alt="seashell"
              width={500}
              height={500}
              className='hidden xl:inline xl:-mt-50
              xl:mb-10'
             />
        </div>
        <div className='flexEnd flex-row mt-10 px-6 lg:-mt-60 lg:mr-5 h-[30%] mb-2'>

          <div className=' p-8 lg:max-w-[500px] xl:max-w-[734] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl bg-[#7D8E8E]/50 mb-5'>
            <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'>
              <strong> {"Don't know"} </strong> where to start? 
            </h2>
            <p className='regular-16 xl:regular-20 mt-5 text-white'>
              Discover endless possibilities in the Cayman Islands! Whether you are unwinding on pristine beaches, exploring vibrant coral reefs, or indulging in world-class cuisine, our island paradise offers the perfect blend of relaxation and adventure. Embrace the freedom to create your dream getaway, where every moment is a new opportunity for unforgettable experiences.
            </p>
            <Image
              src="/quote.svg"
              alt="camp-2"
              width={186}
              height={219}
              className='camp-quote' />
          </div>
          

      </div>
      </div>
        
      <div className='hide-scrollbar flex flex-col md:flex-row h-[80vh] w-[100%] mr-2 items-start justify-start gap-8 overflow-x-auto '>
        <div className='flex flex-col w-[100%] object-center lg:w-[50%] h-[100%]'>
          <Location 
          backgroundImage="bg-bg-img-1"
          title="Seven Mile Beach"
          subtitle="Grand Cayman"
          />
          <Location 
          backgroundImage="bg-bg-img-2"
          title="Luxury Bungalow"
          subtitle="Cayman Islands"
          />
        </div>
        <div className='flex flex-col w-[100%] object-center lg:w-[50%] h-[100%]'>
          <Location 
          backgroundImage="bg-bg-img-3"
          title="Camana Bay"
          subtitle="George Town, Cayman Islands"
        />
        <Location 
          backgroundImage="bg-bg-img-4"
          title="Barker's National Park"
          subtitle="West Bay, Cayman Islands"
        />
        </div>
      </div>


    </section>
  )
}

export default Camp