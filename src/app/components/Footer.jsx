import React from 'react'
import Link from 'next/link'
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Footer = () => {
    return (
        <div className='h-96 flex items-center justify-evenly bg-zinc-900 text-white'>
            <div className='flex justify-between w-80% h-full flex-col-reverse md:flex-row'>
                <div className='flex flex-col justify-evenly h-full gap-6'>
                    <div className='w-full flex flex-col gap-1 font-light text-lg md:text-xl tracking-wide'>
                        <h3>Based In Banglore and
                            Working Worldwide</h3>
                    </div>
                    <div className='font-light'>
                        <Link href={''} className='text-3xl lg:text-4xl flex items-center gap-2'>
                            Get in touch
                            <HiOutlineArrowLongRight className='footerarrow text-3xl' />
                        </Link>

                    </div>
                    <div className='text-sm font-extralight tracking-wider'>
                        © vedcreative 2023
                    </div>
                </div>
                <div className='flex flex-col justify-evenly h-60'>

                    <div className='text-2xl md:text-3xl font-light tracking-wider w-full md:w-80'>
                        We Collaborate With Ambitious Minds
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer