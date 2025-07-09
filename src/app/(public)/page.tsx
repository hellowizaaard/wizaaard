import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import resumeView from '../../../public/images/hero-banner.png';
import Typography from '@/components/ui/Typography';
import { TbPlayerPlayFilled } from 'react-icons/tb';

const MotherPage = async () => {
  return (
    <div className="font-poppins">
      {/* Background that spans the full viewport */}
      <div className="fix-width bg-heroBackground rounded-md">
        <div className="pt-[61px] px-[38px] grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <Typography as="p" type="p" className="text-white">
              More than a resume builder
            </Typography>
            <Typography
              as="h1"
              type="h1"
              className="text-white whitespace-nowrap"
            >
              Your <span className="text-primary">resume</span> profile is your
            </Typography>
            <Typography
              as="h1"
              type="h1"
              className="text-white whitespace-nowrap"
            >
              personal <span className="text-primary">marketing</span> tool!
            </Typography>
            <Typography
              as="p"
              type="p"
              className="text-white mt-[43px] mb-[90px]"
            >
              &quot;Wizaaard is the world’s first website experience
              platform—empowering both rising and seasoned professionals to
              create, manage, and optimize digital profiles that truly represent
              who they are.&quot;
            </Typography>
          </div>
          <div className="flex flex-col items-center -mt-3">
            <div className="p-[28px] bg-slate-500 rounded-full">
              <div className="p-[34px] bg-gray-400 rounded-full">
                <div className="p-[29px] bg-gray-300 rounded-full">
                  <div className="p-5 bg-white rounded-full">
                    <TbPlayerPlayFilled className="w-[34px] h-[34px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[30px]">
              <div>
                <Link
                  href="/join"
                  className="px-[75px] py-[15px] bg-primary text-white rounded-[10px] text-sm font-semibold hover:bg-white hover:text-black"
                >
                  Join now for free
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="px-[38px]">
          <div className="flex justify-center bg-slate-500 rounded-tl-[32px] rounded-tr-[32px] p-5 border-[2px] border-textGrey ">
            <Image
              src={resumeView}
              alt="Resume view image"
              property="true"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
    </div>
  );
};

export default MotherPage;
