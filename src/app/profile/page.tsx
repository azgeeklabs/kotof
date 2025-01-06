"use client"
import React, { useRef, useState } from 'react'
import coverImg from '@/media/profile cover.png'
import UserImg from '@/media/our clients img1.png'
import Image from 'next/image'
import Button from '../_components/button/Button'
import IntlTelInput from "intl-tel-input/react";
import ImageUpload from './imageUploud'
import Link from 'next/link'


const RenderPrfileInfo = () => {

    const [files, setFiles] = useState<File[]>([]);

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

    const handleImageUpload = (file: File) => {
        console.log('File uploaded:', file);
    };

    return (
        <>
            <form action="" className='grid grid-cols-1 md:grid-cols-2 gap-5 p-8 bg-white rounded-[16px]'>
                <div className='space-y-1 col-span-2'>
                    <ImageUpload
                        maxSizeInMB={5}
                        onImageUpload={handleImageUpload}
                        width={600}
                        height={400}
                        acceptedFileTypes={['image/jpeg', 'image/png']}
                    />
                </div>
                <div className='space-y-1'>
                    <label htmlFor="email" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Email address</label>
                    <input type="email" name="email" id="email" placeholder='Enter your email' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
                </div>
                <div className='space-y-1'>
                    <label htmlFor="username" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>User name</label>
                    <input type="text" name="username" id="username" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
                </div>
                <div className='space-y-1'>
                    <label htmlFor="username" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Full Name</label>
                    <input type="text" name="username" id="username" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
                </div>
                <div className='space-y-1 flex flex-col'>
                    <label htmlFor="number1" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Phone Number 1</label>
                    {/* <input type="tel" name="number1" id="number1" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' /> */}
                    <IntlTelInput
                        //   onChangeNumber={setNumber}
                        //   onChangeValidity={setIsValid}
                        //   onChangeErrorCode={setErrorCode}
                        // any initialisation options from the readme will work here
                        initOptions={{
                            initialCountry: "eg",
                        }}
                    />
                </div>
                <div className='space-y-1 flex flex-col'>
                    <label htmlFor="number2" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Phone Number 2</label>
                    <IntlTelInput
                        //   onChangeNumber={setNumber}
                        //   onChangeValidity={setIsValid}
                        //   onChangeErrorCode={setErrorCode}
                        // any initialisation options from the readme will work here
                        initOptions={{
                            initialCountry: "eg",
                        }}
                    />                        </div>
                <div className='space-y-1 flex flex-col'>
                    <label htmlFor="whatsNumber" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Whats App Number</label>
                    <IntlTelInput
                        //   onChangeNumber={setNumber}
                        //   onChangeValidity={setIsValid}
                        //   onChangeErrorCode={setErrorCode}
                        // any initialisation options from the readme will work here
                        initOptions={{
                            initialCountry: "eg",
                        }}
                    />                        </div>
                <div className='space-y-1 flex flex-col'>
                    <label htmlFor="EmergencyContact" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Emergency Contact</label>
                    <IntlTelInput
                        //   onChangeNumber={setNumber}
                        //   onChangeValidity={setIsValid}
                        //   onChangeErrorCode={setErrorCode}
                        // any initialisation options from the readme will work here
                        initOptions={{
                            initialCountry: "eg",
                        }}
                    />                        </div>
                <div className='space-y-1'>
                    <label htmlFor="BankName" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Bank Name</label>
                    <input type="text" name="BankName" id="BankName" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
                </div>
                <div className='space-y-1'>
                    <label htmlFor="AccountNumber" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Bank Account Number</label>
                    <input type="number" name="AccountNumber" id="AccountNumber" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
                </div>
                <div className='space-y-1'>
                    <label htmlFor="Nationality" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Nationality</label>
                    <input type="text" name="Nationality" id="Nationality" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
                </div>
                <div className='space-y-1'>
                    <label htmlFor="InstaAccount" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>InstaPay Account</label>
                    <input type="text" name="InstaAccount" id="InstaAccount" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
                </div>
                <div className='space-y-1'>
                    <label htmlFor="nationalID" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>National ID</label>
                    <input type="text" name="nationalID" id="nationalID" placeholder='Enter your id' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
                </div>
                <div className='space-y-1 col-span-2'>
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
                            <p className="text-[#949494] text-[10px]">Supported ats : Jpeg, pdf</p>
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
                <Button className='col-span-2 w-36 ml-auto'>Confirm</Button>
            </form>
        </>
    )

}

