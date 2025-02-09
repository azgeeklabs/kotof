import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Button from '../button/Button';
import ProductCard from '../productCard/ProductCard';


interface IProject {
  id: number,
  number_of_shares: number,
  share_price: number,
  company_evaluation: number,
  status_id: number,
  status: string,
  type:string,
  type_flag: string,
  participants: number,
  total_price: number,
  sector: {
      id: 1,
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
      created_at: string
  },
  user: {
      id: number,
      image: string,
      username: string,
      whatsapp_number: string,
      country_code: string,
      phone: string
  },
  created_at: string,
}

const OurMarket = () => {

      const [data, setData] = useState<IProject[]>();

    
      const router = useRouter();
    
      useEffect(() => {
    
    
        const fetchData = async () => {
          try {
            const response = await fetch('https://test.jiovanilibya.org/api/user/market');
            const result = await response.json();
            setData(result.data);
    
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [router]); // Empty dependency array ensures this runs only once after the component mounts
  

  return (
    <div className="mx-auto max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mb-20 md:mb-32 flex flex-col items-center">
      <div className='text-center mb-12'>
        <h6 data-aos="fade-up" data-aos-duration="500" data-aos-delay="0" className='text-[#009444] font-bold text-[16px]'>Our Market</h6>
        <h2 data-aos="fade-zoom-in" data-aos-duration="500" data-aos-delay="0" className='text-[26px] md:text-[40px] text-[#252525] font-[500]'>&quot;Explore, Invest, and Unlock <br /> New Opportunities&quot;</h2>
      </div>

      <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="0" className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-6'>
        {data ? data.map(ProductInfo => <ProductCard key={ProductInfo.id}  ProductInfo={ProductInfo} />):<h3 className='col-span-3 text-[20px] text-center text-[#009444] font-[700]'>No records has been added yet.</h3>}
      </div>

      <Button className='px-8 mx-auto' onClick={() => router.push("/market")} >View All</Button>

    </div>
  )
}

export default OurMarket