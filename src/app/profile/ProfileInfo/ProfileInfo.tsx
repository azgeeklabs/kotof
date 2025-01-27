// import IntlTelInput from 'intl-tel-input/react';
// import React, { useEffect, useRef, useState } from 'react'
// import ImageUpload from '../imageUploud';
// import Button from '../../_components/button/Button';


// interface ICountry {
//     id: number;
//     name: string;
//     phone_code: string;
// }
// interface INationality {
//     id: number;
//     name: string;
// }

// const RenderProfileInfo = () => {

//     const [countries, setCountries] = useState<ICountry[]>([]);
//     const [nationalities, setNationalities] = useState<INationality[]>([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch("https://test.jiovanilibya.org/api/user/countries");
//                 const result = await response.json();
//                 setCountries(result);
//             } catch (error) {
//                 console.error("Error fetching countries:", error);
//             }

//             try {
//                 const response = await fetch("https://test.jiovanilibya.org/api/user/nationalities");
//                 const result = await response.json();
//                 setNationalities(result);
//             } catch (error) {
//                 console.error("Error fetching countries:", error);
//             }

//         };

//         fetchData();
//     }, []);


    // const [files, setFiles] = useState<File[]>([]);

    // const fileInputRef = useRef<HTMLInputElement>(null);

    // const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    //     event.preventDefault();
    //     event.stopPropagation();
    // };

    // const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    //     event.preventDefault();
    //     event.stopPropagation();

    //     const droppedFiles = Array.from(event.dataTransfer.files);
    //     const imageFiles = droppedFiles.filter(file => file.type.startsWith('image/'));

    //     if (imageFiles.length > 0) {
    //         setFiles([...files, ...imageFiles]);
    //     } else {
    //         alert('Only image files are allowed!');
    //     }
    // };

    // const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     if (event.target.files) {
    //         const selectedFiles = Array.from(event.target.files);
    //         const imageFiles = selectedFiles.filter(file => file.type.startsWith('image/'));

    //         if (imageFiles.length > 0) {
    //             setFiles([...files, ...imageFiles]);
    //         } else {
    //             alert('Only image files are allowed!');
    //         }
    //     }
    // };

    // const handleClick = () => {
    //     if (fileInputRef.current) {
    //         fileInputRef.current.click();
    //     }
    // };

    // const handleImageUpload = (file: File) => {
    //     console.log('File uploaded:', file);
    // };

//     return (
//         <>
//             <form action="" className='space-y-6 lg:grid lg:grid-cols-2 gap-5 p-8 bg-white rounded-[16px]'>
//                 <div className='space-y-1 lg:col-span-2'>
//                     <ImageUpload
//                         maxSizeInMB={5}
//                         onImageUpload={handleImageUpload}
//                         width={600}
//                         height={400}
//                         acceptedFileTypes={['image/jpeg', 'image/png']}
//                     />
//                 </div>
//                 <div className='space-y-1'>
//                     <label htmlFor="email" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Email address</label>
//                     <input type="email" name="email" id="email" placeholder='Enter your email' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
//                 </div>
//                 <div className='space-y-1 mb-4'>
//                     <label htmlFor="current_password" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>current password</label>
//                     <input
//                         type="current_password"
//                         id="current_password"
//                         className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]'
//                     />
//                 </div>
//                 <div className='space-y-1'>
//                     <label htmlFor="username" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>User name</label>
//                     <input type="text" name="username" id="username" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
//                 </div>
//                 <div className='space-y-1'>
//                     <label htmlFor="full_name" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Full Name</label>
//                     <input type="text" name="full_name" id="full_name" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
//                 </div>
//                 <div className='space-y-1 mb-4'>
//                     <label htmlFor="country_code" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Country</label>
//                     <select
//                         id="country_code"
//                         className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]'
//                     >
//                         {countries.map((ele) => (
//                             <option key={ele.id} value={ele.phone_code} >
//                                 {ele.name}
//                             </option>
//                         ))}

//                     </select>

//                 </div>

// <div className='space-y-1 flex flex-col'>
//     <label htmlFor="phone" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Phone Number 1</label>
//     <IntlTelInput
//         inputProps={{
//             id: "phone"
//         }}
//         onChangeCountry={(country)=>console.log(country)}
//         initOptions={{
//             initialCountry: "eg",
//         }}
//     />
// </div>

