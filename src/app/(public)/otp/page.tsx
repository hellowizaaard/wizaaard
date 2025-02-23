'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import Typography from '@/components/common/Typography';
import Divider from '@/components/ui/Divider';

interface FromDataTypes {
  otpEmail: string;
}

const OtpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FromDataTypes>();

  const onSubmit: SubmitHandler<FromDataTypes> = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F2F1F6] rounded-[30px]">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          OTP
        </h2>
        <Divider />
        <div className="mt-6 mb-[50px]">
          <Link href="/login" className="text-sm hover:underline">
            Remember ID & Password?{' '}
            <span className="font-semibold"> Log in</span>
          </Link>
        </div>
        <div className="mt-[10px]">
          <Typography as="h2" type="h2">
            Login with OTP code
          </Typography>
          <Typography as="p" type="p" className="text-sm mt-[10px]">
            Enter your registered email, which was{' '}
            <span className="font-bold">r*******9@gmail.com</span>
          </Typography>
        </div>

        <form className="mt-[50px]" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label> */}
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              {...register('otpEmail', { required: 'Email is required' })}
              className={`mt-1 block w-full p-5 border rounded-input shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                errors.otpEmail ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.otpEmail && (
              <p className="mt-1 text-sm text-red-600">
                {typeof errors.otpEmail.message === 'string'
                  ? errors.otpEmail.message
                  : ''}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#003062] text-white p-5 rounded-input focus:outline-none focus:ring-2 focus:ring-[#003062] focus:ring-offset-2"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpPage;
