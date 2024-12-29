import Image from 'next/image';
import React from 'react'
import bgImg from '@/media/auth_bg.png'
import logo from '@/media/logo.png'

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2  gap-8 p-6 md:p-8 '>
            <div className='w-full lg:w-[65%] mx-auto flex flex-col justify-center'>
                {children}
            </div>
            <div className='fixed ltr:right-[2vw] rtl:left-[2vw] top-[5vh] hidden lg:block w-1/2 h-[90vh]'>
                <Image src={bgImg} alt='welcome img' className='w-full h-full object-cover rounded-[16px]' />
                <div className='absolute top-0 left-0 w-full h-full z-[2] flex flex-col justify-center items-center gap-12'>
                    <Image src={logo} alt='welcome img'/>
                    <div className='w-3/5 text-center space-y-3'>
                        <h2 className='text-white text-[24px] font-[600]'>Welcome to Quttouf </h2>
                        <p className='text-white text-[16px] font-[400]'>The easiest way to grow your investments and achieve your financial goals. Join us to explore smart solutions tailored for your success</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
