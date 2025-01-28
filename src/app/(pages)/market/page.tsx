'use client'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '@/app/_components/breadcrumb/breadcrumb'
import Tabs from '@/app/_components/tabs/Tabs'
import ProductCard from '@/app/_components/productCard/ProductCard'
import Pagination from '@/app/_components/pagination/Pagination'
import { useRouter } from 'next/navigation'
// import withAuth from '@/app/withAuth'


interface IProject {
  id: number,
  number_of_shares: number,
  buying_price: number,
  status_id: number,
  status: string,
  type: string,
  participants: number,
  total_price: number,
  sector: {
    id: number,
    title: string,
    description: string,
    land_area: number,
    pdf: string,
    company_rate: number,
    launch_start: string,
    construction_start: string,
    construction_end: string,
    production_start: string,
    media: string[],
  },
  created_at: string

}

const RenderProducts = () => {

  const [data, setData] = useState<IProject[]>();
  const [totalPages, setTotalPages] = useState<number>();
  const [CurrentPage, setCurrentPage] = useState<number>(1)

  const router = useRouter();

  useEffect(() => {

    const token = typeof window !== 'undefined' && localStorage.getItem('token');

    // If the user is not authenticated, redirect to the login page
    if (!token) {
        router.push('/auth/signin');
    }


    const fetchData = async () => {
      try {
        const response = await fetch('https://test.jiovanilibya.org/api/user/market');
        const result = await response.json();
        setData(result.data);
        setTotalPages(result?.pages)
        setCurrentPage(result?.current_page)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [router]); // Empty dependency array ensures this runs only once after the component mounts


  return (
    <>
      <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="0" className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>

        {data && data.map(ProductInfo => <ProductCard key={ProductInfo.id} ProductInfo={ProductInfo} />)}

      </div>
      <Pagination currentPage={CurrentPage} totalPages={totalPages ? totalPages : 1} onPageChange={(t) => setCurrentPage(t)} />

    </>
  )
}

const MarketPage = () => {

  const tabs = [
    {
      id: 'tab1',
      label: 'All',
      content: RenderProducts
    },
    {
      id: 'tab3',
      label: 'from customers',
      content: RenderProducts
    },
    {
      id: 'tab4',
      label: 'from company',
      content: RenderProducts
    }
  ];

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Market', href: '/market' },
        ]}
      />

      <div className="mx-auto max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl my-20 md:my-32">
        <Tabs
          tabs={tabs}
          defaultTab="tab1"
          className="w-full"
        />

      </div>


    </>
  )
}

export default MarketPage