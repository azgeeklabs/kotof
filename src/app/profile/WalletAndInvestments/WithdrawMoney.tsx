"use client"

import Button from '@/app/_components/button/Button'
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { useWalletContext } from '@/app/_contexts/walletContext'


interface IWallet {
    id: number,
    wallet_balance:number,
    withdraw_money:number,
    deposited_money:number,
    wait_for_withdraw:number,
    wait_for_deposit: number,
}

const RenderwithdrawMoney = () => {
    const [data, setData] = useState<IWallet>();

    const { setTransactionsFromContext } = useWalletContext();

    const fetchData = async () => {
        const token = typeof window !== 'undefined' && localStorage.getItem('token');
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${token ? JSON.parse(token) : ''}`);
        try {
            const response = await fetch('https://test.jiovanilibya.org/api/user/wallet', {
                headers: myHeaders,
            });
            const result = await response.json();
            setData(result.data);
            console.log(result.data.transactions);
            
            setTransactionsFromContext(result.data.transactions)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {

        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const formik = useFormik({
        initialValues: {
            address: '',
            phone_number: '',
            amount: '',
        },
        validationSchema: Yup.object({
            address: Yup.string().email('Invalid email address').required('Address is required'),
            phone_number: Yup.number().required('InstaPay number is required'),
            amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
        }),
        onSubmit: values => {
            const token = typeof window !== 'undefined' && localStorage.getItem('token');
            const myHeaders = new Headers();
            myHeaders.append("accept", "application/json");
            myHeaders.append("Authorization", `Bearer ${token ? JSON.parse(token) : ''}`);

            const formData = new FormData();
            formData.append('address', values.address);
            formData.append('phone_number', values.phone_number);
            formData.append('amount', values.amount.toString());

            fetch('https://test.jiovanilibya.org/api/user/wallet/withdraw', {
                method: 'POST',
                headers: myHeaders,
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    toast.success(data.message);
                    fetchData();
                })
                .catch((error) => {
                    toast.error(error);
                });
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <p className='text-[#656565] text-[18px] font-[400] mb-2'>Total Balance</p>
            <h4 className='pb-6 mb-6 border-b border-[#F1F1F1] text-[#17181B] text-[28px] font-[600]'>{data?.wallet_balance} <span className=' text-[16px]'>EGP</span></h4>
            <div className='space-y-1 mb-4'>
                <label htmlFor="address" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>address</label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                    placeholder='Enter address'
                    className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]'
                />
                {formik.touched.address && formik.errors.address ? (
                    <div className="text-red-500">{formik.errors.address}</div>
                ) : null}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 pb-6 mb-6 border-b border-[#F1F1F1]'>
                <div className='space-y-1'>
                    <label htmlFor="phone_number" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>InstaPay Number</label>
                    <input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone_number}
                        placeholder='Enter InstaPay number'
                        className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]'
                    />
                    {formik.touched.phone_number && formik.errors.phone_number ? (
                        <div className="text-red-500">{formik.errors.phone_number}</div>
                    ) : null}
                </div>
                <div className='space-y-1'>
                    <label htmlFor="amount" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Amount</label>
                    <input
                        type="text"
                        name="amount"
                        id="amount"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.amount}
                        placeholder='Enter amount'
                        className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]'
                    />
                    {formik.touched.amount && formik.errors.amount ? (
                        <div className="text-red-500">{formik.errors.amount}</div>
                    ) : null}
                </div>
            </div>
            <Button type="submit" className='w-full h-12'>Confirm</Button>
        </form>
    )
}

export default RenderwithdrawMoney