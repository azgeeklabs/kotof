"use client"
import Image from 'next/image';
import React, { useRef } from 'react'
import Slider from 'react-slick';
import ourClientImg from '@/media/our clients img1.png'

const Our_client = () => {

    const sliderRef1 = useRef<Slider | null>(null);
    const next1 = () => {
      sliderRef1.current?.slickNext();
    };
    const previous1 = () => {
      sliderRef1.current?.slickPrev();
    };
  
  
    const settings1 = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: "50px",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ],
    };

  return (
    
    <div className="mx-auto max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mb-20 md:mb-32">
    <div className='text-center mb-12'>
      <h6 data-aos="fade-up" data-aos-duration="500" data-aos-delay="0" className='text-[#009444] font-bold text-[16px]'>Our clients</h6>
      <h2 data-aos="fade-zoom-in" data-aos-duration="500" data-aos-delay="0" className='text-[26px] md:text-[40px] text-[#252525] font-[500]'>&quot;Explore, Invest, and Unlock <br /> New Opportunities&quot;</h2>
    </div>

    <div className=''>
      <Slider ref={sliderRef1} {...settings1}>
        <div className='relative rounded-[8px] overflow-hidden'>
          <Image src={ourClientImg} alt='our clients' className='w-full' />
          <span className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center w-20 h-20 border-[5px] border-[#fff] rounded-[50%]'>
            <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26 15L0.499999 29.7224L0.5 0.277567L26 15Z" fill="white" />
            </svg>
          </span>
          <div className='absolute z-8 top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000] to-[#D9D9D900] p-8 flex flex-col justify-end items-start'>
            <h5 className='text-[22px] text-[#fff] font-[800]'>Kevin Smith</h5>
            <span className='text-[18px] text-[#CFCFCF] font-[600]'>Client</span>
          </div>
        </div>
        <div className='relative rounded-[8px] overflow-hidden'>
          <Image src={ourClientImg} alt='our clients' className='w-full' />
          <span className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center w-20 h-20 border-[5px] border-[#fff] rounded-[50%]'>
            <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26 15L0.499999 29.7224L0.5 0.277567L26 15Z" fill="white" />
            </svg>
          </span>
          <div className='absolute z-8 top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000] to-[#D9D9D900] p-8 flex flex-col justify-end items-start'>
            <h5 className='text-[22px] text-[#fff] font-[800]'>Kevin Smith</h5>
            <span className='text-[18px] text-[#CFCFCF] font-[600]'>Client</span>
          </div>
        </div>
        <div className='relative rounded-[8px] overflow-hidden'>
          <Image src={ourClientImg} alt='our clients' className='w-full' />
          <span className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center w-20 h-20 border-[5px] border-[#fff] rounded-[50%]'>
            <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26 15L0.499999 29.7224L0.5 0.277567L26 15Z" fill="white" />
            </svg>
          </span>
          <div className='absolute z-8 top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000] to-[#D9D9D900] p-8 flex flex-col justify-end items-start'>
            <h5 className='text-[22px] text-[#fff] font-[800]'>Kevin Smith</h5>
            <span className='text-[18px] text-[#CFCFCF] font-[600]'>Client</span>
          </div>
        </div>
        <div className='relative rounded-[8px] overflow-hidden'>
          <Image src={ourClientImg} alt='our clients' className='w-full' />
          <span className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center w-20 h-20 border-[5px] border-[#fff] rounded-[50%]'>
            <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26 15L0.499999 29.7224L0.5 0.277567L26 15Z" fill="white" />
            </svg>
          </span>
          <div className='absolute z-8 top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000] to-[#D9D9D900] p-8 flex flex-col justify-end items-start'>
            <h5 className='text-[22px] text-[#fff] font-[800]'>Kevin Smith</h5>
            <span className='text-[18px] text-[#CFCFCF] font-[600]'>Client</span>
          </div>
        </div>
        <div className='relative rounded-[8px] overflow-hidden'>
          <Image src={ourClientImg} alt='our clients' className='w-full' />
          <span className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center w-20 h-20 border-[5px] border-[#fff] rounded-[50%]'>
            <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26 15L0.499999 29.7224L0.5 0.277567L26 15Z" fill="white" />
            </svg>
          </span>
          <div className='absolute z-8 top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000] to-[#D9D9D900] p-8 flex flex-col justify-end items-start'>
            <h5 className='text-[22px] text-[#fff] font-[800]'>Kevin Smith</h5>
            <span className='text-[18px] text-[#CFCFCF] font-[600]'>Client</span>
          </div>
        </div>
        <div className='relative rounded-[8px] overflow-hidden'>
          <Image src={ourClientImg} alt='our clients' className='w-full' />
          <span className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center w-20 h-20 border-[5px] border-[#fff] rounded-[50%]'>
            <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26 15L0.499999 29.7224L0.5 0.277567L26 15Z" fill="white" />
            </svg>
          </span>
          <div className='absolute z-8 top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000] to-[#D9D9D900] p-8 flex flex-col justify-end items-start'>
            <h5 className='text-[22px] text-[#fff] font-[800]'>Kevin Smith</h5>
            <span className='text-[18px] text-[#CFCFCF] font-[600]'>Client</span>
          </div>
        </div>
      </Slider>
      <div className='w-full flex justify-center items-center gap-2 py-6'>

        <div
          className={`w-10 h-10  flex justify-center items-center border-2 border-[#536728] cursor-pointer`}
          onClick={previous1}
        >
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 2L1.5 8L7.5 14" stroke={"#536728"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </div><div
          className={`w-10 h-10 flex justify-center items-center border-2 border-[#536728] cursor-pointer`}
          onClick={next1}
        >
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 14L7.5 8L1.5 2" stroke={"#536728"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default Our_client