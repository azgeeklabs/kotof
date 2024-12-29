'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/media/logo.png'
import { FaEye } from 'react-icons/fa'
import { RiEyeCloseFill } from 'react-icons/ri'
import Button from '@/app/_components/button/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation';


const page = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  return (
    <>
      <div className='space-y-8 mb-8'>
        <Image src={logo} alt='welcome img' />
        <div className='space-y-2'>
          <h2 className='text-[#17181B] text-[24px] font-[600]'>Welcome Back</h2>
          <p className='text-[#656C77] text-[16px] font-[400]'>Enter your email and password to login. </p>
        </div>
      </div>

      <div>
        <div className='space-y-1 mb-4'>
          <label htmlFor="email" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Email address</label>
          <input type="text" name="email" id="email" placeholder='Enter your email' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
        </div>
        <div className='space-y-1 mb-6'>
          <label htmlFor="password" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Password</label>
          <div className="relative">
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[24px] cursor-pointer text-[#17181B]" onClick={() => setPasswordVisible(prev => !prev)}>
              {passwordVisible ? <FaEye /> : <RiEyeCloseFill />}
            </span>
            <input type={passwordVisible ? "text" : "password"} name="password" id="password" placeholder='Enter your passwordh' className='w-full px-4 py-2 mb-1 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]' />
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" name="rememberMe" id="rememberMe" className='accent-[#009444] w-4' />
            <label htmlFor="rememberMe" className='text-[#A2A1A8] text-[14px] leading-[20px] font-[400]'>Remember Me</label>
          </div>
        </div>


        <Button className='w-full mb-3' onClick={()=> router.push("/")}>Login</Button>
        <p className='text-center text-[#656C77] text-[16px] font-[400]'>Don&apos;t have an account? <Link href="/auth/signup" className='text-[#009444]'>sign up</Link> </p>
      </div>
    </>
  )
}

export default page