import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import BlogCard from '../articleCard/BlogCard'
// import Image from 'next/image'


interface IBlog {
    id: number,
    name: string,
    title: string,
    content: string,
    image: string,
    video: string,
    created_at: string
  }

const Blogs = () => {

    const [data, setData] = useState<IBlog[] | undefined>();

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('https://test.jiovanilibya.org/api/user/blogs');
                const result = await response.json();
                setData(result.data);
                console.log(result.data[0]);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []); // Empty dependency array ensures this runs only once after the component mounts


    return (
        <div className="mx-auto max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mb-20 md:mb-32">

            <div className='text-center mb-10'>
                <h6 data-aos="fade-up" data-aos-duration="500" data-aos-delay="0" className='text-[#009444] font-bold text-[16px]'>Our Blog</h6>
                <h2 data-aos="fade-zoom-in" data-aos-duration="500" data-aos-delay="0" className='text-[26px] md:text-[40px] text-[#252525] font-[500]'>Check our latest blog</h2>
            </div>

            <div className='flex flex-col lg:flex-row items-stretch gap-8'>
                <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="0" className="relative w-full lg:w-1/2 h-auto">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={data ? data[0]?.image : "https://test.jiovanilibya.org/dashboard/blank.jpg"} alt='blog img' className='rounded-[8px] h-full w-full object-cover' />
                    <div className='flex flex-col justify-end gap-4 md:gap-6 text-white absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 to-black/90 rounded-[8px] p-6 md:p-16'>
                        <h5 className='text-[22px] leading-[22px] md:text-[28px] md:leading-[33px] font-bold'>{data? data[0]?.title : "" }</h5>
                        <p className='text-[14px] md:text-[17px]'>{data? data[0]?.content : "" }</p>
                        <Link href={"/news-articles/article"} className='flex items-start w-fit gap-2 hover:gap-4 transition-all duration-300 leading-[14px] text-[14px]'>
                            Continue Reading <svg className='rtl:rotate-180' width="13" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.19531 1.37341L5.82422 0.771851C5.95182 0.644246 6.10677 0.580444 6.28906 0.580444C6.47135 0.580444 6.6263 0.644246 6.75391 0.771851L12.0586 6.07654C12.1862 6.20414 12.25 6.35909 12.25 6.54138C12.25 6.72367 12.1862 6.87862 12.0586 7.00623L6.75391 12.3109C6.6263 12.4385 6.47135 12.5023 6.28906 12.5023C6.10677 12.5023 5.95182 12.4385 5.82422 12.3109L5.19531 11.7094C5.06771 11.5817 5.00391 11.4268 5.00391 11.2445C5.02214 11.0622 5.09505 10.9073 5.22266 10.7797L8.50391 7.63513H0.65625C0.473958 7.63513 0.31901 7.57133 0.191406 7.44373C0.0638021 7.31612 0 7.16117 0 6.97888V6.10388C0 5.92159 0.0638021 5.76664 0.191406 5.63904C0.31901 5.51143 0.473958 5.44763 0.65625 5.44763H8.50391L5.22266 2.3031C5.09505 2.1755 5.02214 2.02055 5.00391 1.83826C5.00391 1.65597 5.06771 1.50102 5.19531 1.37341Z" fill="#ffffff" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {data && data.slice(1,3).map((blogInfo:IBlog) => <div key={blogInfo.id} data-aos="fade-left" data-aos-duration="500" data-aos-delay="0" className="w-full lg:w-1/4">
                    <BlogCard blogInfo={blogInfo} />
                </div>)}
            </div>
        </div>
    )
}

export default Blogs