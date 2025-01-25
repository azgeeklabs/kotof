import Pagination from '@/app/_components/pagination/Pagination'
import React, { useState } from 'react'

const RenderAwaitingApproval = () => {
    const [First, setFirst] = useState<number>(1)

    return (
        <>
            <div className='flex flex-col lg:grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='px-4 py-6 lg:px-6 lg:py-8  rounded-[20px] bg-[#fff] w-full'>
                    <p className='text-[14px] font-[500] text-black text-center mb-4'>22/4/2023</p>
                    <h6 className='text-[26px] text-[#009444] text-center font-[600] mb-8'>Agricultural land</h6>
                    <div className='flex items-center justify-between pb-8 mb-8 border-b border-[#F1F1F1]'>
                        <p className='text-[18px] text-[#17181B] font-[500]'>Sale Transaction</p>
                        <span className='text-[12px] text-[#FF8600] font-[400] px-2 py-1 bg-[#FF860014] rounded-[5px]'>Pending</span>
                    </div>
                    <ul className='flex flex-col gap-4 w-full'>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>sector</span><span className='text-[16px] text-[#000] font-[600]'>20</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Palm trees</span><span className='text-[16px] text-[#000] font-[600]'>1000</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Asking price</span><span className='text-[16px] text-[#000] font-[600]'>4,500</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Company evaluation</span><span className='text-[16px] text-[#000] font-[600]'>9,500</span></li>
                    </ul>
                </div>
                
                <div className='px-4 py-6 lg:px-6 lg:py-8  rounded-[20px] bg-[#fff] w-full'>
                    <p className='text-[14px] font-[500] text-black text-center mb-4'>22/4/2023</p>
                    <h6 className='text-[26px] text-[#009444] text-center font-[600] mb-8'>Agricultural land</h6>
                    <div className='flex items-center justify-between pb-8 mb-8 border-b border-[#F1F1F1]'>
                        <p className='text-[18px] text-[#17181B] font-[500]'>Sale Transaction</p>
                        <span className='text-[12px] text-[#FF8600] font-[400] px-2 py-1 bg-[#FF860014] rounded-[5px]'>Pending</span>
                    </div>
                    <ul className='flex flex-col gap-4 w-full'>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>sector</span><span className='text-[16px] text-[#000] font-[600]'>20</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Palm trees</span><span className='text-[16px] text-[#000] font-[600]'>1000</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Asking price</span><span className='text-[16px] text-[#000] font-[600]'>4,500</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Company evaluation</span><span className='text-[16px] text-[#000] font-[600]'>9,500</span></li>
                    </ul>
                </div>

                <div className='px-4 py-6 lg:px-6 lg:py-8  rounded-[20px] bg-[#fff] w-full'>
                    <p className='text-[14px] font-[500] text-black text-center mb-4'>22/4/2023</p>
                    <h6 className='text-[26px] text-[#009444] text-center font-[600] mb-8'>Agricultural land</h6>
                    <div className='flex items-center justify-between pb-8 mb-8 border-b border-[#F1F1F1]'>
                        <p className='text-[18px] text-[#17181B] font-[500]'>Sale Transaction</p>
                        <span className='text-[12px] text-[#FF8600] font-[400] px-2 py-1 bg-[#FF860014] rounded-[5px]'>Pending</span>
                    </div>
                    <ul className='flex flex-col gap-4 w-full'>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>sector</span><span className='text-[16px] text-[#000] font-[600]'>20</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Palm trees</span><span className='text-[16px] text-[#000] font-[600]'>1000</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Asking price</span><span className='text-[16px] text-[#000] font-[600]'>4,500</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Company evaluation</span><span className='text-[16px] text-[#000] font-[600]'>9,500</span></li>
                    </ul>
                </div>

                <div className='px-4 py-6 lg:px-6 lg:py-8  rounded-[20px] bg-[#fff] w-full'>
                    <p className='text-[14px] font-[500] text-black text-center mb-4'>22/4/2023</p>
                    <h6 className='text-[26px] text-[#009444] text-center font-[600] mb-8'>Agricultural land</h6>
                    <div className='flex items-center justify-between pb-8 mb-8 border-b border-[#F1F1F1]'>
                        <p className='text-[18px] text-[#17181B] font-[500]'>Sale Transaction</p>
                        <span className='text-[12px] text-[#FF8600] font-[400] px-2 py-1 bg-[#FF860014] rounded-[5px]'>Pending</span>
                    </div>
                    <ul className='flex flex-col gap-4 w-full'>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>sector</span><span className='text-[16px] text-[#000] font-[600]'>20</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Palm trees</span><span className='text-[16px] text-[#000] font-[600]'>1000</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Asking price</span><span className='text-[16px] text-[#000] font-[600]'>4,500</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Company evaluation</span><span className='text-[16px] text-[#000] font-[600]'>9,500</span></li>
                    </ul>
                </div>

                <div className='px-4 py-6 lg:px-6 lg:py-8  rounded-[20px] bg-[#fff] w-full'>
                    <p className='text-[14px] font-[500] text-black text-center mb-4'>22/4/2023</p>
                    <h6 className='text-[26px] text-[#009444] text-center font-[600] mb-8'>Agricultural land</h6>
                    <div className='flex items-center justify-between pb-8 mb-8 border-b border-[#F1F1F1]'>
                        <p className='text-[18px] text-[#17181B] font-[500]'>Sale Transaction</p>
                        <span className='text-[12px] text-[#FF8600] font-[400] px-2 py-1 bg-[#FF860014] rounded-[5px]'>Pending</span>
                    </div>
                    <ul className='flex flex-col gap-4 w-full'>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>sector</span><span className='text-[16px] text-[#000] font-[600]'>20</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Palm trees</span><span className='text-[16px] text-[#000] font-[600]'>1000</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Asking price</span><span className='text-[16px] text-[#000] font-[600]'>4,500</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Company evaluation</span><span className='text-[16px] text-[#000] font-[600]'>9,500</span></li>
                    </ul>
                </div>

                <div className='px-4 py-6 lg:px-6 lg:py-8  rounded-[20px] bg-[#fff] w-full'>
                    <p className='text-[14px] font-[500] text-black text-center mb-4'>22/4/2023</p>
                    <h6 className='text-[26px] text-[#009444] text-center font-[600] mb-8'>Agricultural land</h6>
                    <div className='flex items-center justify-between pb-8 mb-8 border-b border-[#F1F1F1]'>
                        <p className='text-[18px] text-[#17181B] font-[500]'>Sale Transaction</p>
                        <span className='text-[12px] text-[#FF8600] font-[400] px-2 py-1 bg-[#FF860014] rounded-[5px]'>Pending</span>
                    </div>
                    <ul className='flex flex-col gap-4 w-full'>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>sector</span><span className='text-[16px] text-[#000] font-[600]'>20</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Palm trees</span><span className='text-[16px] text-[#000] font-[600]'>1000</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Asking price</span><span className='text-[16px] text-[#000] font-[600]'>4,500</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Company evaluation</span><span className='text-[16px] text-[#000] font-[600]'>9,500</span></li>
                    </ul>
                </div>

                <div className='col-span-3'>
                    <Pagination currentPage={First} totalPages={3} onPageChange={(t) => setFirst(t)} />
                </div>


            </div>
        </>
    )
}


export default RenderAwaitingApproval