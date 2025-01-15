'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import logo from '@/media/logo.png';
import { FaEye } from 'react-icons/fa';
import { RiEyeCloseFill } from 'react-icons/ri';
import Button from '@/app/_components/button/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useUser } from '@/app/_contexts/userContext';

interface FormValues {
  email: string;
  password: string;
}

const SignInPage: React.FC = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const { updateUser } = useUser();

  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {

    console.log(values);
    
    const formData = new FormData();
    formData.append('email', values.email);
    formData.append('password', values.password);

    try {
      const response = await fetch(`https://test.jiovanilibya.org/api/user/login`, {
        method: 'POST',
        headers:{
          "Accept":"application/json"
        },
        body: formData, // FormData object
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {

        toast.success(data.message)
        localStorage.setItem('token', JSON.stringify(data.data.access_token)); // Save token to localStorage
        localStorage.setItem('userInfo', JSON.stringify(data.data.user)); // Save User to localStorage
        updateUser(data.data.user)
        router.push('/'); // Redirect to home on successful login
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className='space-y-8 mb-8'>
        <Image src={logo} alt='welcome img' />
        <div className='space-y-2'>
          <h2 className='text-[#17181B] text-[24px] font-[600]'>Welcome Back</h2>
          <p className='text-[#656C77] text-[16px] font-[400]'>Enter your email and password to login.</p>
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='space-y-1 mb-4'>
              <label htmlFor='email' className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>
                Email address
              </label>
              <Field
                type='text'
                name='email'
                id='email'
                placeholder='Enter your email'
                className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]'
              />
              <ErrorMessage name='email' component='div' className='text-red-500 text-sm' />
            </div>

            <div className='space-y-1 mb-6'>
              <label htmlFor='password' className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>
                Password
              </label>
              <div className='relative'>
                <span
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-[24px] cursor-pointer text-[#17181B]'
                  onClick={() => setPasswordVisible((prev) => !prev)}
                >
                  {passwordVisible ? <FaEye /> : <RiEyeCloseFill />}
                </span>
                <Field
                  type={passwordVisible ? 'text' : 'password'}
                  name='password'
                  id='password'
                  placeholder='Enter your password'
                  className='w-full px-4 py-2 mb-1 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]'
                />
              </div>
              <ErrorMessage name='password' component='div' className='text-red-500 text-sm' />
              <div className='flex justify-between items-center gap-4'>
                <div className='flex gap-2'>
                  <Field
                    type='checkbox'
                    name='rememberMe'
                    id='rememberMe'
                    className='accent-[#009444] w-4'
                  />
                  <label
                    htmlFor='rememberMe'
                    className='text-[#A2A1A8] text-[14px] leading-[20px] font-[400]'
                  >
                    Remember Me
                  </label>
                </div>
                <Link href='/auth/forget-password' className='text-[#009444]'>
                  Forget password?
                </Link>
              </div>
            </div>
            <Button type='submit' className='w-full mb-3' disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </Button>
            <p className='text-center text-[#656C77] text-[16px] font-[400]'>
              Don&apos;t have an account?{' '}
              <Link href='/auth/signup' className='text-[#009444]'>
                Sign up
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignInPage;
