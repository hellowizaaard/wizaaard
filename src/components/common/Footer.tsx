'use client';

import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
import {
  FaFacebookSquare,
  // FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import { TbBrandInstagramFilled } from 'react-icons/tb';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white pt-8 pb-4 px-[50px]">
      <div className=" grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* About */}
        <div className="col-span-5">
          <div className="bg-[#FAFAFA] border border-[#E6E8EC] rounded-xl p-6 flex flex-col min-h-[180px]">
            <h3 className="font-semibold text-lg mb-2">About wizaaard</h3>
            <p className="text-sm text-[#23262F] leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took.
            </p>
          </div>
          {/* Contact Info */}
          <div className="mt-6 flex flex-col space-y-6">
            <div className="flex items-center bg-[#FAFAFA] border border-[#E6E8EC] rounded-xl p-6">
              <span className="flex-1 font-medium text-base">
                +88 01765588878
              </span>
              <span className="bg-[#F4F4F4] rounded-lg p-3 ml-2">
                <FaPhoneAlt className="text-xl text-[#B1B5C3]" />
              </span>
            </div>
            <div className="flex items-center bg-[#FAFAFA] border border-[#E6E8EC] rounded-xl p-6">
              <span className="flex-1 font-medium text-base">
                query@wizaaard.com
              </span>
              <span className="bg-[#F4F4F4] rounded-lg p-3 ml-2">
                <FaEnvelope className="text-xl text-[#B1B5C3]" />
              </span>
            </div>
          </div>
        </div>
        {/* Address */}
        <div className="bg-[#FAFAFA] col-span-3 border border-[#E6E8EC] rounded-xl p-6 flex flex-col min-h-[180px]">
          <h3 className="font-semibold text-lg mb-2">Address</h3>
        </div>
        {/* Socials */}
        <div className="col-span-4 flex flex-col gap-4">
          <div
            className="grid grid-cols-2 grid-rows-2 gap-4 h-full min-h-[180px]"
            style={{ height: '100%' }}
          >
            <div className="bg-[#FAFAFA] border border-[#E6E8EC] rounded-xl flex flex-col items-center justify-center h-full w-full">
              <span className="font-semibold mb-2">Facebook</span>
              <FaFacebookSquare className="text-2xl" />
            </div>
            <div className="bg-[#FAFAFA] border border-[#E6E8EC] rounded-xl flex flex-col items-center justify-center h-full w-full">
              <span className="font-semibold mb-2">Instagram</span>
              <TbBrandInstagramFilled className="text-3xl" />
            </div>
            <div className="bg-[#FAFAFA] border border-[#E6E8EC] rounded-xl flex flex-col items-center justify-center h-full w-full">
              <span className="font-semibold mb-2">Linkedin</span>
              <FaLinkedinIn className="text-2xl" />
            </div>
            <div className="bg-[#FAFAFA] border border-[#E6E8EC] rounded-xl flex flex-col items-center justify-center h-full w-full">
              <span className="font-semibold mb-2">Youtube</span>
              <FaYoutube className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mt-6">
        <div className="text-base text-[#23262F]">
          All Rights Reserved &amp; Copyright 2025
          <span className="font-bold ml-1">@wizaaardtechnology</span>
        </div>
        <motion.div
          className="bg-[#FAFAFA] border border-[#E6E8EC] rounded-xl p-6 flex items-center justify-center w-[90px] h-[90px] cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          <motion.svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-[#23262F]"
            initial={{ y: 0 }}
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </motion.svg>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
