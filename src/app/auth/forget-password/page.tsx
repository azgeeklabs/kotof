'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/media/logo.png'
import Button from '@/app/_components/button/Button'
import Link from 'next/link'
import OTPInput from './OPT'
import Modal from './Modal'
import congratsImg from '@/media/congrats.png'


const page = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showOTP, setShowOTP] = useState<boolean>(false)

  const handleOTPComplete = (otp: string) => {
    console.log('Completed OTP:', otp);
    // Handle the completed OTP
  };
  return (
    <>
      <div className='space-y-8 mb-8'>
        <Image src={logo} alt='welcome img' />
        <div className='space-y-2'>
          <h2 className='text-[#17181B] text-[24px] font-[600]'>Welcome Back</h2>
          <p className='text-[#656C77] text-[16px] font-[400]'>We have share a code of your registered email address</p>
          <p className='text-[#40444C] text-[16px] font-[400]'>gmail@example.com</p>
        </div>
      </div>

      <div>

        {!showOTP ? <div>
          <div className='space-y-1 mb-8'>
            <label htmlFor="email" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Email address</label>
            <input type="text" name="email" id="email" placeholder='Enter your email' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
          </div>

          <Button className='w-full mb-3' onClick={() => setShowOTP(prev => !prev)}>Send OTP</Button>
          <Link href={'/auth/signin'} className=' text-[16px] text-[#79818F] flex items-center justify-center gap-2'><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.971293 8.52957C0.830842 8.38895 0.751953 8.19832 0.751953 7.99957C0.751953 7.80082 0.830842 7.6102 0.971293 7.46957L7.95829 0.469571C8.02744 0.397906 8.11018 0.340732 8.20166 0.301383C8.29314 0.262033 8.39155 0.241297 8.49113 0.240386C8.59072 0.239474 8.68948 0.258403 8.78167 0.296071C8.87386 0.333738 8.95763 0.389389 9.02808 0.459775C9.09853 0.530161 9.15426 0.613872 9.19202 0.706027C9.22977 0.798181 9.24879 0.896931 9.24798 0.996516C9.24716 1.0961 9.22651 1.19452 9.18725 1.28605C9.14799 1.37757 9.09089 1.46035 9.01929 1.52957L3.31129 7.24857L19.5013 7.23757C19.7002 7.23731 19.8911 7.31607 20.0319 7.45653C20.1728 7.597 20.252 7.78766 20.2523 7.98657C20.2526 8.18548 20.1738 8.37635 20.0333 8.51719C19.8929 8.65803 19.7022 8.73731 19.5033 8.73757L3.30929 8.74757L9.02029 14.4696C9.09189 14.5388 9.14899 14.6216 9.18825 14.7131C9.22752 14.8046 9.24816 14.903 9.24898 15.0026C9.24979 15.1022 9.23077 15.201 9.19302 15.2931C9.15526 15.3853 9.09953 15.469 9.02908 15.5394C8.95863 15.6098 8.87486 15.6654 8.78267 15.7031C8.69048 15.7407 8.59172 15.7597 8.49213 15.7588C8.39255 15.7578 8.29414 15.7371 8.20266 15.6978C8.11118 15.6584 8.02844 15.6012 7.95929 15.5296L0.971293 8.52957Z" fill="#79818F" />
          </svg>
            Back to login</Link>
        </div> : <div className='flex flex-col items-center'>
          <div className='space-y-1 w-full mb-8'>
            <label htmlFor="email" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Enter OTP</label>
            <OTPInput onComplete={handleOTPComplete} />
          </div>
          <p className='flex items-center text-center text-[#656C77] text-[16px] font-[400] mb-4'>Didn&apos;t get a code? <Button variant='link' className='text-[#009444] text-[16px]'>Click to resend</Button></p>
          <Button className='w-full mb-3' onClick={() => { setIsOpen(true) }}>Continue</Button>
          <Link href={'/auth/signin'} className=' text-[16px] text-[#79818F] flex items-center justify-center gap-2'><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.971293 8.52957C0.830842 8.38895 0.751953 8.19832 0.751953 7.99957C0.751953 7.80082 0.830842 7.6102 0.971293 7.46957L7.95829 0.469571C8.02744 0.397906 8.11018 0.340732 8.20166 0.301383C8.29314 0.262033 8.39155 0.241297 8.49113 0.240386C8.59072 0.239474 8.68948 0.258403 8.78167 0.296071C8.87386 0.333738 8.95763 0.389389 9.02808 0.459775C9.09853 0.530161 9.15426 0.613872 9.19202 0.706027C9.22977 0.798181 9.24879 0.896931 9.24798 0.996516C9.24716 1.0961 9.22651 1.19452 9.18725 1.28605C9.14799 1.37757 9.09089 1.46035 9.01929 1.52957L3.31129 7.24857L19.5013 7.23757C19.7002 7.23731 19.8911 7.31607 20.0319 7.45653C20.1728 7.597 20.252 7.78766 20.2523 7.98657C20.2526 8.18548 20.1738 8.37635 20.0333 8.51719C19.8929 8.65803 19.7022 8.73731 19.5033 8.73757L3.30929 8.74757L9.02029 14.4696C9.09189 14.5388 9.14899 14.6216 9.18825 14.7131C9.22752 14.8046 9.24816 14.903 9.24898 15.0026C9.24979 15.1022 9.23077 15.201 9.19302 15.2931C9.15526 15.3853 9.09953 15.469 9.02908 15.5394C8.95863 15.6098 8.87486 15.6654 8.78267 15.7031C8.69048 15.7407 8.59172 15.7597 8.49213 15.7588C8.39255 15.7578 8.29414 15.7371 8.20266 15.6978C8.11118 15.6584 8.02844 15.6012 7.95929 15.5296L0.971293 8.52957Z" fill="#79818F" />
          </svg>
            Back to login</Link>
        </div>}

        {/* <p className='text-center text-[#656C77] text-[16px] font-[400]'>Don&apos;t have an account? <Link href="/auth/signup" className='text-[#009444]'>sign up</Link> </p> */}
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className='flex flex-col items-center gap-4'>
          <Image src={congratsImg} alt='congrats' />
          <h6 className='text-center text-[#17181B] text-[28px] font-[600]'>Password Update <br/> Successfully</h6>
          <p className='text-[#8E98A8] text-[16px] font-[400]'>Your password has been update successfully</p>
          <Link href='/auth/signin' className='w-full p-2 text-center rounded-[8px] text-white bg-[#009444] text-[16px]'>Back to Login</Link>
        </div>
      </Modal>
    </>
  )
}

export default page