const RenderWalletAndInvestments = () => {

    const [activeTab, setActiveTab] = useState("DepositMoney");

    const WalletTabs = [
        {
            id: 'DepositMoney',
            label: 'Deposit Money',
            content: RenderDepositMoney
        },
        {
            id: 'withdrawMoney',
            label: 'withdraw Money',
            content: RenderwithdrawMoney
        }
    ];

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-6 '>
                <div className='col-span-3 p-8 bg-white rounded-[16px]'>
                    <div className='flex items-center justify-between gap-4 pb-6 mb-6 border-b border-[#F1F1F1] '>
                        <p className='text-[#17181B] text-[20px] font-[500] flex items-center gap-2'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.74 22.75H6.26C3.77 22.75 1.75 20.73 1.75 18.24V11.51C1.75 9.02001 3.77 7 6.26 7H17.74C20.23 7 22.25 9.02001 22.25 11.51V12.95C22.25 13.36 21.91 13.7 21.5 13.7H19.48C19.13 13.7 18.81 13.83 18.58 14.07L18.57 14.08C18.29 14.35 18.16 14.72 18.19 15.1C18.25 15.76 18.88 16.29 19.6 16.29H21.5C21.91 16.29 22.25 16.63 22.25 17.04V18.23C22.25 20.73 20.23 22.75 17.74 22.75ZM6.26 8.5C4.6 8.5 3.25 9.85001 3.25 11.51V18.24C3.25 19.9 4.6 21.25 6.26 21.25H17.74C19.4 21.25 20.75 19.9 20.75 18.24V17.8H19.6C18.09 17.8 16.81 16.68 16.69 15.24C16.61 14.42 16.91 13.61 17.51 13.02C18.03 12.49 18.73 12.2 19.48 12.2H20.75V11.51C20.75 9.85001 19.4 8.5 17.74 8.5H6.26Z" fill="#252525" />
                            <path d="M2.5 13.16C2.09 13.16 1.75 12.82 1.75 12.41V7.84006C1.75 6.35006 2.69 5.00001 4.08 4.47001L12.02 1.47001C12.84 1.16001 13.75 1.27005 14.46 1.77005C15.18 2.27005 15.6 3.08005 15.6 3.95005V7.75003C15.6 8.16003 15.26 8.50003 14.85 8.50003C14.44 8.50003 14.1 8.16003 14.1 7.75003V3.95005C14.1 3.57005 13.92 3.22003 13.6 3.00003C13.28 2.78003 12.9 2.73003 12.54 2.87003L4.6 5.87003C3.79 6.18003 3.24 6.97006 3.24 7.84006V12.41C3.25 12.83 2.91 13.16 2.5 13.16Z" fill="#252525" />
                            <path d="M19.6 17.7999C18.09 17.7999 16.81 16.6799 16.69 15.2399C16.61 14.4099 16.91 13.5999 17.51 13.0099C18.02 12.4899 18.72 12.2 19.47 12.2H21.55C22.54 12.23 23.3 13.0099 23.3 13.9699V16.03C23.3 16.99 22.54 17.7699 21.58 17.7999H19.6ZM21.53 13.7H19.48C19.13 13.7 18.81 13.8299 18.58 14.0699C18.29 14.3499 18.15 14.7299 18.19 15.1099C18.25 15.7699 18.88 16.2999 19.6 16.2999H21.56C21.69 16.2999 21.81 16.18 21.81 16.03V13.9699C21.81 13.8199 21.69 13.71 21.53 13.7Z" fill="#252525" />
                            <path d="M14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z" fill="#252525" />
                        </svg>  Wallet Details</p>
                        <div className='flex items-center gap-4'>
                            {WalletTabs.map((tab) => (
                                <Button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-4
                                    ${activeTab === tab.id
                                            ? ''
                                            : 'opacity-60'
                                        }
                    `}
                                >
                                    {tab.id === "DepositMoney" ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 7.5V16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17 3V7H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 2L17 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 7.5V16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 6V2H18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17 7L22 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>}
                                    {tab.label}
                                </Button>
                            ))}

                        </div>
                    </div>
                    {WalletTabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`${activeTab === tab.id ? 'block' : 'hidden'}`}>
                            {tab.content()}
                        </div>
                    ))}
                    {/* <p className='text-[#656565] text-[18px] font-[400] mb-2'>Total Balance</p>
                    <h4 className='pb-6 mb-6 border-b border-[#F1F1F1] text-[#17181B] text-[28px] font-[600]'>120,000 <span className=' text-[16px]'>EGP</span></h4>
                    <div className='space-y-1 mb-4'>
                        <label htmlFor="BankName" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Receipt Image</label>
                        <input type="text" name="BankName" id="BankName" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 pb-6 mb-6 border-b border-[#F1F1F1]'>
                        <div className='space-y-1'>
                            <label htmlFor="BankName" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>InstaPay Number</label>
                            <input type="text" name="BankName" id="BankName" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
                        </div>
                        <div className='space-y-1'>
                            <label htmlFor="BankName" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Amount</label>
                            <input type="text" name="BankName" id="BankName" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
                        </div>
                    </div>
                    <Button className='w-full h-12'>Confirm</Button> */}
                </div>
                <div className='col-span-2 p-8 bg-white rounded-[16px]'>
                    <div className='flex items-center justify-between gap-4 pb-6 mb-6 border-b border-[#F1F1F1]'>
                        <p className='text-[#17181B] text-[20px] font-[500] flex items-center gap-2'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 6.31006H12C11.59 6.31006 11.25 5.97006 11.25 5.56006C11.25 5.15006 11.59 4.81006 12 4.81006H22C22.41 4.81006 22.75 5.15006 22.75 5.56006C22.75 5.98006 22.41 6.31006 22 6.31006Z" fill="#252525" />
                                <path d="M19.7798 11.25H14.2298C12.0398 11.25 11.2598 10.48 11.2598 8.3V4.2C11.2598 2.02 12.0398 1.25 14.2298 1.25H19.7798C21.9698 1.25 22.7498 2.02 22.7498 4.2V8.31C22.7498 10.48 21.9698 11.25 19.7798 11.25ZM14.2198 2.75C12.8598 2.75 12.7498 2.86 12.7498 4.2V8.31C12.7498 9.65 12.8598 9.76 14.2198 9.76H19.7697C21.1297 9.76 21.2397 9.65 21.2397 8.31V4.2C21.2397 2.86 21.1297 2.75 19.7697 2.75H14.2198Z" fill="#252525" />
                                <path d="M12 17.8101H2C1.59 17.8101 1.25 17.4701 1.25 17.0601C1.25 16.6501 1.59 16.3101 2 16.3101H12C12.41 16.3101 12.75 16.6501 12.75 17.0601C12.75 17.4801 12.41 17.8101 12 17.8101Z" fill="#252525" />
                                <path d="M9.77975 22.75H4.22977C2.03977 22.75 1.25977 21.98 1.25977 19.8V15.7C1.25977 13.52 2.03977 12.75 4.22977 12.75H9.77975C11.9698 12.75 12.7498 13.52 12.7498 15.7V19.81C12.7498 21.98 11.9698 22.75 9.77975 22.75ZM4.21976 14.25C2.85976 14.25 2.74976 14.36 2.74976 15.7V19.81C2.74976 21.15 2.85976 21.26 4.21976 21.26H9.76974C11.1297 21.26 11.2397 21.15 11.2397 19.81V15.7C11.2397 14.36 11.1297 14.25 9.76974 14.25H4.21976Z" fill="#252525" />
                                <path d="M15.0002 22.75C14.7302 22.75 14.4802 22.6 14.3502 22.37C14.2202 22.13 14.2202 21.85 14.3602 21.61L15.4102 19.86C15.6202 19.51 16.0802 19.39 16.4402 19.6C16.8002 19.81 16.9102 20.27 16.7002 20.63L16.4302 21.08C19.1902 20.43 21.2602 17.95 21.2602 14.99C21.2602 14.58 21.6002 14.24 22.0102 14.24C22.4202 14.24 22.7602 14.58 22.7602 14.99C22.7502 19.27 19.2702 22.75 15.0002 22.75Z" fill="#252525" />
                                <path d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9C1.25 4.73 4.73 1.25 9 1.25C9.27 1.25 9.51999 1.4 9.64999 1.63C9.77999 1.87 9.78001 2.15 9.64001 2.39L8.59 4.14C8.38 4.49 7.92 4.61 7.56 4.4C7.2 4.19 7.08999 3.73 7.29999 3.37L7.57001 2.92C4.81001 3.57 2.73999 6.05 2.73999 9.01C2.74999 9.41 2.41 9.75 2 9.75Z" fill="#252525" />
                            </svg>
                            Transitions</p>
                        <Link href={""} className='text-[#009444] text-[14] font-[500]'>See All</Link>
                    </div>
                    <div className='flex items-center gap-2 pb-3 mb-3 border-b border-[#F1F1F1]'>
                        <span className='w-12 h-12 rounded-[50%] bg-[#007BFF0F] flex justify-center items-center'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 7.5V16.5" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17 3V7H21" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 2L17 7" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <div className='grow '>
                            <div className='flex items-center justify-between gap-2'>
                                <p className='text-[#252525] text-[14px] font-[400]'>Deposit Transaction</p>
                                <p className='text-[#007BFF] text-[14px] font-[500]'>150.00 EGP +</p>
                            </div>
                            <div className='flex items-center justify-between gap-2'>
                                <span className='text-[#949494] text-[12px]'>#2324434</span>
                                <span className='text-[#949494] text-[12px]'>18, May, 2024</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 pb-3 mb-3 border-b border-[#F1F1F1]'>
                        <span className='w-12 h-12 rounded-[50%] bg-[#EAF5EE] flex justify-center items-center'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24" stroke="#009444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 7.5V16.5" stroke="#009444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#009444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 6V2H18" stroke="#009444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17 7L22 2" stroke="#009444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <div className='grow '>
                            <div className='flex items-center justify-between gap-2'>
                                <p className='text-[#252525] text-[14px] font-[400]'>Deposit Transaction</p>
                                <p className='text-[#009444] text-[14px] font-[500]'>150.00 EGP -</p>
                            </div>
                            <div className='flex items-center justify-between gap-2'>
                                <span className='text-[#949494] text-[12px]'>Amount withdrawn from your wallet.</span>
                                <span className='text-[#949494] text-[12px]'>18, May, 2024</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 pb-3 mb-3 border-b border-[#F1F1F1]'>
                        <span className='w-12 h-12 rounded-[50%] bg-[#007BFF0F] flex justify-center items-center'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 7.5V16.5" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17 3V7H21" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 2L17 7" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <div className='grow '>
                            <div className='flex items-center justify-between gap-2'>
                                <p className='text-[#252525] text-[14px] font-[400]'>Deposit Transaction</p>
                                <p className='text-[#007BFF] text-[14px] font-[500]'>150.00 EGP +</p>
                            </div>
                            <div className='flex items-center justify-between gap-2'>
                                <span className='text-[#949494] text-[12px]'>#2324434</span>
                                <span className='text-[#949494] text-[12px]'>18, May, 2024</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 pb-3 mb-3 border-b border-[#F1F1F1]'>
                        <span className='w-12 h-12 rounded-[50%] bg-[#EAF5EE] flex justify-center items-center'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24" stroke="#009444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 7.5V16.5" stroke="#009444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#009444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 6V2H18" stroke="#009444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17 7L22 2" stroke="#009444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <div className='grow '>
                            <div className='flex items-center justify-between gap-2'>
                                <p className='text-[#252525] text-[14px] font-[400]'>Deposit Transaction</p>
                                <p className='text-[#009444] text-[14px] font-[500]'>150.00 EGP -</p>
                            </div>
                            <div className='flex items-center justify-between gap-2'>
                                <span className='text-[#949494] text-[12px]'>Amount withdrawn from your wallet.</span>
                                <span className='text-[#949494] text-[12px]'>18, May, 2024</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='w-12 h-12 rounded-[50%] bg-[#007BFF0F] flex justify-center items-center'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 7.5V16.5" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17 3V7H21" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 2L17 7" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <div className='grow '>
                            <div className='flex items-center justify-between gap-2'>
                                <p className='text-[#252525] text-[14px] font-[400]'>Deposit Transaction</p>
                                <p className='text-[#007BFF] text-[14px] font-[500]'>150.00 EGP +</p>
                            </div>
                            <div className='flex items-center justify-between gap-2'>
                                <span className='text-[#949494] text-[12px]'>#2324434</span>
                                <span className='text-[#949494] text-[12px]'>18, May, 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-5 p-8 bg-white rounded-[16px]'>
                    <p className='text-[#17181B] text-[20px] font-[500] flex items-center gap-2 pb-6 mb-6 border-b border-[#F1F1F1]'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.74 22.75H6.26C3.77 22.75 1.75 20.73 1.75 18.24V11.51C1.75 9.02001 3.77 7 6.26 7H17.74C20.23 7 22.25 9.02001 22.25 11.51V12.95C22.25 13.36 21.91 13.7 21.5 13.7H19.48C19.13 13.7 18.81 13.83 18.58 14.07L18.57 14.08C18.29 14.35 18.16 14.72 18.19 15.1C18.25 15.76 18.88 16.29 19.6 16.29H21.5C21.91 16.29 22.25 16.63 22.25 17.04V18.23C22.25 20.73 20.23 22.75 17.74 22.75ZM6.26 8.5C4.6 8.5 3.25 9.85001 3.25 11.51V18.24C3.25 19.9 4.6 21.25 6.26 21.25H17.74C19.4 21.25 20.75 19.9 20.75 18.24V17.8H19.6C18.09 17.8 16.81 16.68 16.69 15.24C16.61 14.42 16.91 13.61 17.51 13.02C18.03 12.49 18.73 12.2 19.48 12.2H20.75V11.51C20.75 9.85001 19.4 8.5 17.74 8.5H6.26Z" fill="#252525" />
                        <path d="M2.5 13.16C2.09 13.16 1.75 12.82 1.75 12.41V7.84006C1.75 6.35006 2.69 5.00001 4.08 4.47001L12.02 1.47001C12.84 1.16001 13.75 1.27005 14.46 1.77005C15.18 2.27005 15.6 3.08005 15.6 3.95005V7.75003C15.6 8.16003 15.26 8.50003 14.85 8.50003C14.44 8.50003 14.1 8.16003 14.1 7.75003V3.95005C14.1 3.57005 13.92 3.22003 13.6 3.00003C13.28 2.78003 12.9 2.73003 12.54 2.87003L4.6 5.87003C3.79 6.18003 3.24 6.97006 3.24 7.84006V12.41C3.25 12.83 2.91 13.16 2.5 13.16Z" fill="#252525" />
                        <path d="M19.6 17.7999C18.09 17.7999 16.81 16.6799 16.69 15.2399C16.61 14.4099 16.91 13.5999 17.51 13.0099C18.02 12.4899 18.72 12.2 19.47 12.2H21.55C22.54 12.23 23.3 13.0099 23.3 13.9699V16.03C23.3 16.99 22.54 17.7699 21.58 17.7999H19.6ZM21.53 13.7H19.48C19.13 13.7 18.81 13.8299 18.58 14.0699C18.29 14.3499 18.15 14.7299 18.19 15.1099C18.25 15.7699 18.88 16.2999 19.6 16.2999H21.56C21.69 16.2999 21.81 16.18 21.81 16.03V13.9699C21.81 13.8199 21.69 13.71 21.53 13.7Z" fill="#252525" />
                        <path d="M14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z" fill="#252525" />
                    </svg>  Total Investments</p>

                    <div className='space-y-4 pb-6 mb-6 border-b border-[#F1F1F1]'>
                        <div className='flex items-center gap-12'>
                            <p className='text-[#656565] text-[18px] font-[400]'>The revenue for the year 2022 :</p>
                            <p className='text-[#17181B] text-[20px] font-[600]'>1200 <span className=' text-[14px]'>EGP</span></p>
                        </div>
                        <div className='flex items-center gap-12'>
                            <p className='text-[#656565] text-[18px] font-[400]'>The revenue for the year 2023 :</p>
                            <p className='text-[#17181B] text-[20px] font-[600]'>12000 <span className=' text-[14px]'>EGP</span></p>
                        </div>
                        <div className='flex items-center gap-12'>
                            <p className='text-[#656565] text-[18px] font-[400]'>The revenue for the year 2024 :</p>
                            <p className='text-[#17181B] text-[20px] font-[600]'>120000 <span className=' text-[14px]'>EGP</span></p>
                        </div>
                    </div>
                    <p className='flex items-center justify-end gap-6 text-[#656565] text-[18px] font-[400] text-end'>Total Amount: <span className='text-[#009444] text-[20px] font-[600]'>223,000 <span className=' text-[14px]'>EGP</span></span></p>
                </div>
            </div>
        </>
    )

}

const RenderTransactionManagement = () => {

    return (
        <>
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="0" className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
                tap1
            </div>
        </>
    )

}


// ==================== wallet tabs =========================

const RenderDepositMoney = () => {
    return (
        <>
            <p className='text-[#656565] text-[18px] font-[400] mb-2'>Total Balance</p>
            <h4 className='pb-6 mb-6 border-b border-[#F1F1F1] text-[#17181B] text-[28px] font-[600]'>120,000 <span className=' text-[16px]'>EGP</span></h4>
            <div className='space-y-1 mb-4'>
                <label htmlFor="BankName" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Receipt Image</label>
                <input type="text" name="BankName" id="BankName" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 pb-6 mb-6 border-b border-[#F1F1F1]'>
                <div className='space-y-1'>
                    <label htmlFor="BankName" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>InstaPay Number</label>
                    <input type="text" name="BankName" id="BankName" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
                </div>
                <div className='space-y-1'>
                    <label htmlFor="BankName" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Amount</label>
                    <input type="text" name="BankName" id="BankName" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
                </div>
            </div>
            <Button className='w-full h-12'>Confirm</Button>
        </>
    )
}


const RenderwithdrawMoney = () => {
    return (
        <>
            <p className='text-[#656565] text-[18px] font-[400] mb-2'>Total Balance</p>
            <h4 className='pb-6 mb-6 border-b border-[#F1F1F1] text-[#17181B] text-[28px] font-[600]'>120,000 <span className=' text-[16px]'>EGP</span></h4>
            <div className='space-y-1 mb-4'>
                <label htmlFor="BankName" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Receipt Image</label>
                <input type="text" name="BankName" id="BankName" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 pb-6 mb-6 border-b border-[#F1F1F1]'>
                <div className='space-y-1'>
                    <label htmlFor="BankName" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>InstaPay Number</label>
                    <input type="text" name="BankName" id="BankName" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
                </div>
                <div className='space-y-1'>
                    <label htmlFor="BankName" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Amount</label>
                    <input type="text" name="BankName" id="BankName" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
                </div>
            </div>
            <Button className='w-full h-12'>Confirm</Button>
        </>
    )
}


const ProfilePage = () => {

    const [activeTab, setActiveTab] = useState("PrfileInfo");

    const MainTabs = [
        {
            id: 'PrfileInfo',
            label: 'Profile Information',
            content: RenderPrfileInfo
        },
        {
            id: 'WalletAndInvestments',
            label: 'Wallet and investments',
            content: RenderWalletAndInvestments
        },
        {
            id: 'TransactionManagement',
            label: 'Transaction Management',
            content: RenderTransactionManagement
        }
    ];





    return (
        <>
            <div className='relative mb-[150px] lg:mb-[250px] bg-white'>
                <Image src={coverImg} alt='profile cover' className='h-[120px] lg:h-[360px] w-full object-cover' />
                <div className="absolute z-10 bottom-0 left-[50%] translate-x-[-50%] translate-y-[60%] w-full flex items-end  gap-6 lg:gap-12 mx-auto max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
                    <Image src={UserImg} alt='profile cover' className='h-[120px] w-[120px] lg:h-[280px] lg:w-[280px] object-cover rounded-[50%] border-[4px] border-white' />
                    <div className='flex flex-col justify-center gap-0 lg:gap-2 h-[70px] lg:h-[140px]'>
                        <span className='text-[#656565] text-[14px] lg:text-[20px] font-[400]'>Welcome,</span>
                        <h4 className='text-[#17181B] text-[20px] lg:text-[32px] font-[600]'>Amira Ahmed</h4>
                    </div>
                </div>
            </div>

            <div className='flex bg-[#c8c8c854] pt-[2px] pb-16'>
                <div className="w-1/5 pb-6 h-auto">
                    <div className='flex flex-row lg:flex-col justify-start gap-6 px-6 py-16 bg-white rounded-ee-[16px] h-full'>
                        {MainTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-2 md:p-3 md:px-6 w-full rounded-[8px] text-[12px] md:text-[16px] text-start font-[500] leading-[24px] transition-colors duration-200
              ${activeTab === tab.id
                                        ? 'bg-[#009444] text-[#fff]'
                                        : ' text-[#656565] hover:text-[#009444]'
                                    }
                    `}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="w-4/5 p-6">
                    {MainTabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`${activeTab === tab.id ? 'block' : 'hidden'}`}>
                            {tab.content()}
                        </div>
                    ))}
                </div>
            </div>

        </>

    )
}

export default ProfilePage