//                 <div className='space-y-1 mb-4'>
//                     <label htmlFor="country_code_2" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Country</label>
//                     <select
//                         id="country_code_2"
//                         className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]'
//                     >
//                         {countries.map((ele) => (
//                             <option key={ele.id} value={ele.phone_code} >
//                                 {ele.name}
//                             </option>
//                         ))}

//                     </select>
//                 </div>
//                 <div className='space-y-1 flex flex-col'>
//                     <label htmlFor="phone_2" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Phone Number 2</label>
//                     <IntlTelInput
//                         inputProps={{
//                             id: "phone_2"
//                         }}
//                         initOptions={{
//                             initialCountry: "eg",
//                         }}
//                     />
//                 </div>

//                 <div className='space-y-1 mb-4'>
//                     <label htmlFor="country_code_whatsapp" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Country</label>
//                     <select
//                         id="country_code_whatsapp"
//                         className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]'
//                     >
//                         {countries.map((ele) => (
//                             <option key={ele.id} value={ele.phone_code} >
//                                 {ele.name}
//                             </option>
//                         ))}

//                     </select>
//                 </div>

//                 <div className='space-y-1 flex flex-col'>
//                     <label htmlFor="whatsapp_number" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Whats App Number</label>
//                     <IntlTelInput
//                         inputProps={{
//                             id: "whatsapp_number"
//                         }}
//                         initOptions={{
//                             initialCountry: "eg",
//                         }}
//                     />                        </div>
//                 <div className='space-y-1 flex flex-col'>
//                     <label htmlFor="emergency_number" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Emergency Contact</label>
//                     <IntlTelInput
//                         inputProps={{
//                             id: "emergency_number"
//                         }}
//                         initOptions={{
//                             initialCountry: "eg",
//                         }}
//                     />                        </div>
//                 <div className='space-y-1'>
//                     <label htmlFor="bank_name" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Bank Name</label>
//                     <input type="text" name="bank_name" id="bank_name" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
//                 </div>
//                 <div className='space-y-1'>
//                     <label htmlFor="bank_account_number" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Bank Account Number</label>
//                     <input type="number" name="bank_account_number" id="bank_account_number" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
//                 </div>
//                 <div className='space-y-1'>
//                     <label htmlFor="Nationality" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Nationality</label>
//                     <select
//                         id="nationality_id"
//                         className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]'
//                     >
//                         {nationalities.map((ele) => (
//                             <option key={ele.id} value={ele.id} >
//                                 {ele.name}
//                             </option>
//                         ))}

//                     </select>
//                 </div>
//                 <div className='space-y-1'>
//                     <label htmlFor="isntapay_account" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>InstaPay Account</label>
//                     <input type="text" name="isntapay_account" id="isntapay_account" placeholder='Enter name' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
//                 </div>
//                 <div className='space-y-1'>
//                     <label htmlFor="national_id" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>National ID</label>
//                     <input type="text" name="national_id" id="national_id" placeholder='Enter your id' className='w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px] ' />
//                 </div>
//                 <div className='space-y-1 col-span-2'>
//                     <label htmlFor="national_id_image" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>Image ID</label>
//                     <div>
//                         <div
//                             className="border-[1px] border-dashed border-[#009444] rounded-lg p-6 text-center cursor-pointer hover:bg-gray-100"
//                             onDragOver={handleDragOver}
//                             onDrop={handleDrop}
//                             onClick={handleClick} // Makes the dropzone clickable
//                         >
//                             <div className='flex justify-center items-center mx-auto mb-2 w-8 h-8 rounded-[10px] bg-[#009444]'>
//                                 <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path fillRule="evenodd" clipRule="evenodd" d="M3.72476 3.5579C3.48069 3.80198 3.48069 4.19771 3.72477 4.44178C3.96885 4.68586 4.36457 4.68586 4.60865 4.44178L6.87501 2.1754V12.3332C6.87501 12.6784 7.15483 12.9582 7.50001 12.9582C7.84519 12.9582 8.12501 12.6784 8.12501 12.3332V2.17538L10.3914 4.44178C10.6355 4.68586 11.0312 4.68586 11.2753 4.44178C11.5194 4.1977 11.5194 3.80197 11.2753 3.5579L7.94195 0.22456C7.82474 0.10735 7.66577 0.0415031 7.50001 0.0415039C7.33425 0.0415047 7.17528 0.107354 7.05807 0.224564L3.72476 3.5579ZM2.78322 6.89078C2.99911 6.62146 2.9558 6.22811 2.68648 6.01221C2.41715 5.79631 2.0238 5.83962 1.80791 6.10894C0.807302 7.35716 0.208374 8.94275 0.208374 10.6665C0.208374 14.6936 3.47296 17.9582 7.50004 17.9582C11.5271 17.9582 14.7917 14.6936 14.7917 10.6665C14.7917 8.94275 14.1928 7.35716 13.1922 6.10894C12.9763 5.83962 12.5829 5.79631 12.3136 6.01221C12.0443 6.22811 12.001 6.62146 12.2169 6.89078C13.0461 7.92523 13.5417 9.23714 13.5417 10.6665C13.5417 14.0032 10.8368 16.7082 7.50004 16.7082C4.16332 16.7082 1.45837 14.0032 1.45837 10.6665C1.45837 9.23714 1.95397 7.92523 2.78322 6.89078Z" fill="white" />
//                                 </svg>
//                             </div>
//                             <p className="text-[#40444C] text-[14px]">Drag & Drop or <span className='text-[#009444]'>choose file</span> to upload</p>
//                             <p className="text-[#949494] text-[10px]">Supported ats : Jpeg, pdf</p>
//                             <input
//                                 type="file"
//                                 id='national_id_image'
//                                 multiple
//                                 accept=".jpeg, .jpg, .pdf"
//                                 ref={fileInputRef} // Reference to the hidden input
//                                 onChange={handleFileInputChange}
//                                 className="hidden"
//                             />
//                         </div>
//                         <ul className="mt-4 text-sm text-gray-700">
//                             {files.length > 0 &&
//                                 files.map((file, index) => (
//                                     <li key={index} className="border p-2 rounded mb-2">
//                                         {file.name}
//                                     </li>
//                                 ))}
//                         </ul>
//                     </div>
//                 </div>
//                 <Button className='col-span-2 w-36 ml-auto'>Confirm</Button>
//             </form>
//         </>
//     )

