import React from 'react'
import Herostyles from '@/app/styles/Hero.module.css'

const Hero = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-col gap-10 items-center justify-center w-full h-full pt-24 lg:pt-40'>
            <div className='flex flex-col md:flex-row items-center justify-between w-90% lg:h-56 h-full gap-10'>
                <div className='flex flex-col items-start w-full lg:w-1/3 h-full gap-3'>
                    <h3 className={`${Herostyles.title} text-base font-black`}>WHO WE ARE</h3>
                    <div >
                        <div className={`${Herostyles.para}`}>We're a branding agency that helps purpose-driven</div>
                        <div className={`${Herostyles.para}`}>businesses become industry leaders through effective</div>
                        <div className={`${Herostyles.para}`}>design strategy, becoming a growth partner you can</div>
                        <div className={`${Herostyles.para}`}>trust. Specializing in the wellness, beauty, and</div>
                        <div className={`${Herostyles.para}`}>household sectors, we provide the tools and support</div>
                        <div className={`${Herostyles.para}`}>for your brand's success.</div>
                    </div>
                </div>
                <div className='flex flex-col items-start w-full lg:w-1/3 h-full gap-3'>
                    <h3 className={`${Herostyles.title} text-base font-black`}>WHAT WE CAN HELP YOU ACCOMPLISH</h3>
                    <div>
                        <div className={`${Herostyles.para}`}>Create, Communicate & unify your story.</div>
                        <div className={`${Herostyles.para}`}>Build customer loyalty.</div>
                        <div className={`${Herostyles.para}`}>Increase your brand’s memorability.</div>
                        <div className={`${Herostyles.para}`}>Build trust & credibility.</div>
                    </div>
                </div>
            </div>
            <div className={`${Herostyles.video} flex items-center justify-between w-90% lg:h-40vh h-80 relative`}>
                <video src="/bg2.mp4" autoPlay playsInline className='w-full h-full object-cover'></video>
            </div>
        </div>
    )
}

export default Hero


{/* <p>Welcome to Ved, your digital partner in the vibrant tech hub of Bangalore! At Ved, we transcend conventional boundaries, combining the rich tapestry of technology, creativity, and strategy to weave exceptional digital experiences. With a dedicated team of skilled developers, designers, and digital strategists, Ved is your go-to destination for web development, branding, and UI/UX services that redefine your online presence.
                <br><br>
                In the dynamic landscape of Bangalore, Ved thrives on innovation and excellence. Our commitment to quality, coupled with a client-centric approach, ensures that each project is a testament to our dedication to exceeding expectations.

            </p> */}