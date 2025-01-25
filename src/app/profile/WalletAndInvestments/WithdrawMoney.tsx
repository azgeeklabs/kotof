import Button from '@/app/_components/button/Button'
import React from 'react'

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

export default RenderwithdrawMoney