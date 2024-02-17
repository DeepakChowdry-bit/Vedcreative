'use client'
import React from "react";
import { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineWork, MdArrowRightAlt } from "react-icons/md";
import { PiDotsNineBold } from "react-icons/pi";
import { FaBehance, FaInstagram, FaDribbble } from "react-icons/fa";
import Navstyles from '@/app/styles/Navbar.module.css'

const Navbar = () => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };
    return (
        <>
            {/* Desktop Navigation */}
            <div className={`${Navstyles.navbar} hidden sm:flex md:flex items-center justify-center w-full h-24 z-10 bg-white`}>
                <div className='flex items-center justify-between w-90%'>

                    <div className='flex items-center gap-20'>
                        <h3 className={`${Navstyles.logo} text-base font-black`}>VED®</h3>


                    </div>
                    <div className="flex items-center gap-16">
                        <div className='flex items-center gap-6 text-xs font-bold uppercase'>
                            <Link href={''} className={`${Navstyles.links}`}>About Us</Link>
                            <Link href={''} className={`${Navstyles.links}`}>Work</Link>

                        </div>
                        <div className='flex items-center gap-3 text-sm text-zinc-900'>
                            <FaBehance className={`${Navstyles.socials}`} />
                            <FaDribbble className={`${Navstyles.socials}`} />
                            <FaInstagram className={`${Navstyles.socials}`} />
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Navigation */}
            <div className='sm:hidden md:hidden flex items-center justify-center w-full h-20 fixed z-20 bg-white'>
                <div className='flex items-center justify-between w-11/12'>
                    <h3 className={`${Navstyles.logo} text-base font-black`}>VED®</h3>

                    <PiDotsNineBold className={`${Navstyles.menuicon} text-base font-bold`} onClick={handleClick} />

                </div>
            </div>


            <div className={`${isActive ? 'menuopen' : ''} menu sm:hidden md:hidden flex justify-center items-center fixed top-0 w-full h-90 bg-white/70 border-b-2 border-zinc-300 z-10 backdrop-blur-[5px]`}>
                <div className='flex flex-col items-center justify-end w-10/12 h-full'>
                    <div className='flex flex-col items-start justify-center gap-6 text-sm font-bold uppercase w-full h-4/6'>
                        <Link href={''} className="mlink">About Us</Link>
                        <Link href={''} className="mlink">Work</Link>
                    </div>


                    <div className='flex items-center justify-center gap-5 text-sm text-zinc-900 h-12 w-full'>
                        <FaBehance className="msocials" />
                        <FaDribbble className="msocials" />
                        <FaInstagram className="msocials" />
                    </div>
                </div>
            </div>
            {/* <div className='sm:hidden flex items-center justify-center w-full fixed bottom-0 h-16'>
                <div className='flex justify-evenly items-center w-11/12'>
                    <Link href={''} className='text-xs font-medium uppercase tracking-wide border border-black py-2 px-5'>Let's Talk</Link>
                    <Link href={''} className=''><PiDotsNineBold className='text-xl' /></Link>

                </div>
            </div> */}


        </>

    )
}

export default Navbar