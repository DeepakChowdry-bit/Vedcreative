import React from 'react'
import Carouselstyles from '@/app/styles/Carousel.module.css'


const Carousal = () => {
  return (
    <div className='flex justify-center items-center w-full lg:h-56 h-80'>
        <div className='flex flex-col justify-center items-center w-90% relative h-1/2'>
            <div className={`${Carouselstyles.wrapper} text-xl lg:text-2xl font-black flex flex-wrap justify-center items-center lg:gap-20 gap-8 uppercase`}>
                <div className={Carouselstyles.item}>BRYHEL®</div>
                <div className={Carouselstyles.item}>awwwards.</div>
                <div className={Carouselstyles.item}>Forbes.</div>
                <div className={Carouselstyles.item}>LOREAL®</div>
                <div className={Carouselstyles.item}>Harvard.</div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Carousal