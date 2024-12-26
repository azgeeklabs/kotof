"use client"
import React, { useState } from 'react'
import Button from '../button/Button'
import userImg from "../../../media/user img.png";
import Image from 'next/image';
import Modal from '../modal/Modal';

const ProductCard = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
                <div className='relative px-6 pb-6 pt-10 rounded-[20px] bg-gradient-to-t from-[#F4F8ED] to-[#F4F8ED00] w-full mt-16'>
            <div className='bg-[#F4F8ED] rounded-[50%] w-24 h-24 flex items-center justify-center absolute top-[-3rem] left-2'>
                <Image src={userImg} alt='user'width={50} height={50} />
            </div>
            <p className='text-[14px] font-[500] text-black text-center mb-4'>22/4/2023</p>
            <h6 className='text-[26px] text-[#009444] text-center font-[600] mb-8'>Agricultural land</h6>
            <ul className='flex flex-col gap-4 w-full mb-8'>
                <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>sector</span><span className='text-[16px] text-[#000] font-[600]'>20</span></li>
                <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Palm trees</span><span className='text-[16px] text-[#000] font-[600]'>1000</span></li>
                <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Asking price</span><span className='text-[16px] text-[#000] font-[600]'>4,500</span></li>
                <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Company evaluation</span><span className='text-[16px] text-[#000] font-[600]'>9,500</span></li>
            </ul>
            <div className='grid grid-cols-2 gap-6'>
                <Button variant='outline' className='w-full'>Show Details</Button>
                <Button className='w-full' onClick={()=>{setIsOpen(true)}}>Buy Now</Button>
            </div>
        </div>

        <Modal isOpen={isOpen} onClose={()=>{setIsOpen(false)}} title='title'>
        <div>test</div>
      </Modal>
        </>

    )
}

export default ProductCard