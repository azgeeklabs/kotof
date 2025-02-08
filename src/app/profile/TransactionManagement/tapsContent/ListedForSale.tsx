"use client"
import Pagination from '@/app/_components/pagination/Pagination'
import React, { useEffect, useState } from 'react'


interface IProject {
  id: number,
  number_of_shares: number,
  share_price: number,
  company_evaluation: number,
  status_id: number,
  status: string,
  type: string,
  type_flag: string,
  participants: number,
  total_price: number,
  sector: {
    id: number,
    title: string,
    description: string,
    number_of_acres: number,
    available_shares: number,
    land_area: number,
    offered_by_company: number,
    pdf: string,
    company_rate: number,
    launch_start: string,
    construction_start: string,
    construction_end: string,
    production_start: string,
    media: string[],
  },
  user: {
    id: number,
    image: string,
    username: string,
    whatsapp_number: string,
    country_code: string,
    phone: string
  },
  created_at: string

}

const RenderListedForSale = () => {

  const [data, setData] = useState<IProject[]>();
  const [totalPages, setTotalPages] = useState<number>();
  const [CurrentPage, setCurrentPage] = useState<number>(1)


  useEffect(() => {
    const fetchData = async () => {
      const token = typeof window !== 'undefined' && localStorage.getItem('token');

      const myHeaders = new Headers();
      myHeaders.append("accept", "application/json");
      myHeaders.append("Authorization", `Bearer ${token ? JSON.parse(token) : ''}`);
      try {
        const response = await fetch('https://test.jiovanilibya.org/api/user/sectors/list-for-sale',{
          headers: myHeaders,
      });
        const result = await response.json();
        setData(result.data);
        console.log(result.data);
        
        setTotalPages(result?.pages)
        setCurrentPage(result?.current_page)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },[]); // Empty dependency array ensures this runs only once after the component mounts

  
  return (
    <>
      <div className='flex flex-col lg:grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {data?.map(ele => <div key={ele.id} className='px-4 py-6 lg:px-6 lg:py-8  rounded-[20px] bg-[#fff] w-full'>
          <p className='text-[14px] font-[500] text-black text-center mb-4'>{ele.created_at.split(" ")[0]}</p>
          <h6 className='text-[26px] text-[#009444] text-center font-[600] mb-8'>{ele.sector.title}</h6>
          <ul className='flex flex-col gap-4 w-full'>
            <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>sector</span><span className='text-[16px] text-[#000] font-[600]'>{ele.sector.id}</span></li>
            <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Asking price</span><span className='text-[16px] text-[#000] font-[600]'>{ele.total_price}</span></li>
            <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Company evaluation</span><span className='text-[16px] text-[#000] font-[600]'>{ele.company_evaluation}</span></li>
          </ul>
        </div>)}


        <div className='col-span-3'>
          <Pagination currentPage={CurrentPage} totalPages={totalPages ? totalPages : 1} onPageChange={(t) => setCurrentPage(t)} />
        </div>


      </div>
    </>
  )
}

export default RenderListedForSale