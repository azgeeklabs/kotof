"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import ProjectImg from "@/media/project_img.png";
import Link from 'next/link';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import PriceInput from '../amountInput/AmountInput';


interface AppProps {
  defaultPrice?: number;
}

const SectorCard = ({ defaultPrice }: AppProps) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlePriceChange = (value: number): void => {
    console.log('Price value:', value);
  };

  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="relative h-96 mb-4">
          <Image className="w-full h-full rounded-lg object-cover" src={ProjectImg} alt="Card image" />
        </div>
        <div className="py-3">
          <h2 className="text-[28px] font-[500] mb-3 text-[#121212]">Bringing food production back</h2>
          <p className="text-[#525252] text-[20px] mb-4 line-clamp-3">Vivamus accumsan diam eget ultricies auctor. Proin iaculis metus.</p>
          <ul className='grid grid-cols-2 mb-8'>
            <li className='flex items-center gap-2'>
              <span className='text-[#656565] text-[18px]'>number of acres:</span>
              <span className='text-[#121212] text-[18px] font-[500]'>120 Acre</span>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-[#656565] text-[18px]'>number of acres:</span>
              <span className='text-[#121212] text-[18px] font-[500]'>120 Acre</span>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-[#656565] text-[18px]'>number of acres:</span>
              <span className='text-[#121212] text-[18px] font-[500]'>120 Acre</span>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-[#656565] text-[18px]'>number of acres:</span>
              <span className='text-[#121212] text-[18px] font-[500]'>120 Acre</span>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-[#656565] text-[18px]'>number of acres:</span>
              <span className='text-[#121212] text-[18px] font-[500]'>120 Acre</span>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-[#656565] text-[18px]'>number of acres:</span>
              <span className='text-[#121212] text-[18px] font-[500]'>120 Acre</span>
            </li>
          </ul>
          <div className='flex items-center justify-between'>
            <Link href={"/sectors"} className='flex items-start w-fit gap-2 hover:gap-4 transition-all duration-300 leading-[27px] text-[18px] text-[#009444]'>
              SHOW SECTORS <svg width="14" height="27" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.19531 1.37341L5.82422 0.771851C5.95182 0.644246 6.10677 0.580444 6.28906 0.580444C6.47135 0.580444 6.6263 0.644246 6.75391 0.771851L12.0586 6.07654C12.1862 6.20414 12.25 6.35909 12.25 6.54138C12.25 6.72367 12.1862 6.87862 12.0586 7.00623L6.75391 12.3109C6.6263 12.4385 6.47135 12.5023 6.28906 12.5023C6.10677 12.5023 5.95182 12.4385 5.82422 12.3109L5.19531 11.7094C5.06771 11.5817 5.00391 11.4268 5.00391 11.2445C5.02214 11.0622 5.09505 10.9073 5.22266 10.7797L8.50391 7.63513H0.65625C0.473958 7.63513 0.31901 7.57133 0.191406 7.44373C0.0638021 7.31612 0 7.16117 0 6.97888V6.10388C0 5.92159 0.0638021 5.76664 0.191406 5.63904C0.31901 5.51143 0.473958 5.44763 0.65625 5.44763H8.50391L5.22266 2.3031C5.09505 2.1755 5.02214 2.02055 5.00391 1.83826C5.00391 1.65597 5.06771 1.50102 5.19531 1.37341Z" fill="#009444" />
              </svg>
            </Link>
            <Button onClick={() => { setIsOpen(true) }}>Buy Now</Button>
          </div>

        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => { setIsOpen(false) }} title='Submitting an offer'>

        <ul className='space-y-2 list-disc mx-8 mb-8'>
          <li className='text-[18px] text-[#525252] font-[400]'>You must be a member of the Qutoof community.  </li>
          <li className='text-[18px] text-[#525252] font-[400]'>A 1% fee is deducted from the total amount as a purchase fee.  </li>
          <li className='text-[18px] text-[#525252] font-[400]'>Approval from the seller and then the company is required, the company&apos;s approval process takes two business days. </li>
        </ul>

        <div className='mx-auto w-full lg:w-1/2 p-4 bg-gradient-to-b from-[#F4F8ED00] to-[#F4F8ED] rounded-[8px] border border-[#E5EDD3] mb-8 space-y-4'>
          <PriceInput
            maxValue={100000000}
            minValue={0}
            onChange={handlePriceChange}
            initialValue={defaultPrice?.toString()}
            placeholder="Enter amount"
            label='I present an offer'
            currency='EGP'
          />
          <PriceInput
            maxValue={100000000}
            minValue={0}
            onChange={handlePriceChange}
            initialValue={defaultPrice?.toString()}
            placeholder="Enter amount"
            label='Number of shares'
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
          <Button variant='secondary' onClick={() => { setIsOpen(false) }}>Cancel</Button>
          <Button>Send Offer</Button>
        </div>
      </Modal>
    </>
  )
}

export default SectorCard