'use client'
import styles from './home.module.css'
import Button from '../_components/button/Button'
import Image from 'next/image'
import contactUs from '@/media/contactUs-img.png'
import mainBlogImg from '@/media/our blog img 1.png'
import Link from 'next/link'
import BlogCard from '../_components/articleCard/BlogCard'
import ourValuesimg1 from '@/media/our values img1.png'
import ourValuesimg2 from '@/media/our values img2.png'
import ourValuesimg3 from '@/media/our values img3.png'
import ProductCard from '../_components/productCard/ProductCard'
import ourTeamImg from '@/media/our team img1.png'
import ourClientImg from '@/media/our clients img1.png'
import Slider from "react-slick";
import { useRef, useState } from 'react'
import VideoPlayer from '../_components/video/video'



const Home = () => {

  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "50px",
    afterChange: (index: number) => {
      // Update current slide after change
      checkIfFirstSlide(index);
      checkIfLastSlide(index);
    },
  };

  // Check if the current slide is the first slide
  const checkIfFirstSlide = (index: number) => {
    setIsFirstSlide(index === 0);
  };

  // Check if the current slide is the last slide
  const checkIfLastSlide = (index: number) => {
    if (sliderRef.current?.innerSlider?.list) {
      const totalSlides = sliderRef.current.innerSlider.list.querySelectorAll(".slick-slide").length;
      const slidesToScroll = settings.slidesToScroll;
      const totalPages = Math.ceil(totalSlides / slidesToScroll);
      const currentPage = Math.floor(index / slidesToScroll) + 3; // 1-based page number
      setIsLastSlide(currentPage === totalPages);
    }
  };


  return (
    <>

      <div className={styles.homeWrapper + " bg-black/40 bg-blend-overlay"}>
        <div className={styles.hero + ' flex flex-col gap-4 justify-center items-start h-full mx-auto max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl'}>
          <h1>From Our Fields<br /> to Your Table</h1>
          <p>Discover the beauty of eco-friendly farming and savor fresh,<br /> organic produce every day.</p>
          <Button>Discover more</Button>
        </div>
      </div>


      <div className={styles.contactUs + ' py-20 flex gap-8 items-center mx-auto max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl'}>
        <div className='w-full md:w-1/2'>
          <Image src={contactUs} alt='contact us' />
        </div>
        <div className='w-full md:w-1/2 flex flex-col gap-8'>
          <h6 className='text-[#009444] font-bold text-[16px] pl-4 border-l-[3px] border-[#E5EDD3]'>About Quttouf</h6>
          <h2 className='text-[40px] text-[#252525] font-bold pl-4'>Committed to <br />Sustainable Farming</h2>
          <p className='text-[18px] text-[#656565] leading-[30px] pl-4 border-l-[3px] border-[#E5EDD3]'>We are a company dedicated to sustainable agriculture, providing fresh, organic products directly from the farm to your table. Since our founding, we have been committed to offering the best agricultural solutions while preserving the environment and promoting sustainability. We believe that quality comes from nature, and we ensure that every product we deliver is a testament to excellence and care.</p>
        </div>
      </div>

      <div className="mx-auto max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mb-20">
        <div className='text-center mb-10'>
          <h6 className='text-[#009444] font-bold text-[16px]'>Our Blog</h6>
          <h2 className='text-[40px] text-[#252525] font-[500]'>Check our latest blog</h2>
        </div>

        <div className='flex items-stretch gap-8'>
          <div className="relative w-full lg:w-1/2">
            <Image src={mainBlogImg} alt='blog img' className='rounded-[8px] w-full' />
            <div className='flex flex-col justify-end gap-6 text-white absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 to-black/90 rounded-[8px] p-16'>
              <h5 className='text-[28px] leading-[33px] font-bold'>Miscovery incommode earnestly commanded if.</h5>
              <p className='text-[28px]'>Seeing rather her you not esteem men settle genius excuse you age from. Comparison new ham melancholy.</p>
              <Link href={""} className='flex items-start w-fit gap-2 hover:gap-4 transition-all duration-300 leading-[14px] text-[14px]'>
                Continue Reading <svg width="13" height="20" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.19531 1.37341L5.82422 0.771851C5.95182 0.644246 6.10677 0.580444 6.28906 0.580444C6.47135 0.580444 6.6263 0.644246 6.75391 0.771851L12.0586 6.07654C12.1862 6.20414 12.25 6.35909 12.25 6.54138C12.25 6.72367 12.1862 6.87862 12.0586 7.00623L6.75391 12.3109C6.6263 12.4385 6.47135 12.5023 6.28906 12.5023C6.10677 12.5023 5.95182 12.4385 5.82422 12.3109L5.19531 11.7094C5.06771 11.5817 5.00391 11.4268 5.00391 11.2445C5.02214 11.0622 5.09505 10.9073 5.22266 10.7797L8.50391 7.63513H0.65625C0.473958 7.63513 0.31901 7.57133 0.191406 7.44373C0.0638021 7.31612 0 7.16117 0 6.97888V6.10388C0 5.92159 0.0638021 5.76664 0.191406 5.63904C0.31901 5.51143 0.473958 5.44763 0.65625 5.44763H8.50391L5.22266 2.3031C5.09505 2.1755 5.02214 2.02055 5.00391 1.83826C5.00391 1.65597 5.06771 1.50102 5.19531 1.37341Z" fill="#ffffff" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/4">
            <BlogCard />
          </div>

          <div className="w-full lg:w-1/4">
            <BlogCard />
          </div>
        </div>
      </div>


      <div className="mx-auto max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mb-24">
        <div className='text-center mb-12'>
          <h6 className='text-[#009444] font-bold text-[16px]'>Our Values</h6>
          <h2 className='text-[40px] text-[#252525] font-[500]'>Empowering Trust, Transparency, and Growth<br />in Every Step We Take.</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className={styles.ourValuesCard + 'rounded-[20px] flex flex-col items-center justify-center gap-8 p-12'}>
            <Image src={ourValuesimg1} alt='our values' />
            <h5 className='text-center text-[22px] text-[#0A200C] font-[400]'>Comprehensive Project Management</h5>
            <p className='text-[#363636] text-[14px] text-center'>Explore a wide range of projects with detailed overviews, including images, descriptions, and downloadable PDFs. From initial offerings to advanced project phases, Quttouf provides.</p>
          </div>
          <div className={'bg-[#009444] rounded-[20px] flex flex-col items-center justify-center gap-8 p-12'}>
            <Image src={ourValuesimg2} alt='our values' />
            <h5 className='text-center text-[22px] text-[#fff] font-[400]'>Dynamic Investment Marketplace</h5>
            <p className='text-[#fff] text-[14px] text-center'>Explore a wide range of projects with detailed overviews, including images, descriptions, and downloadable PDFs. From initial offerings to advanced project phases, Quttouf provides.</p>
          </div>
          <div className={styles.ourValuesCard + 'rounded-[20px] flex flex-col items-center justify-center gap-8 p-12'}>
            <Image src={ourValuesimg3} alt='our values' />
            <h5 className='text-center text-[22px] text-[#0A200C] font-[400]'>Customer Service at Your Fingertips</h5>
            <p className='text-[#363636] text-[14px] text-center'>Explore a wide range of projects with detailed overviews, including images, descriptions, and downloadable PDFs. From initial offerings to advanced project phases, Quttouf provides.</p>
          </div>
        </div>
      </div>



      <div className="mx-auto max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mb-24">
        <div className='text-center mb-12'>
          <h6 className='text-[#009444] font-bold text-[16px]'>Our Market</h6>
          <h2 className='text-[40px] text-[#252525] font-[500]'>&quot;Explore, Invest, and Unlock <br /> New Opportunities&quot;</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className='py-16 mb-24 bg-[#F7FAF1]'>
        <div className="mx-auto max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
          <div className='text-center mb-12'>
            <h6 className='text-[#009444] font-bold text-[16px]'>Our Team</h6>
            <h2 className='text-[40px] text-[#252525] font-[500]'>&quot;Explore, Invest, and Unlock <br /> New Opportunities&quot;</h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2'>
            <Image src={ourTeamImg} alt='our team' className='rounded-[8px]' />
            <div className='flex flex-col justify-between'>
              <div>
                <p className='text-[24px] font-[400] text-[#363636] mb-8'>We are a company dedicated to sustainable agriculture, providing fresh, organic products directly from the farm to your table. Since our founding, we have been committed to offering the best agricultural solutions while preserving the environment and promoting sustainability. We believe that quality comes from nature, and we ensure that every product we deliver
                  is a testament to excellence and care.</p>
                <h6 className='text-[32px] font-[500] text-[#252525] mb-4'>Alex Adam</h6>
                <span className='text-[#656565] text-[20px] font-[400]'>Employee at quatof</span>
              </div>

              <div className='flex items-center justify-between'>
                <span>01 / 06</span>
                <div className='flex'>
                  <span className='w-12 h-12 flex justify-center items-center'>
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 2L1.5 8L7.5 14" stroke="#949494" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className='w-12 h-12 bg-[#E5EDD3] flex justify-center items-center'>
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.5 14L7.5 8L1.5 2" stroke="#536728" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mb-32">
        <div className='text-center mb-12'>
          <h6 className='text-[#009444] font-bold text-[16px]'>Our clients</h6>
          <h2 className='text-[40px] text-[#252525] font-[500]'>&quot;Explore, Invest, and Unlock <br /> New Opportunities&quot;</h2>
        </div>

        <div className=''>
          <Slider ref={sliderRef} {...settings}>
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
              className={`w-10 h-10  flex justify-center items-center ${isFirstSlide?'':'border-2 border-[#536728]'}`}
              onClick={previous}
            >
              <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 2L1.5 8L7.5 14" stroke={isFirstSlide ? "#949494" : "#536728"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </div><div
              className={`w-10 h-10 flex justify-center items-center ${isLastSlide?'':'border-2 border-[#536728]'}`}
              onClick={next}
            >
              <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 14L7.5 8L1.5 2" stroke={isLastSlide ? "#949494" : "#536728"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Video Player Example</h1>
      
      <VideoPlayer
        url="https://www.w3schools.com/html/mov_bbb.mp4"
        autoPlay={true}
      />
    </div>
    </>
  )
}

export default Home