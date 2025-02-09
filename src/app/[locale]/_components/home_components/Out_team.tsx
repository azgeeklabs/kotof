"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick';
import ourTeamImg from '@/media/our team img1.png'

interface ITeam {
  id?: number,
  name?: string,
  title?: string,
  content?: string,
  image?: string,
  created_at: string
}


const Out_team = () => {

  // const { direction } = useDirection();


  const sliderRef2 = useRef<Slider | null>(null);
  const next2 = () => {
    sliderRef2.current?.slickNext();
  };
  const previous2 = () => {
    sliderRef2.current?.slickPrev();
  };

  const [data, setData] = useState<ITeam[] | undefined>();

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('https://test.jiovanilibya.org/api/user/teams');
              const result = await response.json();
              setData(result.data);
              console.log(result.data[0]);

          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []); // Empty dependency array ensures this runs only once after the component mounts



  const settings2 = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };

  return (
    <div className='py-16 mb-20 md:mb-32 bg-[#F7FAF1]'>
      <div className="relative mx-auto max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className='text-center mb-12'>
          <h6 data-aos="fade-up" data-aos-duration="500" data-aos-delay="0" className='text-[#009444] font-bold text-[16px]'>Our Team</h6>
          <h2 data-aos="fade-zoom-in" data-aos-duration="500" data-aos-delay="0" className='text-[26px] md:text-[40px] text-[#252525] font-[500]'>&quot;Explore, Invest, and Unlock <br /> New Opportunities&quot;</h2>
        </div>

        <Slider ref={sliderRef2} {...settings2} className='ourteam-slider'>
          {data && data.map(data => <div key={data.id}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <Image src={ourTeamImg} alt='our team' className='rounded-[8px]' />
              <div className='flex flex-col justify-between'>
                <div>
                  <p className='text-[20px] md:text-[24px] font-[400] text-[#363636] mb-8 line-clamp-[9]'>{data? data?.content : "" }</p>
                  <h6 className='text-[32px] font-[500] text-[#252525] mb-4'>{data? data?.name : "" }</h6>
                  <span className='text-[#656565] text-[20px] font-[400]'>{data? data?.title : "" }</span>
                </div>

                <div className='flex items-center justify-between'>
                  <span>{data ? (new Date(data.created_at as string).getMonth() + 1).toString().padStart(2, '0') : ""} / {data ? new Date(data.created_at as string).getFullYear():""}</span>
                </div>
              </div>
            </div>
          </div>)}
        </Slider>

        <div className='flex gap-2 absolute bottom-0 right-0'>
          <span className='rtl:rotate-180 w-12 h-12 bg-[#E5EDD3]  flex justify-center items-center' onClick={previous2}>
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 2L1.5 8L7.5 14" stroke="#949494" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className='rtl:rotate-180 w-12 h-12 bg-[#E5EDD3] flex justify-center items-center' onClick={next2}>
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 14L7.5 8L1.5 2" stroke="#536728" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Out_team