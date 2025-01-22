'use client'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '@/app/_components/breadcrumb/breadcrumb'
import Pagination from '@/app/_components/pagination/Pagination'
import SectorCard from '@/app/_components/sectorCard/SectorCard'


interface ISector {
    id: number,
    title: string,
    description: string,
    land_area: number,
    company_shares: number,
    total_shares: number,
    share_price: number,
    total_shares_price: number,
    media:string[],
    project: {
      id: number,
      title: string,
      description: string,
      image: string,
      pdf: string,
      created_at: string
    }
    created_at: string
}


const SectorsPage = () => {

  const [data, setData] = useState<ISector[]>();
  const [totalPages, setTotalPages] = useState<number>();
  const [CurrentPage, setCurrentPage] = useState<number>(1)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://test.jiovanilibya.org/api/user/sectors');
        const result = await response.json();
        setData(result.data);
        setTotalPages(result?.pages)
        setCurrentPage(result?.current_page)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once after the component mounts


  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Sectors', href: '/sectors' },
        ]}
      />


      <div className="mx-auto max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl my-20 md:my-32">
        <div className='text-center mb-10'>
          <h6 data-aos="fade-up" data-aos-duration="500" data-aos-delay="0" className='text-[#009444] font-bold text-[16px]'>Our Blog</h6>
          <h2 data-aos="fade-zoom-in" data-aos-duration="500" data-aos-delay="0" className='text-[26px] md:text-[40px] text-[#252525] font-[500]'>Check our latest blog</h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          {data && data.map(SectorInfo => <SectorCard key={SectorInfo.id} SectorInfo={SectorInfo} />)}
        </div>
        <Pagination currentPage={CurrentPage} totalPages={totalPages ? totalPages : 1} onPageChange={(t) => setCurrentPage(t)} />


      </div>






    </>
  )
}

export default SectorsPage