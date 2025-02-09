"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../_components/button/Button";
import Link from "next/link";
import toast from "react-hot-toast";

interface ISendOTPprops {
  setShowOTP: (x: boolean) => void;
  setCountry_code: (x: string) => void;
  setPhone: (x: string) => void;
}

interface ICountry {
  id: number;
  name: string;
  phone_code: string;
}

const SendOTP = ({ setShowOTP , setCountry_code , setPhone}: ISendOTPprops) => {
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

  const validationSchema = Yup.object({
    country_code: Yup.string().required("country_code is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be numeric")
      .required("Phone number is required"),
  });

  const handleSendOTP = async (values: { country_code: string; phone: string }) => {

    setCountry_code(values.country_code)
    setPhone(values.phone)

    const formData = new FormData();
    formData.append("country_code", values.country_code);
    formData.append("phone", values.phone);

    try {
      const response = await fetch("https://test.jiovanilibya.org/api/user/resend-otp", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        console.log("OTP sent successfully:", result);
        toast.success("OTP sent successfully");
        setShowOTP(true);
      } else {
        console.error("Error sending OTP:", result);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ country_code: "", phone: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSendOTP}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-8 mb-8">
            <div className="space-y-1">
              <label htmlFor="country_code" className="text-[#656C77] text-[16px] font-[500]">
                Country
              </label>
              <Field
                as="select"
                name="country_code"
                id="country_code"
                className="w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] text-[16px]"
              >
                <option value="" label="Select a country" />
                {countries.map((ele) => (
                  <option key={ele.id} value={ele.phone_code}>
                    {ele.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="space-y-1 flex flex-col">
              <label htmlFor="phone" className="text-[#656C77] text-[16px] font-[500]">
                Phone Number
              </label>
              <Field
                type="text"
                name="phone"
                id="phone"
                className="w-full px-3 py-2 border border-[#ECECEE] bg-white rounded-[8px] text-[16px] outline-0"
              />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
            </div>

            <Button type="submit" className="w-full mb-3" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send OTP"}
            </Button>
          </Form>
        )}
      </Formik>

      <Link href="/auth/signin" className="text-[16px] text-[#79818F] flex items-center justify-center gap-2">
        <svg
          width="21"
          height="16"
          viewBox="0 0 21 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.971293 8.52957C0.830842 8.38895 0.751953 8.19832 0.751953 7.99957C0.751953 7.80082 0.830842 7.6102 0.971293 7.46957L7.95829 0.469571C8.02744 0.397906 8.11018 0.340732 8.20166 0.301383C8.29314 0.262033 8.39155 0.241297 8.49113 0.240386C8.59072 0.239474 8.68948 0.258403 8.78167 0.296071C8.87386 0.333738 8.95763 0.389389 9.02808 0.459775C9.09853 0.530161 9.15426 0.613872 9.19202 0.706027C9.22977 0.798181 9.24879 0.896931 9.24798 0.996516C9.24716 1.0961 9.22651 1.19452 9.18725 1.28605C9.14799 1.37757 9.09089 1.46035 9.01929 1.52957L3.31129 7.24857L19.5013 7.23757C19.7002 7.23731 19.8911 7.31607 20.0319 7.45653C20.1728 7.597 20.252 7.78766 20.2523 7.98657C20.2526 8.18548 20.1738 8.37635 20.0333 8.51719C19.8929 8.65803 19.7022 8.73731 19.5033 8.73757L3.30929 8.74757L9.02029 14.4696C9.09189 14.5388 9.14899 14.6216 9.18825 14.7131C9.22752 14.8046 9.24816 14.903 9.24898 15.0026C9.24979 15.1022 9.23077 15.201 9.19302 15.2931C9.15526 15.3853 9.09953 15.469 9.02908 15.5394C8.95863 15.6098 8.87486 15.6654 8.78267 15.7031C8.69048 15.7407 8.59172 15.7597 8.49213 15.7588C8.39255 15.7578 8.29414 15.7371 8.20266 15.6978C8.11118 15.6584 8.02844 15.6012 7.95929 15.5296L0.971293 8.52957Z"
            fill="#79818F"
          />
        </svg>
        Back to login
      </Link>
    </div>
  );
};

export default SendOTP;
