'use client'
import Button from './_components/button/Button'
import ProductCard from './_components/productCard/ProductCard'
import VideoPlayer from './_components/video/video'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Out_team from './_components/home_components/Out_team'
import Our_client from './_components/home_components/Our_client'
import { useRouter } from 'next/navigation'
import Banner from './_components/home_components/Banner'
import About from './_components/home_components/About'
import Blogs from './_components/home_components/Blogs'
import OurValues from './_components/home_components/OurValues';




const Home = () => {

    const router = useRouter();

    

    useEffect(() => {
    AOS.init({
      disable: "mobile",
      once: true,       // Whether animation should happen only once
      mirror: false,    // Whether elements should animate out on scroll
    });


}, []);

  

  return (
    <>

      <Banner />

      <About />


      <Blogs />




      <div data-aos="flip-up" data-aos-duration="500" data-aos-delay="0" className='w-full mb-20 md:mb-32'>
        <VideoPlayer
          url="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay={false}
        />
      </div>


      <OurValues />


      <div className="mx-auto max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mb-20 md:mb-32 flex flex-col items-center">
        <div className='text-center mb-12'>
          <h6 data-aos="fade-up" data-aos-duration="500" data-aos-delay="0" className='text-[#009444] font-bold text-[16px]'>Our Market</h6>
          <h2 data-aos="fade-zoom-in" data-aos-duration="500" data-aos-delay="0" className='text-[26px] md:text-[40px] text-[#252525] font-[500]'>&quot;Explore, Invest, and Unlock <br /> New Opportunities&quot;</h2>
        </div>

        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="0" className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-6'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <Button className='px-8 mx-auto'  onClick={()=> router.push("/market")} >View All</Button>

      </div>


      <Out_team />

      <Our_client />

    </>
  )
}

export default Home