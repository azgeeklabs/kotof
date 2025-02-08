import Button from '@/app/_components/button/Button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
import userImg from '@/media/our clients img1.png'
import Pagination from '@/app/_components/pagination/Pagination'
import toast from 'react-hot-toast'

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

const RenderPurchaseRequests = () => {

    const [data, setData] = useState<IProject[]>();
    const [totalPages, setTotalPages] = useState<number>();
    const [CurrentPage, setCurrentPage] = useState<number>(1);
    const [IsLoadingAccept, setIsLoadingAccept] = useState<boolean>(false)
    const [IsLoadingRefuse, setIsLoadingRefuse] = useState<boolean>(false)



    useEffect(() => {
        const fetchData = async () => {
            const token = typeof window !== 'undefined' && localStorage.getItem('token');

            const myHeaders = new Headers();
            myHeaders.append("accept", "application/json");
            myHeaders.append("Authorization", `Bearer ${token ? JSON.parse(token) : ''}`);
            try {
                const response = await fetch('https://test.jiovanilibya.org/api/user/sectors/list-for-sale', {
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
    }, []); // Empty dependency array ensures this runs only once after the component mounts


    const handleRefuseOffer = async (id: number | undefined) => {
        setIsLoadingRefuse(true)
        const token = typeof window !== 'undefined' && localStorage.getItem('token');
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${token ? JSON.parse(token) : ''}`);

        try {
            const response = await fetch(`https://test.jiovanilibya.org/api/user/purchase-buying-requests/accept/${id}`, {
                method: "POST",
                headers: myHeaders
            });

            const result = await response.json();

            console.log(result);

            if (response.ok) {
                toast.success(result.message);
                setIsLoadingRefuse(false)

            } else {
                toast.error(result.message);
                setIsLoadingRefuse(false)
            }
        } catch (error) {
            console.error(error);
            setIsLoadingRefuse(false)
        }
    }

    const handleAcceptOffer = async (id: number | undefined) => {
        setIsLoadingAccept(true)
        const token = typeof window !== 'undefined' && localStorage.getItem('token');

        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${token ? JSON.parse(token) : ''}`);

        try {
            const response = await fetch(`https://test.jiovanilibya.org/api/user/purchase-buying-requests/accept/${id}`, {
                method: "POST",
                headers: myHeaders
            });

            const result = await response.json();

            console.log(result);

            if (response.ok) {
                toast.success(result.message);
                setIsLoadingAccept(false)

            } else {
                toast.error(result.message);
                setIsLoadingAccept(false)

            }
        } catch (error) {
            console.error(error);
            setIsLoadingAccept(false)

        }
    }


    return (
        <>
            <div className='flex flex-col lg:grid grid-cols-1 lg:grid-cols-3 gap-6'>

                {data?.map(ele => <div key={ele.id} className='px-4 py-6 lg:px-6 lg:py-8  rounded-[20px] bg-[#fff] w-full'>
                    <p className='text-[14px] font-[500] text-black text-center mb-4'>{ele.created_at.split(" ")[0]}</p>
                    <h6 className='text-[26px] text-[#009444] text-center font-[600] mb-8'>{ele.sector.title}</h6>
                    <div className='flex items-center justify-between mb-8'>
                        <div className='flex items-center gap-2'>
                            <Image src={userImg} alt='user profile' className='w-12 h-12 rounded-[50%]' />
                            <p className='text-[#17181B] text-[18px] font-[500]'>{ele.user.username}</p>
                        </div>
                        <a href={`${ele.user.country_code + ele.user.whatsapp_number}`} className='flex items-center justify-center w-12 h-12 rounded-[50%] bg-[#E2F7E5]'>
                            <IoLogoWhatsapp className='text-[24px] text-[#47C756]' />
                        </a>
                    </div>

                    <ul className='flex flex-col gap-4 w-full mb-6'>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>sector</span><span className='text-[16px] text-[#000] font-[600]'>{ele.sector.id}</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Asking price</span><span className='text-[16px] text-[#000] font-[600]'>{ele.total_price}</span></li>
                        <li className='flex justify-between items-center'><span className='text-[16px] text-[#656565] font-[400]'>Company evaluation</span><span className='text-[16px] text-[#000] font-[600]'>{ele.company_evaluation}</span></li>
                    </ul>
                    <div className='grid grid-cols-2 gap-6'>
                        <Button variant='destructive' className='w-full h-12' onClick={() => handleRefuseOffer(ele.id)} disabled={IsLoadingRefuse}>{IsLoadingRefuse ? "Refusing..." : "Refuse"}</Button>
                        <Button className='w-full h-12' onClick={() => handleAcceptOffer(ele.id)} disabled={IsLoadingAccept}>{IsLoadingAccept ? "Accepting..." : "Accept"}</Button>
                    </div>
                </div>)}

                <div className='col-span-3'>
                    <Pagination currentPage={CurrentPage} totalPages={totalPages ? totalPages : 1} onPageChange={(t) => setCurrentPage(t)} />
                </div>
            </div>
        </>
    )
}

export default RenderPurchaseRequests