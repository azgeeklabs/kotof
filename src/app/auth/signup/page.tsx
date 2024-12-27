'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react';
import logo from '@/media/logo.png'
import Button from '@/app/_components/button/Button'
import Link from 'next/link'


const page = () => {


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [files, setFiles] = useState<File[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const droppedFiles = Array.from(event.dataTransfer.files);
    const imageFiles = droppedFiles.filter(file => file.type.startsWith('image/'));

    if (imageFiles.length > 0) {
      setFiles([...files, ...imageFiles]);
    } else {
      alert('Only image files are allowed!');
    }
  };

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      const imageFiles = selectedFiles.filter(file => file.type.startsWith('image/'));

      if (imageFiles.length > 0) {
        setFiles([...files, ...imageFiles]);
      } else {
        alert('Only image files are allowed!');
      }
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };



  return (
    <div>
      <div className='space-y-8 mb-8'>
        <Image src={logo} alt='welcome img' />
        <div className='space-y-2'>
          <h2 className='text-[#17181B] text-[24px] font-[600]'>Welcome Back</h2>
          <p className='text-[#656C77] text-[16px] font-[400]'>Enter your email and password to login. </p>
        </div>
      </div>

      <form action="">
        <div className='space-y-1 mb-4'>
          <label htmlFor="username" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>User name</label>
          <input type="text" name="username" id="username" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
        </div>
        <div className='space-y-1 mb-4'>
          <label htmlFor="email" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Email address</label>
          <input type="email" name="email" id="email" placeholder='Enter your email' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
        </div>
        <div className='space-y-1 mb-4'>
          <label htmlFor="password" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Password</label>
          <input type="password" name="password" id="password" placeholder='Enter your password' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
        </div>
        <div className='space-y-1 mb-4'>
          <label htmlFor="rePassword" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Confirm Password</label>
          <input type="password" name="rePassword" id="rePassword" placeholder='Confirm your password' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
        </div>
        <div className='space-y-1 mb-4'>
          <label htmlFor="nationalID" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>National ID</label>
          <input type="text" name="nationalID" id="nationalID" placeholder='Enter your id' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
        </div>
        <div className='space-y-1 mb-8'>
          <label htmlFor="imgId" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Image ID</label>
          <div>
            <div
              className="border-[1px] border-dashed border-[#009444] rounded-lg p-6 text-center cursor-pointer hover:bg-gray-100"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={handleClick} // Makes the dropzone clickable
            >
              <div className='flex justify-center items-center mx-auto mb-2 w-8 h-8 rounded-[10px] bg-[#009444]'>
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.72476 3.5579C3.48069 3.80198 3.48069 4.19771 3.72477 4.44178C3.96885 4.68586 4.36457 4.68586 4.60865 4.44178L6.87501 2.1754V12.3332C6.87501 12.6784 7.15483 12.9582 7.50001 12.9582C7.84519 12.9582 8.12501 12.6784 8.12501 12.3332V2.17538L10.3914 4.44178C10.6355 4.68586 11.0312 4.68586 11.2753 4.44178C11.5194 4.1977 11.5194 3.80197 11.2753 3.5579L7.94195 0.22456C7.82474 0.10735 7.66577 0.0415031 7.50001 0.0415039C7.33425 0.0415047 7.17528 0.107354 7.05807 0.224564L3.72476 3.5579ZM2.78322 6.89078C2.99911 6.62146 2.9558 6.22811 2.68648 6.01221C2.41715 5.79631 2.0238 5.83962 1.80791 6.10894C0.807302 7.35716 0.208374 8.94275 0.208374 10.6665C0.208374 14.6936 3.47296 17.9582 7.50004 17.9582C11.5271 17.9582 14.7917 14.6936 14.7917 10.6665C14.7917 8.94275 14.1928 7.35716 13.1922 6.10894C12.9763 5.83962 12.5829 5.79631 12.3136 6.01221C12.0443 6.22811 12.001 6.62146 12.2169 6.89078C13.0461 7.92523 13.5417 9.23714 13.5417 10.6665C13.5417 14.0032 10.8368 16.7082 7.50004 16.7082C4.16332 16.7082 1.45837 14.0032 1.45837 10.6665C1.45837 9.23714 1.95397 7.92523 2.78322 6.89078Z" fill="white" />
                </svg>
              </div>
              <p className="text-[#40444C] text-[14px]">Drag & Drop or <span className='text-[#009444]'>choose file</span> to upload</p>
              <p className="text-[#949494] text-[10px]">Supported formats : Jpeg, pdf</p>
              <input
                type="file"
                multiple
                accept=".jpeg, .jpg, .pdf"
                ref={fileInputRef} // Reference to the hidden input
                onChange={handleFileInputChange}
                className="hidden"
              />
            </div>
            <ul className="mt-4 text-sm text-gray-700">
              {files.length > 0 &&
                files.map((file, index) => (
                  <li key={index} className="border p-2 rounded mb-2">
                    {file.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <Button className='w-full mb-3'>Sign Up</Button>
        <p className='text-center text-[#656C77] text-[16px] font-[400]'>Don&apos;t have an account? <Link href="/auth/signin" className='text-[#009444]'>Log In</Link> </p>
      </form>
    </div>
  )
}

export default page