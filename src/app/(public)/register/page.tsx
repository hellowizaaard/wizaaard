"use client"

import Divider from "@/components/public/ui/Divider";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
    role: string;
    signupMethod: string;
};

const RegisterPage = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { register, handleSubmit, watch } = useForm<FormData>({
        defaultValues: {
            role: "Graphic Designer",
            signupMethod: "google",
        },
    });

    const onSubmit = (data: FormData) => {
        console.log("Registration Data:", data);
    };

    // const selectedMethod = watch("signupMethod");

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F2F1F6] rounded-[30px]">
            <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-800">Register</h2>
                <Divider className="w-[100px]" />
                {/* Already have an account */}
                <div className="text-sm my-6">
                    Already have an account?{" "}
                    <Link href="/login" className="font-semibold hover:underline">
                        Log in
                    </Link>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    {/* Dropdown: What do you do? */}
                    <div>
                        <label className="block text-2xl font-bold mb-2">What do you do?</label>
                        <select
                            {...register("role")}
                            className="w-full border rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="Graphic Designer">Graphic Designer</option>
                            <option value="Developer">Developer</option>
                            <option value="Marketer">Marketer</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Signup options */}
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <input
                                {...register("signupMethod")}
                                type="radio"
                                value="google"
                                id="signupGoogle"
                                className="form-radio h-4 w-4 text-red-600 focus:ring-red-500"
                            />
                            <label
                                htmlFor="signupGoogle"
                                className="ml-3 text-base font-medium text-gray-700 bg-red-100 px-4 py-2 rounded-full"
                            >
                                Signup With Google
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                {...register("signupMethod")}
                                type="radio"
                                value="email"
                                id="signupEmail"
                                className="form-radio h-4 w-4 text-gray-700 focus:ring-blue-500"
                            />
                            <label
                                htmlFor="signupEmail"
                                className="ml-3 text-base font-medium text-gray-700 bg-gray-100 px-4 py-2 rounded-full"
                            >
                                Signup With Email
                            </label>
                        </div>
                    </div>

                    {/* Continue Button */}
                    <button
                        type="submit"
                        className="mt-[50px] w-full bg-[#003062] text-white py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003062] focus:ring-offset-2"
                    >
                        Continue
                    </button>
                </form>

                {/* Terms and Privacy */}
                <p className="text-sm text-center text-gray-500 mt-6">
                    By clicking &quot;Register now/Login&quot; you agree to our{" "}
                    <span className="font-semibold">Terms</span>. Learn how we process
                    your data in our{" "}
                    <a href="/privacy-policy" className="text-blue-600 font-semibold">
                        privacy policy
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
