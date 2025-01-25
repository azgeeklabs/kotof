import Button from '@/app/_components/button/Button'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
import userImg from '@/media/our clients img1.png'
import Pagination from '@/app/_components/pagination/Pagination'


const RenderPurchaseRequests = () => {

    const [First, setFirst] = useState<number>(1)

    return (
        <>
            <div className='flex flex-col lg:grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='px-4 py-6 lg:px-6 lg:py-8  rounded-[20px] bg-[#fff] w-full'>
                    <p className='text-[14px] font-[500] text-black text-center mb-4'>22/4/2023</p>
                    <h6 className='text-[26px] text-[#009444] text-center font-[600] mb-8'>Agricultural land</h6>
                    <div className='flex items-center justify-between mb-8'>
                        <div className='flex items-center gap-2'>
                            <Image src={userImg} alt='user profile' className='w-12 h-12 rounded-[50%]' />
                            <p className='text-[#17181B] text-[18px] font-[500]'>Amira Ali</p>
                        </div>
                        <a href='' className='flex items-center justify-center w-12 h-12 rounded-[50%] bg-[#E2F7E5]'>
                            <IoLogoWhatsapp className='text-[24px] text-[#47C756]' />
                        </a>
                    </div>
                    <ul className='flex flex-col gap-4 w-full mb-8'>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>sector</span><span className='text-[16px] text-[#000] font-[600]'>20</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Palm trees</span><span className='text-[16px] text-[#000] font-[600]'>1000</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Asking price</span><span className='text-[16px] text-[#000] font-[600]'>4,500</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Company evaluation</span><span className='text-[16px] text-[#000] font-[600]'>9,500</span></li>
                    </ul>
                    <div className='grid grid-cols-2 gap-6'>
                        <Button variant='destructive' className='w-full h-12'>Refuse</Button>
                        <Button className='w-full h-12'>Accept</Button>
                    </div>
                </div>

                <div className='px-4 py-6 lg:px-6 lg:py-8  rounded-[20px] bg-[#fff] w-full'>
                    <p className='text-[14px] font-[500] text-black text-center mb-4'>22/4/2023</p>
                    <h6 className='text-[26px] text-[#009444] text-center font-[600] mb-8'>Agricultural land</h6>
                    <div className='flex items-center justify-between mb-8'>
                        <div className='flex items-center gap-2'>
                            <Image src={userImg} alt='user profile' className='w-12 h-12 rounded-[50%]' />
                            <p className='text-[#17181B] text-[18px] font-[500]'>Amira Ali</p>
                        </div>
                        <a href='' className='flex items-center justify-center w-12 h-12 rounded-[50%] bg-[#E2F7E5]'>
                            <IoLogoWhatsapp className='text-[24px] text-[#47C756]' />
                        </a>
                    </div>
                    <ul className='flex flex-col gap-4 w-full mb-8'>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>sector</span><span className='text-[16px] text-[#000] font-[600]'>20</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Palm trees</span><span className='text-[16px] text-[#000] font-[600]'>1000</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Asking price</span><span className='text-[16px] text-[#000] font-[600]'>4,500</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Company evaluation</span><span className='text-[16px] text-[#000] font-[600]'>9,500</span></li>
                    </ul>
                    <div className='grid grid-cols-2 gap-6'>
                        <Button variant='destructive' className='w-full h-12'>Refuse</Button>
                        <Button className='w-full h-12'>Accept</Button>
                    </div>
                </div>

                <div className='px-4 py-6 lg:px-6 lg:py-8  rounded-[20px] bg-[#fff] w-full'>
                    <p className='text-[14px] font-[500] text-black text-center mb-4'>22/4/2023</p>
                    <h6 className='text-[26px] text-[#009444] text-center font-[600] mb-8'>Agricultural land</h6>
                    <div className='flex items-center justify-between mb-8'>
                        <div className='flex items-center gap-2'>
                            <Image src={userImg} alt='user profile' className='w-12 h-12 rounded-[50%]' />
                            <p className='text-[#17181B] text-[18px] font-[500]'>Amira Ali</p>
                        </div>
                        <a href='' className='flex items-center justify-center w-12 h-12 rounded-[50%] bg-[#E2F7E5]'>
                            <IoLogoWhatsapp className='text-[24px] text-[#47C756]' />
                        </a>
                    </div>
                    <ul className='flex flex-col gap-4 w-full mb-8'>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>sector</span><span className='text-[16px] text-[#000] font-[600]'>20</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Palm trees</span><span className='text-[16px] text-[#000] font-[600]'>1000</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Asking price</span><span className='text-[16px] text-[#000] font-[600]'>4,500</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Company evaluation</span><span className='text-[16px] text-[#000] font-[600]'>9,500</span></li>
                    </ul>
                    <div className='grid grid-cols-2 gap-6'>
                        <Button variant='destructive' className='w-full h-12'>Refuse</Button>
                        <Button className='w-full h-12'>Accept</Button>
                    </div>
                </div>

                <div className='px-4 py-6 lg:px-6 lg:py-8  rounded-[20px] bg-[#fff] w-full'>
                    <p className='text-[14px] font-[500] text-black text-center mb-4'>22/4/2023</p>
                    <h6 className='text-[26px] text-[#009444] text-center font-[600] mb-8'>Agricultural land</h6>
                    <div className='flex items-center justify-between mb-8'>
                        <div className='flex items-center gap-2'>
                            <Image src={userImg} alt='user profile' className='w-12 h-12 rounded-[50%]' />
                            <p className='text-[#17181B] text-[18px] font-[500]'>Amira Ali</p>
                        </div>
                        <a href='' className='flex items-center justify-center w-12 h-12 rounded-[50%] bg-[#E2F7E5]'>
                            <IoLogoWhatsapp className='text-[24px] text-[#47C756]' />
                        </a>
                    </div>
                    <ul className='flex flex-col gap-4 w-full mb-8'>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>sector</span><span className='text-[16px] text-[#000] font-[600]'>20</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Palm trees</span><span className='text-[16px] text-[#000] font-[600]'>1000</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Asking price</span><span className='text-[16px] text-[#000] font-[600]'>4,500</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Company evaluation</span><span className='text-[16px] text-[#000] font-[600]'>9,500</span></li>
                    </ul>
                    <div className='grid grid-cols-2 gap-6'>
                        <Button variant='destructive' className='w-full h-12'>Refuse</Button>
                        <Button className='w-full h-12'>Accept</Button>
                    </div>
                </div>
                <div className='px-4 py-6 lg:px-6 lg:py-8  rounded-[20px] bg-[#fff] w-full'>
                    <p className='text-[14px] font-[500] text-black text-center mb-4'>22/4/2023</p>
                    <h6 className='text-[26px] text-[#009444] text-center font-[600] mb-8'>Agricultural land</h6>
                    <div className='flex items-center justify-between mb-8'>
                        <div className='flex items-center gap-2'>
                            <Image src={userImg} alt='user profile' className='w-12 h-12 rounded-[50%]' />
                            <p className='text-[#17181B] text-[18px] font-[500]'>Amira Ali</p>
                        </div>
                        <a href='' className='flex items-center justify-center w-12 h-12 rounded-[50%] bg-[#E2F7E5]'>
                            <IoLogoWhatsapp className='text-[24px] text-[#47C756]' />
                        </a>
                    </div>
                    <ul className='flex flex-col gap-4 w-full mb-8'>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>sector</span><span className='text-[16px] text-[#000] font-[600]'>20</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Palm trees</span><span className='text-[16px] text-[#000] font-[600]'>1000</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Asking price</span><span className='text-[16px] text-[#000] font-[600]'>4,500</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Company evaluation</span><span className='text-[16px] text-[#000] font-[600]'>9,500</span></li>
                    </ul>
                    <div className='grid grid-cols-2 gap-6'>
                        <Button variant='destructive' className='w-full h-12'>Refuse</Button>
                        <Button className='w-full h-12'>Accept</Button>
                    </div>
                </div>
                <div className='px-4 py-6 lg:px-6 lg:py-8  rounded-[20px] bg-[#fff] w-full'>
                    <p className='text-[14px] font-[500] text-black text-center mb-4'>22/4/2023</p>
                    <h6 className='text-[26px] text-[#009444] text-center font-[600] mb-8'>Agricultural land</h6>
                    <div className='flex items-center justify-between mb-8'>
                        <div className='flex items-center gap-2'>
                            <Image src={userImg} alt='user profile' className='w-12 h-12 rounded-[50%]' />
                            <p className='text-[#17181B] text-[18px] font-[500]'>Amira Ali</p>
                        </div>
                        <a href='' className='flex items-center justify-center w-12 h-12 rounded-[50%] bg-[#E2F7E5]'>
                            <IoLogoWhatsapp className='text-[24px] text-[#47C756]' />
                        </a>
                    </div>
                    <ul className='flex flex-col gap-4 w-full mb-8'>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>sector</span><span className='text-[16px] text-[#000] font-[600]'>20</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Palm trees</span><span className='text-[16px] text-[#000] font-[600]'>1000</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Asking price</span><span className='text-[16px] text-[#000] font-[600]'>4,500</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Company evaluation</span><span className='text-[16px] text-[#000] font-[600]'>9,500</span></li>
                    </ul>
                    <div className='grid grid-cols-2 gap-6'>
                        <Button variant='destructive' className='w-full h-12'>Refuse</Button>
                        <Button className='w-full h-12'>Accept</Button>
                    </div>
                </div>

                <div className='col-span-3'>
                    <Pagination currentPage={First} totalPages={3} onPageChange={(t) => setFirst(t)} />
                </div>


            </div>
        </>
    )
}

export default RenderPurchaseRequests