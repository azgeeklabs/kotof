'use client'
import React, { useState } from 'react'
import styles from './header.module.css'
import Image, { StaticImageData } from 'next/image'
import img1 from '@/media/location-icon.png'
import img2 from '@/media/emailicon.png'
import img3 from '@/media/tele-icon.png'
import img4 from '@/media/facebook-icon.png'
import img5 from '@/media/linkedIn-icon.png'
import logo from '@/media/logo.png'
import Link from 'next/link'
import Dropdown from '../dropdown/Dropdown'
import englishFlag from '../../../media/englishFlag.png'
import arabicFlag from '../../../media/arabicFlag.png'
import menuIcon from '@/media/menuIcon.png'
import { useDirection } from '@/app/_contexts/DirectionContext';


const Header = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { direction, toggleDirection } = useDirection();

    const handleSelect = (selected: {
        option: string;
        img?: string | StaticImageData;
    }) => {
        toggleDirection()
        console.log('Selected:', selected);
    };

    const options = [{ option: "Arabic", img: arabicFlag }, { option: "English", img: englishFlag }];
    console.log(direction);


    return (
        <>
            {isOpen && <div onClick={() => setIsOpen(!isOpen)} className='fixed left-0 top-0 h-full w-full z-[9998] backdrop-blur-sm overflow-hidden'></div>}
            <div className={styles.top_header + " py-1"}>
                <div className='flex justify-between max-w-[90%] mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl'>
                    <ul className='flex justify-between gap-6 md:gap-2'>
                        <li><a href='#' className='flex items-center gap-0 md:gap-2'><Image src={img1} alt='location icon' /> <span className='hidden lg:inline'>No.28 Church Cres St, North Labone, Accra, Egypt</span></a></li>
                        <li><a href='#' className='flex items-center gap-0 md:gap-2'><Image src={img2} alt='email icon' /> <span className='hidden lg:inline'>sales@omnifert.com</span></a></li>
                        <li><a href='#' className='flex items-center gap-0 md:gap-2'><Image src={img3} alt='location icon' /><span className='hidden lg:inline'>+2010 5654 1236</span></a></li>
                    </ul>

                    <ul className='flex justify-between gap-6'>
                        <li><a href='#'><Image src={img4} alt='facebook icon' /></a></li>
                        <li><a href='#'><Image src={img5} alt='linkedIn icon' /></a></li>
                    </ul>
                </div>


            </div>
            <nav className={styles.navbar + " relative"}>
                <div className='flex justify-between items-center py-2 max-w-[90%] mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl'>
                    <Link href={"/"}>
                        <Image src={logo} alt='logo' className='w-20 md:w-32' />
                    </Link>
                    <ul className={`fixed flex top-[0] h-[100vh] w-[15rem] bg-[#00431F] z-[9999] px-6 py-16 flex-col justify-start lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:z-0 lg:px-0 lg:py-0 lg:flex-row gap-6 transition-all duration-500 ${isOpen ? 'left-0' : 'left-[-15rem]'}`}>
                        <li className='absolute top-4 right-4'>
                            <button className="w-8 h-8 relative group" onClick={() => setIsOpen(!isOpen)}>
                                <div className={`absolute w-full h-0.5 bg-white top-1/2 rotate-45 transition-all duration-300 ${!isOpen && "rotate-[0deg]"}`}></div>
                                <div className={`absolute w-full h-0.5 bg-white top-1/2 -rotate-45 transition-all duration-300 ${!isOpen && "-rotate-[0deg]"}`}></div>
                            </button>
                        </li>
                        <li><Link href="/" className='text-white lg:text-[#363636]'>Home</Link></li>
                        <li><Link href="/market" className='text-white lg:text-[#363636]'>Market</Link></li>
                        <li><Link href="/our-projects" className='text-white lg:text-[#363636]'>Our Project</Link></li>
                        <li><Link href="/news-articles" className='text-white lg:text-[#363636]'>News & Articles</Link></li>
                        <li><Link href="/partners" className='text-white lg:text-[#363636]'>Partners</Link></li>
                        <li><Link href="/contact-us" className='text-white lg:text-[#363636]'>Contact us</Link></li>
                        <li className="absolute lg:static bottom-4 left-0 w-full flex flex-col justify-center gap-4 p-8">
                            <Link href="/auth/signup" className='block lg:hidden px-4 py-2 text-[14px] text-center font-[500] rounded-[8px] bg-white '>Sign Up</Link>
                            <Link href="/auth/signin" className='block lg:hidden px-4 py-2 text-sm text-center md:text-base rounded-[8px] bg-[#009444] text-white hover:bg-[#00431F] duration-200'>Login</Link>
                        </li>
                    </ul>

                    <div className='flex items-center gap-4 md:gap-8'>
                        <Dropdown options={options} onSelect={handleSelect} placeholder={options[0]} selected={direction == 'rtl' ? options[0] : options[1]} />
                        <div className='hidden gap-4 lg:flex lg:items-center'>
                            <Link href="/auth/signup" className='text-[14px] font-[500] rounded-[4px] bg-white '>Sign Up</Link>
                            <Link href="/auth/signin" className='px-4 py-2 text-sm md:text-base rounded-[8px] bg-[#009444] text-white hover:bg-[#00431F] duration-200'>Login</Link>
                        </div>
                        <button className={styles.toggleMenu + ` flex lg:hidden `} onClick={() => setIsOpen(!isOpen)}><Image src={menuIcon} alt='menu icon' /></button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header