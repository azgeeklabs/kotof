import PriceInput from '@/app/_components/amountInput/AmountInput';
import Button from '@/app/_components/button/Button';
import Modal from '@/app/_components/modal/Modal';
import Pagination from '@/app/_components/pagination/Pagination';
import React, { useState } from 'react'


const RenderCurrentlyOwned = () => {
    const [First, setFirst] = useState<number>(1);
    const [isOpen, setIsOpen] = useState<boolean>(false);


    return (
        <>
            <div className='flex flex-col lg:grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='px-4 py-6 lg:px-6 lg:py-8  rounded-[20px] bg-[#fff] w-full'>
                    <p className='text-[14px] font-[500] text-black text-center mb-4'>22/4/2023</p>
                    <h6 className='text-[26px] text-[#009444] text-center font-[600] mb-8'>Agricultural land</h6>
                    <ul className='flex flex-col gap-4 w-full mb-8'>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>sector</span><span className='text-[16px] text-[#000] font-[600]'>20</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Palm trees</span><span className='text-[16px] text-[#000] font-[600]'>1000</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Asking price</span><span className='text-[16px] text-[#000] font-[600]'>4,500</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Company evaluation</span><span className='text-[16px] text-[#000] font-[600]'>9,500</span></li>
                    </ul>
                    <div className='w-full flex justify-center'>
                        <Button className='w-28 h-12' onClick={() => { setIsOpen(true) }}>Accept</Button>
                    </div>
                </div>

                <div className='px-4 py-6 lg:px-6 lg:py-8  rounded-[20px] bg-[#fff] w-full'>
                    <p className='text-[14px] font-[500] text-black text-center mb-4'>22/4/2023</p>
                    <h6 className='text-[26px] text-[#009444] text-center font-[600] mb-8'>Agricultural land</h6>
                    <ul className='flex flex-col gap-4 w-full mb-8'>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>sector</span><span className='text-[16px] text-[#000] font-[600]'>20</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Palm trees</span><span className='text-[16px] text-[#000] font-[600]'>1000</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Asking price</span><span className='text-[16px] text-[#000] font-[600]'>4,500</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Company evaluation</span><span className='text-[16px] text-[#000] font-[600]'>9,500</span></li>
                    </ul>
                    <div className='w-full flex justify-center'>
                        <Button className='w-28 h-12' onClick={() => { setIsOpen(true) }}>Accept</Button>
                    </div>
                </div>

                <div className='px-4 py-6 lg:px-6 lg:py-8  rounded-[20px] bg-[#fff] w-full'>
                    <p className='text-[14px] font-[500] text-black text-center mb-4'>22/4/2023</p>
                    <h6 className='text-[26px] text-[#009444] text-center font-[600] mb-8'>Agricultural land</h6>
                    <ul className='flex flex-col gap-4 w-full mb-8'>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>sector</span><span className='text-[16px] text-[#000] font-[600]'>20</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Palm trees</span><span className='text-[16px] text-[#000] font-[600]'>1000</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Asking price</span><span className='text-[16px] text-[#000] font-[600]'>4,500</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Company evaluation</span><span className='text-[16px] text-[#000] font-[600]'>9,500</span></li>
                    </ul>
                    <div className='w-full flex justify-center'>
                        <Button className='w-28 h-12' onClick={() => { setIsOpen(true) }}>Accept</Button>
                    </div>
                </div>

                <div className='px-4 py-6 lg:px-6 lg:py-8  rounded-[20px] bg-[#fff] w-full'>
                    <p className='text-[14px] font-[500] text-black text-center mb-4'>22/4/2023</p>
                    <h6 className='text-[26px] text-[#009444] text-center font-[600] mb-8'>Agricultural land</h6>
                    <ul className='flex flex-col gap-4 w-full mb-8'>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>sector</span><span className='text-[16px] text-[#000] font-[600]'>20</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Palm trees</span><span className='text-[16px] text-[#000] font-[600]'>1000</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Asking price</span><span className='text-[16px] text-[#000] font-[600]'>4,500</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Company evaluation</span><span className='text-[16px] text-[#000] font-[600]'>9,500</span></li>
                    </ul>
                    <div className='w-full flex justify-center'>
                        <Button className='w-28 h-12' onClick={() => { setIsOpen(true) }}>Accept</Button>
                    </div>
                </div>

                <div className='px-4 py-6 lg:px-6 lg:py-8  rounded-[20px] bg-[#fff] w-full'>
                    <p className='text-[14px] font-[500] text-black text-center mb-4'>22/4/2023</p>
                    <h6 className='text-[26px] text-[#009444] text-center font-[600] mb-8'>Agricultural land</h6>
                    <ul className='flex flex-col gap-4 w-full mb-8'>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>sector</span><span className='text-[16px] text-[#000] font-[600]'>20</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Palm trees</span><span className='text-[16px] text-[#000] font-[600]'>1000</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Asking price</span><span className='text-[16px] text-[#000] font-[600]'>4,500</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Company evaluation</span><span className='text-[16px] text-[#000] font-[600]'>9,500</span></li>
                    </ul>
                    <div className='w-full flex justify-center'>
                        <Button className='w-28 h-12' onClick={() => { setIsOpen(true) }}>Accept</Button>
                    </div>
                </div>

                <div className='px-4 py-6 lg:px-6 lg:py-8  rounded-[20px] bg-[#fff] w-full'>
                    <p className='text-[14px] font-[500] text-black text-center mb-4'>22/4/2023</p>
                    <h6 className='text-[26px] text-[#009444] text-center font-[600] mb-8'>Agricultural land</h6>
                    <ul className='flex flex-col gap-4 w-full mb-8'>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>sector</span><span className='text-[16px] text-[#000] font-[600]'>20</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Palm trees</span><span className='text-[16px] text-[#000] font-[600]'>1000</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Asking price</span><span className='text-[16px] text-[#000] font-[600]'>4,500</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Company evaluation</span><span className='text-[16px] text-[#000] font-[600]'>9,500</span></li>
                    </ul>
                    <div className='w-full flex justify-center'>
                        <Button className='w-28 h-12' onClick={() => { setIsOpen(true) }}>Accept</Button>
                    </div>
                </div>

                <div className='col-span-3'>
                    <Pagination currentPage={First} totalPages={3} onPageChange={(t) => setFirst(t)} />
                </div>
            </div>

            <Modal isOpen={isOpen} onClose={() => { setIsOpen(false) }} title='Offer Submission Details' className='max-w-lg p-8'>
                <div className='space-y-6 pb-8 mb-8 border-b border-[#F1F1F1]' >
                    <div className='space-y-1'>
                        <label htmlFor="email" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Number Shares</label>
                        <PriceInput />
                    </div>
                    <div className='space-y-1'>
                        <label htmlFor="username" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Asking Price</label>
                        <PriceInput currency='EGP' />
                    </div>
                </div>

                <div className='w-full flex justify-end gap-4'>
                    <Button variant='ghost' className='w-28 h-12 border border-[#E4E6EA] rounded-[8px] text-[#32363D]' onClick={() => { setIsOpen(false) }}>Cancel</Button>
                    <Button className='w-28 h-12' onClick={() => { setIsOpen(true) }}>confirm</Button>
                </div>
            </Modal>
        </>
    )
}

export default RenderCurrentlyOwned