'use client';

import Typography from '@/components/common/Typography';
import Divider from '@/components/ui/Divider';
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

type FormDataTypes = {
  otp: string[];
};

const VerifyPage = () => {
  const {
    handleSubmit,
    control,
    setFocus,
    getValues,
    formState: { errors },
  } = useForm<FormDataTypes>({
    defaultValues: {
      otp: ['', '', '', ''], // Default for 4 OTP inputs
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleOtpSubmit = async (data: FormDataTypes) => {
    setIsLoading(true);

    const finalOtp = data.otp.join(''); // Combine the OTP array into a single string
    console.log('Submitted OTP:', finalOtp);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    // Handle form success or errors here
  };

  useEffect(() => {
    // Set focus on the first input when the component loads
    setFocus('otp.0');
  }, [setFocus]);

  console.log('error', errors.otp);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F2F1F6] rounded-[30px]">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <Typography
          as="h2"
          type="h2"
          className="text-2xl font-semibold text-center text-gray-800"
        >
          Verification
        </Typography>
        <Divider className="w-[100px]" />
        <Typography as="h1" type="h1" className="mt-6">
          Enter OTP code
        </Typography>
        <form
          onSubmit={handleSubmit(handleOtpSubmit)}
          className="flex flex-col gap-4 items-start mt-[30px]"
        >
          {/* OTP Inputs */}
          <div>
            <div className="flex justify-center gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <Controller
                  key={index}
                  name={`otp.${index}`}
                  control={control}
                  rules={{
                    required: 'This field is required',
                    pattern: {
                      value: /^[0-9]$/,
                      message: 'Only numeric values are allowed',
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      maxLength={1}
                      className={`w-12 h-12 sm:w-14 sm:h-14 text-center border border-gray-300 rounded-[10px] text-lg font-semibold focus:outline-none ${
                        errors.otp?.[index]
                          ? 'border-red-500 focus:ring-red-500'
                          : 'focus:ring-[#003062]'
                      }`}
                      onChange={(e) => {
                        const value = e.target.value.slice(-1);
                        field.onChange(value);

                        // Auto focus to next input
                        if (value && index < 3) {
                          setFocus(`otp.${index + 1}`);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (
                          e.key === 'Backspace' &&
                          !getValues(`otp.${index}`)
                        ) {
                          if (index > 0) setFocus(`otp.${index - 1}`);
                        }
                      }}
                    />
                  )}
                />
              ))}
            </div>

            {/* Error Message */}
            {errors.otp && (
              <p className="text-red-500 text-sm">
                {errors.otp[0]?.message ||
                  errors.otp[1]?.message ||
                  errors.otp[2]?.message ||
                  errors.otp[3]?.message}
              </p>
            )}
          </div>

          <Typography as="p" type="p" className="text-sm mt-[10px]">
            Enter the confirmation code we just send you in your Email.
            Don&apos;t receive a code?{' '}
            <span className="font-bold cursor-pointer">resend</span>
          </Typography>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#003062] text-white p-5 rounded-input focus:outline-none focus:ring-2 focus:ring-[#003062] focus:ring-offset-2"
            disabled={isLoading}
          >
            {isLoading ? 'Verifying...' : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyPage;
