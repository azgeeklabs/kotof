"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '@/media/logo.png';
import { FaEye } from 'react-icons/fa';
import { RiEyeCloseFill } from 'react-icons/ri';
import Button from '../../_components/button/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useUser } from '../../_contexts/userContext';

interface ICountry {
  id: number;
  name: string;
  phone_code: string;
}

const SignInPage: React.FC = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const { updateUser } = useUser();

  const [countries, setCountries] = useState<ICountry[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://test.jiovanilibya.org/api/user/countries");
          const result = await response.json();
          setCountries(result);
        } catch (error) {
          console.error("Error fetching countries:", error);
        }
      };
  
      fetchData();
    }, []);


  const formik = useFormik({
    initialValues: {
      country_code:'',
      phone: '',
      password: '',
    },
    validationSchema: Yup.object({
          country_code: Yup.number()
            .required('country is required')
            .min(1, 'country must be at least 3 characters'),
      phone: Yup.number().required('phone is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      const formData = new FormData();
      formData.append('country_code', values.country_code);
      formData.append('phone', values.phone);
      formData.append('password', values.password);

      try {
        const response = await fetch(`https://test.jiovanilibya.org/api/user/login`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: formData,
        });

        const data = await response.json();

        if (response.ok) {
          toast.success(data.message);
          localStorage.setItem('token', JSON.stringify(data.data.access_token));
          localStorage.setItem('userInfo', JSON.stringify(data.data.user));
          updateUser(data.data.user);
          router.push('/');
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.error('Error during sign-in:', error);
        toast.error('An error occurred. Please try again later.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <div className="space-y-8 mb-8">
        <Image src={logo} alt="welcome img" />
        <div className="space-y-2">
          <h2 className="text-[#17181B] text-[24px] font-[600]">Welcome Back</h2>
          <p className="text-[#656C77] text-[16px] font-[400]">Enter your email and password to login.</p>
        </div>
      </div>

      <form onSubmit={formik.handleSubmit}>
      <div className='space-y-1 mb-4'>
          <label htmlFor="country_code" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Country</label>
          <select
            id="country_code"
            {...formik.getFieldProps('country_code')}
            className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]'
          >
              {countries.map((ele) => (
                          <option key={ele.id} value={ele.phone_code} >
                            {ele.name} {`(+${ele.phone_code})`}
                          </option>
                        ))}

          </select>
          {formik.touched.country_code && formik.errors.country_code && (
            <div className="text-red-500 text-sm">{formik.errors.country_code}</div>
          )}
        </div>
        
        <div className="space-y-1 mb-4">
          <label htmlFor="phone" className="text-[#656C77] text-[16px] leading-[24px] font-[500]">
            phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your phone"
            className="w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          )}
        </div>

        <div className="space-y-1 mb-6">
          <label htmlFor="password" className="text-[#656C77] text-[16px] leading-[24px] font-[500]">
            Password
          </label>
          <div className="relative">
            <span
              className="absolute rtl:left-3 ltr:right-3 top-1/2 -translate-y-1/2 text-[24px] cursor-pointer text-[#17181B]"
              onClick={() => setPasswordVisible((prev) => !prev)}
            >
              {passwordVisible ? <FaEye /> : <RiEyeCloseFill />}
            </span>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mb-1 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}

          <div className="flex justify-between items-center gap-4">
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="accent-[#009444] w-4"
                onChange={formik.handleChange}
              />
              <label
                htmlFor="rememberMe"
                className="text-[#A2A1A8] text-[14px] leading-[20px] font-[400]"
              >
                Remember Me
              </label>
            </div>
            <Link href="/auth/forget-password" className="text-[#009444]">
              Forget password?
            </Link>
          </div>
        </div>

        <Button type="submit" className="w-full mb-3" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'Logging in...' : 'Login'}
        </Button>

        <p className="text-center text-[#656C77] text-[16px] font-[400]">
          Don&apos;t have an account?{' '}
          <Link href="/auth/signup" className="text-[#009444]">
            Sign up
          </Link>
        </p>
      </form>
    </>
  );
};

export default SignInPage;