// }

// export default RenderProfileInfo




import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import ImageUpload from '../imageUploud';
import Button from '../../_components/button/Button';


interface ICountry {
    id: number;
    name: string;
    phone_code: string;
}

interface INationality {
    id: number;
    name: string;
}

interface ProfileInfo {
    email: string,
    current_password: string,
    username: string,
    full_name: string,
    country_code: string,
    phone: string,
    country_code_2: string,
    phone_2: string,
    country_code_whatsapp: string,
    whatsapp_number: string,
    emergency_number: string,
    bank_name: string,
    bank_account_number: string,
    nationality_id: string,
    isntapay_account: string,
    national_id: string,
    national_id_image: null,
}

const RenderProfileInfo = () => {
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [nationalities, setNationalities] = useState<INationality[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const countriesResponse = await fetch("https://test.jiovanilibya.org/api/user/countries");
                const countriesResult = await countriesResponse.json();
                setCountries(countriesResult);

                const nationalitiesResponse = await fetch("https://test.jiovanilibya.org/api/user/nationalities");
                const nationalitiesResult = await nationalitiesResponse.json();
                setNationalities(nationalitiesResult);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // const validationSchema = Yup.object({
    //     email: Yup.string().email('Invalid email address'),
    //     current_password: Yup.string().required('Current password is required'),
    //     username: Yup.string(),
    //     full_name: Yup.string(),
    //     country_code: Yup.string(),
    //     phone: Yup.string(),
    //     country_code_2: Yup.string(),
    //     phone_2: Yup.string(),
    //     country_code_whatsapp: Yup.string(),
    //     whatsapp_number: Yup.string(),
    //     emergency_number: Yup.string(),
    //     bank_name: Yup.string(),
    //     bank_account_number: Yup.string(),
    //     nationality_id: Yup.string(),
    //     isntapay_account: Yup.string(),
    //     national_id: Yup.string(),
    //     national_id_image: Yup.mixed(),
    // });

    const formik = useFormik({
        initialValues: {
            email: '',
            current_password: '',
            username: '',
            full_name: '',
            country_code: '',
            phone: '',
            country_code_2: '',
            phone_2: '',
            country_code_whatsapp: '',
            whatsapp_number: '',
            emergency_number: '',
            bank_name: '',
            bank_account_number: '',
            nationality_id: '',
            isntapay_account: '',
            national_id: '',
            national_id_image:null ,
        },
        // validationSchema,
        onSubmit: async (values: ProfileInfo) => {

            const token = typeof window !== 'undefined' && localStorage.getItem('token');
            const myHeaders = new Headers();
            myHeaders.append("accept", "application/json");
            myHeaders.append("Authorization", `Bearer ${token ? JSON.parse(token) : ''}`);

            const formData = new FormData();

            Object.entries(values).forEach(([key, value]) => {
                if (key === 'national_id_image' && value instanceof File) {
                    formData.append(key, value);
                } else {
                    formData.append(key, value || '');
                }
            });

            try {
                const response = await fetch('https://test.jiovanilibya.org/api/user/update/profile', {
                    method: 'POST',
                    headers:myHeaders,
                    body: formData,
                });

                if (response.ok) {
                    console.log('Profile updated successfully');
                } else {
                    console.error('Failed to update profile');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        },
    });


    const [files, setFiles] = useState<File[]>([]);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();

        const droppedFiles = Array.from(event.dataTransfer.files);
        const imageFiles = droppedFiles.filter(file => file.type.startsWith('image/'));

        if (imageFiles.length > 0) {
            setFiles([...files, ...imageFiles]);
        } else {
            alert('Only image files are allowed!');
        }
    };

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedFiles = Array.from(event.target.files);
            const imageFiles = selectedFiles.filter(file => file.type.startsWith('image/'));

            if (imageFiles.length > 0) {
                setFiles([...files, ...imageFiles]);
            } else {
                alert('Only image files are allowed!');
            }
        }
    };

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    // const handleImageUpload = (file: File) => {
    //     console.log('File uploaded:', file);
    // };

    return (
        <form onSubmit={formik.handleSubmit} className="lg:grid lg:grid-cols-2 gap-5 p-8 bg-white rounded-[16px]">

            <div className="space-y-1">
                <label htmlFor="email" className="text-[#656C77] text-[16px] leading-[24px] font-[500]">Email address</label>
                <input
                    type="email"
                    id="email"
                    {...formik.getFieldProps('email')}
                    className="w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]"
                />
                {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm">{formik.errors.email}</p>
                )}
            </div>

            <div className="space-y-1 mb-4">
                <label htmlFor="current_password" className="text-[#656C77] text-[16px] leading-[24px] font-[500]">Current password</label>
                <input
                    type="password"
                    id="current_password"
                    {...formik.getFieldProps('current_password')}
                    className="w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]"
                />
                {formik.touched.current_password && formik.errors.current_password && (
                    <p className="text-red-500 text-sm">{formik.errors.current_password}</p>
                )}
            </div>

            <div className="space-y-1 mb-4">
                <label htmlFor="username" className="text-[#656C77] text-[16px] leading-[24px] font-[500]">User Name</label>
                <input
                    type="text"
                    id="username"
                    {...formik.getFieldProps('username')}
                    className="w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]"
                />
                {formik.touched.username && formik.errors.username && (
                    <p className="text-red-500 text-sm">{formik.errors.username}</p>
                )}
            </div>

            <div className="space-y-1 mb-4">
                <label htmlFor="full_name" className="text-[#656C77] text-[16px] leading-[24px] font-[500]">Full Name</label>
                <input
                    type="text"
                    id="full_name"
                    {...formik.getFieldProps('full_name')}
                    className="w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]"
                />
                {formik.touched.full_name && formik.errors.full_name && (
                    <p className="text-red-500 text-sm">{formik.errors.full_name}</p>
                )}
            </div>

            <div className="space-y-1">
                <label
                    htmlFor="country_code"
                    className="text-[#656C77] text-[16px] leading-[24px] font-[500]"
                >
                    Country for phone
                </label>
                <select
                    id="country_code"
                    {...formik.getFieldProps('country_code')}
                    className="w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]"
                >
                    <option value="">Select a country</option>
                    {countries.map((country) => (
                        <option key={country.id} value={country.phone_code}>
                            {country.name}
                        </option>
                    ))}
                </select>
                {formik.touched.country_code && formik.errors.country_code && (
                    <p className="text-red-500 text-sm">{formik.errors.country_code}</p>
                )}
            </div>

            <div className="space-y-1 mb-4">
                <label htmlFor="phone" className="text-[#656C77] text-[16px] leading-[24px] font-[500]">Phone</label>
                <input
                    type="text"
                    id="phone"
                    {...formik.getFieldProps('phone')}
                    className="w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]"
                />
                {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-500 text-sm">{formik.errors.phone}</p>
                )}
            </div>


            <div className="space-y-1">
                <label
                    htmlFor="country_code_2"
                    className="text-[#656C77] text-[16px] leading-[24px] font-[500]"
                >
                    Country for phone 2
                </label>
                <select
                    id="country_code_2"
                    {...formik.getFieldProps('country_code_2')}
                    className="w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]"
                >
                    <option value="">Select a country</option>
                    {countries.map((country) => (
                        <option key={country.id} value={country.phone_code}>
                            {country.name}
                        </option>
                    ))}
                </select>
                {formik.touched.country_code_2 && formik.errors.country_code_2 && (
                    <p className="text-red-500 text-sm">{formik.errors.country_code_2}</p>
                )}
            </div>

            <div className="space-y-1 mb-4">
                <label htmlFor="phone_2" className="text-[#656C77] text-[16px] leading-[24px] font-[500]">Phone 2</label>
                <input
                    type="text"
                    id="phone_2"
                    {...formik.getFieldProps('phone_2')}
                    className="w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]"
                />
                {formik.touched.phone_2 && formik.errors.phone_2 && (
                    <p className="text-red-500 text-sm">{formik.errors.phone_2}</p>
                )}
            </div>


            <div className="space-y-1">
                <label
                    htmlFor="country_code_whatsapp"
                    className="text-[#656C77] text-[16px] leading-[24px] font-[500]"
                >
                    Country for whatsapp number
                </label>
                <select
                    id="country_code_whatsapp"
                    {...formik.getFieldProps('country_code_whatsapp')}
                    className="w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]"
                >
                    <option value="">Select a country</option>
                    {countries.map((country) => (
                        <option key={country.id} value={country.phone_code}>
                            {country.name}
                        </option>
                    ))}
                </select>
                {formik.touched.country_code_whatsapp && formik.errors.country_code_whatsapp && (
                    <p className="text-red-500 text-sm">{formik.errors.country_code_whatsapp}</p>
                )}
            </div>

            <div className="space-y-1 mb-4">
                <label htmlFor="whatsapp_number" className="text-[#656C77] text-[16px] leading-[24px] font-[500]">whatsapp number</label>
                <input
                    type="text"
                    id="whatsapp_number"
                    {...formik.getFieldProps('whatsapp_number')}
                    className="w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]"
                />
                {formik.touched.whatsapp_number && formik.errors.whatsapp_number && (
                    <p className="text-red-500 text-sm">{formik.errors.whatsapp_number}</p>
                )}
            </div>


            <div className="space-y-1 mb-4">
                <label htmlFor="emergency_number" className="text-[#656C77] text-[16px] leading-[24px] font-[500]">emergency number</label>
                <input
                    type="text"
                    id="emergency_number"
                    {...formik.getFieldProps('emergency_number')}
                    className="w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]"
                />
                {formik.touched.emergency_number && formik.errors.emergency_number && (
                    <p className="text-red-500 text-sm">{formik.errors.emergency_number}</p>
                )}
            </div>

            <div className="space-y-1 mb-4">
                <label htmlFor="bank_name" className="text-[#656C77] text-[16px] leading-[24px] font-[500]">bank name</label>
                <input
                    type="text"
                    id="bank_name"
                    {...formik.getFieldProps('bank_name')}
                    className="w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]"
                />
                {formik.touched.bank_name && formik.errors.bank_name && (
                    <p className="text-red-500 text-sm">{formik.errors.bank_name}</p>
                )}
            </div>

            <div className="space-y-1 mb-4">
                <label htmlFor="bank_account_number" className="text-[#656C77] text-[16px] leading-[24px] font-[500]">bank account number</label>
                <input
                    type="text"
                    id="bank_account_number"
                    {...formik.getFieldProps('bank_account_number')}
                    className="w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]"
                />
                {formik.touched.bank_account_number && formik.errors.bank_account_number && (
                    <p className="text-red-500 text-sm">{formik.errors.bank_account_number}</p>
                )}
            </div>

            <div className="space-y-1 mb-4">
                <label htmlFor="isntapay_account" className="text-[#656C77] text-[16px] leading-[24px] font-[500]">isntapay account</label>
                <input
                    type="text"
                    id="isntapay_account"
                    {...formik.getFieldProps('isntapay_account')}
                    className="w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]"
                />
                {formik.touched.isntapay_account && formik.errors.isntapay_account && (
                    <p className="text-red-500 text-sm">{formik.errors.isntapay_account}</p>
                )}
            </div>


            <div className="space-y-1">
                <label
                    htmlFor="nationality_id"
                    className="text-[#656C77] text-[16px] leading-[24px] font-[500]"
                >
                    Nationality
                </label>
                <select
                    id="nationality_id"
                    {...formik.getFieldProps('nationality_id')}
                    className="w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]"
                >
                    <option value="">Select a nationality</option>
                    {nationalities.map((nationality) => (
                        <option key={nationality.id} value={nationality.id}>
                            {nationality.name}
                        </option>
                    ))}
                </select>
                {formik.touched.nationality_id && formik.errors.nationality_id && (
                    <p className="text-red-500 text-sm">{formik.errors.nationality_id}</p>
                )}
            </div>

            <div className="space-y-1 mb-4">
                <label htmlFor="national_id" className="text-[#656C77] text-[16px] leading-[24px] font-[500]">national ID</label>
                <input
                    type="text"
                    id="national_id"
                    {...formik.getFieldProps('national_id')}
                    className="w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] outline-none text-[16px]"
                />
                {formik.touched.national_id && formik.errors.national_id && (
                    <p className="text-red-500 text-sm">{formik.errors.national_id}</p>
                )}
            </div>

            <div className='space-y-1 col-span-2'>
                <label htmlFor="national_id_image" className='text-[#656C77] text-[16px] leading-[24px] font-[500]'>national ID image</label>
                <div>
                    <div
                        className="border-[1px] border-dashed border-[#009444] rounded-lg p-6 text-center cursor-pointer hover:bg-gray-100"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        onClick={handleClick} // Makes the dropzone clickable
                    >
                        <div className='flex justify-center items-center mx-auto mb-2 w-8 h-8 rounded-[10px] bg-[#009444]'>
                            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.72476 3.5579C3.48069 3.80198 3.48069 4.19771 3.72477 4.44178C3.96885 4.68586 4.36457 4.68586 4.60865 4.44178L6.87501 2.1754V12.3332C6.87501 12.6784 7.15483 12.9582 7.50001 12.9582C7.84519 12.9582 8.12501 12.6784 8.12501 12.3332V2.17538L10.3914 4.44178C10.6355 4.68586 11.0312 4.68586 11.2753 4.44178C11.5194 4.1977 11.5194 3.80197 11.2753 3.5579L7.94195 0.22456C7.82474 0.10735 7.66577 0.0415031 7.50001 0.0415039C7.33425 0.0415047 7.17528 0.107354 7.05807 0.224564L3.72476 3.5579ZM2.78322 6.89078C2.99911 6.62146 2.9558 6.22811 2.68648 6.01221C2.41715 5.79631 2.0238 5.83962 1.80791 6.10894C0.807302 7.35716 0.208374 8.94275 0.208374 10.6665C0.208374 14.6936 3.47296 17.9582 7.50004 17.9582C11.5271 17.9582 14.7917 14.6936 14.7917 10.6665C14.7917 8.94275 14.1928 7.35716 13.1922 6.10894C12.9763 5.83962 12.5829 5.79631 12.3136 6.01221C12.0443 6.22811 12.001 6.62146 12.2169 6.89078C13.0461 7.92523 13.5417 9.23714 13.5417 10.6665C13.5417 14.0032 10.8368 16.7082 7.50004 16.7082C4.16332 16.7082 1.45837 14.0032 1.45837 10.6665C1.45837 9.23714 1.95397 7.92523 2.78322 6.89078Z" fill="white" />
                            </svg>
                        </div>
                        <p className="text-[#40444C] text-[14px]">Drag & Drop or <span className='text-[#009444]'>choose file</span> to upload</p>
                        <p className="text-[#949494] text-[10px]">Supported ats : Jpeg, pdf</p>
                        <input
                            type="file"
                            id='national_id_image'
                            accept=".jpeg, .jpg, .pdf"
                            ref={fileInputRef} // Reference to the hidden input
                            onChange={handleFileInputChange}
                            className="hidden"
                        />
                    </div>
                    <ul className="mt-4 text-sm text-gray-70">
                        {files.length > 0 &&
                            files.map((file, index) => (
                                <li key={index} className="border p-2 rounded mb-2">
                                    {file.name}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>

            <Button type="submit" className="col-span-2 w-36 ml-auto">Confirm</Button>
        </form>
    );
};

export default RenderProfileInfo;
