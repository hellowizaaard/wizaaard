'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Divider from '@/components/ui/Divider';

interface FromDataTypes {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FromDataTypes>();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit: SubmitHandler<FromDataTypes> = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F2F1F6] rounded-[30px]">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Login
        </h2>
        <Divider className="w-[70px]" />
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <Link href="/register" className="text-sm hover:underline">
              Don&apos;t have an account?{' '}
              <span className="font-semibold">Register now</span>
            </Link>
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email', { required: 'Email is required' })}
              className={`mt-1 block w-full p-3 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {typeof errors.email.message === 'string'
                  ? errors.email.message
                  : ''}
              </p>
            )}
          </div>

          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="flex items-center relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                {...register('password', { required: 'Password is required' })}
                className={`mt-1 block w-full p-3 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-4 text-gray-600 focus:outline-none"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {typeof errors.password.message === 'string'
                  ? errors.password.message
                  : ''}
              </p>
            )}
          </div>

          <Link href="/otp" className="text-blue-500 hover:underline">
            Forget Password? Then Login with OTP
          </Link>

          <button
            type="submit"
            className="mt-[52px] w-full bg-[#003062] text-white py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003062] focus:ring-offset-2"
          >
            Continue
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          By clicking &quot;Register now/Login&quot; you agree to our
          <span className="text-blue-600 hover:underline"> Terms</span>. Learn
          how we process your data in our
          <span className="text-blue-600 hover:underline"> privacy policy</span>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
