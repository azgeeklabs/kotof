"use client"
import React, { useState } from 'react'
import Button from '../button/Button'
import userImg from "../../../media/user img.png";
import Image from 'next/image';
import Modal from '../modal/Modal';
import PriceInput from '../amountInput/AmountInput';
import { useRouter } from 'next/navigation';

interface AppProps {
    defaultPrice?: number;
}

const ProductCard = ({ defaultPrice }: AppProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handlePriceChange = (value: number): void => {
        console.log('Price value:', value);
    };

    const router = useRouter()

    return (
        <>
            <div className='relative px-6 pb-6 pt-10 rounded-[20px] bg-gradient-to-t from-[#F4F8ED] to-[#F4F8ED00] w-full mt-16'>
                <div className='bg-[#F4F8ED] rounded-[50%] w-24 h-24 flex items-center justify-center absolute top-[-3rem] left-2'>
                    <Image src={userImg} alt='user' width={50} height={50} />
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
                    <Button variant='outline' className='w-full' onClick={()=>router.push('/sectors/1')}>Show Details</Button>
                    <Button className='w-full' onClick={() => { setIsOpen(true) }}>Buy Now</Button>
                </div>
            </div>

            <Modal isOpen={isOpen} onClose={() => { setIsOpen(false) }} title='Submitting an offer'>

                <ul className='space-y-2 list-disc mx-8 mb-8'>
                    <li className='text-[18px] text-[#525252] font-[400]'>You must be a member of the Qutoof community.  </li>
                    <li className='text-[18px] text-[#525252] font-[400]'>A 1% fee is deducted from the total amount as a purchase fee.  </li>
                    <li className='text-[18px] text-[#525252] font-[400]'>Approval from the seller and then the company is required, the company&apos;s approval process takes two business days. </li>
                </ul>

                <div className='mx-auto w-full lg:w-1/2 p-4 bg-gradient-to-b from-[#F4F8ED00] to-[#F4F8ED] rounded-[8px] border border-[#E5EDD3] mb-8'>
                    <p className='text-center text-[14px] text-[#000] font-[500] mb-2'>22/4/2023</p>
                    <h6 className='text-center text-[26px] text-[#009444] font-[600] mb-6'>Agricultural land</h6>
                    <ul className='w-full space-y-2 mb-8'>
                        <li className='flex items-center justify-between'>
                            <span className='text-[16px] text-[#656565] font-[400]'>sector</span>
                            <span className='text-[16px] text-[#000000] font-[400]'>20</span>
                        </li>
                        <li className='flex items-center justify-between'>
                            <span className='text-[16px] text-[#656565] font-[400]'>Palm trees</span>
                            <span className='text-[16px] text-[#000000] font-[400]'>20</span>
                        </li>
                        <li className='flex items-center justify-between'>
                            <span className='text-[16px] text-[#656565] font-[400]'>Asking price</span>
                            <span className='text-[16px] text-[#000000] font-[400]'>20</span>
                        </li>
                    </ul>
                    <PriceInput
                        maxValue={100000000}
                        minValue={0}
                        onChange={handlePriceChange}
                        initialValue={defaultPrice?.toString()}
                        placeholder="Enter amount"
                        label='I present an offer'
                        currency='EGP'
                    />

                </div>
                <ul className='space-y-2 list-disc mx-8 mb-6'>
                    <li className='text-[18px] text-[#525252] font-[400]'>You must have 20% of the required amount in your wallet, or deposit the amount into your wallet.</li>
                    <li className='text-[18px] text-[#525252] font-[400]'>You have a grace period of 5 days to deposit the remaining 80%, either into your wallet or by transferring it to the offer owner, along with a copy of the transfer receipt.</li>
                    <li className='text-[18px] text-[#525252] font-[400]'>If there is a delay, we reserve the right to deduct 10% as compensation for the landowner, from which 2% will be deducted as fees.  </li>
                    <li className='text-[18px] text-[#525252] font-[400]'>You must contact the company as soon as possible or request to send the contracts by mail.</li>
                    <li className='text-[18px] text-[#525252] font-[400]'>Contracts will be issued in the name shown on the ID, and for heirs in the event of death, they have the right to request the contracts and transfer ownership via official legal documentation.</li>
                </ul>
                
                <div className='w-full flex justify-end items-center gap-4 px-2 pt-6 border-t border-[#F1F1F1]'>
                    <Button variant='secondary' onClick={()=>{setIsOpen(false)}}>Cancel</Button>
                    <Button>Send Offer</Button>
                </div>
            </Modal>
        </>

    )
}

export default ProductCard