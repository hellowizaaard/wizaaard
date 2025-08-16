'use client';

import Link from 'next/link';
import { IoMdHome } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0F1B] flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full space-y-12 text-center">
        {/* 404 Text */}
        <div className="relative">
          <h1 className="text-[180px] font-bold text-gray-100 leading-none">
            404
          </h1>
        </div>

        {/* Description */}
        <div className="pt-10">
          <h2 className="text-4xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600">
            Oops! The page you&apos;re looking for seems to have taken a wrong
            turn.
          </p>
          <p className="text-gray-500 mt-2">
            Don&apos;t worry, we&apos;ll help you find your way back.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-6">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:opacity-90 transition-all duration-200 group"
          >
            <IoMdHome className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-8 py-3 bg-[#1C2333] text-white rounded-full shadow-lg hover:bg-[#252D42] transition-all duration-200 group border border-gray-700"
          >
            <IoArrowBack className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
