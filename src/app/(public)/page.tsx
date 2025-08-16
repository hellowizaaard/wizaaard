import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import resumeView from '../../../public/images/hero-banner.png';
import Typography from '@/components/ui/Typography';
import { TbPlayerPlayFilled } from 'react-icons/tb';
import HowWizaaardWorksSection from '@/components/public/Home/HowWizaaardWorksSection';
import QuickStepSection from '@/components/public/Home/QuickStepSection';
import FAQSection from '@/components/FAQSection';
import Marquee from 'react-fast-marquee';

const MotherPage = async () => {
  return (
    <div className="font-poppins ">
      {/* Background that spans the full viewport */}
      <div className="bg-[#0A1633] rounded-md pb-10 md:pb-16 sm:pb-0">
        <div className="fix-width ">
          <div className="pt-[61px] px-6 sm:px-[38px] xl:grid xl:grid-cols-4 xl:gap-4">
            <div className="xl:col-span-3">
              <Typography as="p" type="p" className="text-white">
                More than a resume builder
              </Typography>
              <Typography as="h1" type="h1" className="text-white">
                Your <span className="text-primary">resume</span> profile is
                your <br className="hidden xxl:block" /> personal
                <span className="text-primary"> marketing</span> tool!
              </Typography>
              {/* <Typography
                as="h1"
                type="h1"
                className="text-white md:whitespace-nowrap"
              >
                personal <span className="text-primary">marketing</span> tool!
              </Typography> */}
              <Typography
                as="p"
                type="p"
                className="text-white mt-[43px] mb-[43px] sm:mb-[90px]"
              >
                &quot;Wizaaard is the world’s first website experience
                platform—empowering both rising and seasoned professionals to
                create, manage, and optimize digital profiles that truly
                represent who they are.&quot;
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
                    href="/register"
                    className="px-[75px] py-[15px] bg-primary text-white rounded-[10px] text-sm font-semibold hover:bg-white hover:text-black"
                  >
                    Join now for free
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section
        <div className="px-[38px]">
          <div className="relative flex justify-center bg-slate-500 rounded-tl-[32px] rounded-tr-[32px] p-5 border-[2px] border-textGrey overflow-hidden">
            <Image
              src={resumeView}
              alt="Resume view image"
              style={{
                maxWidth: '100%',
                height: '700px',
              }}
            />
            Fade overlay
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
          </div>
        </div> */}
          {/* Image Section */}
          <div className="hidden xxl:block px-[38px]">
            <div className="relative flex justify-center bg-slate-500 rounded-tl-[32px] rounded-tr-[32px] p-5 border-[2px] border-b-0 border-textGrey overflow-hidden">
              <Image
                src={resumeView}
                alt="Resume view image"
                width={0}
                height={0}
                sizes="100vw"
                className="h-[700px] w-auto object-contain"
              />

              {/* Bottom 20% Fade-Out Overlay */}
              {/* <div className="pointer-events-none absolute bottom-[118px] left-0 w-full h-[20%] bg-gradient-to-t from-white to-transparent" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[18%] bg-white" /> */}
            </div>
          </div>
        </div>
      </div>
      {/* Button Grid Section */}
      <div className="mt-10 fix-width sm:px-[38px] flex flex-col space-y-[22px] overflow-hidden">
        <Marquee
          direction="left"
          speed={40}
          className="relative z-10"
          gradient={true}
          gradientColor="#FFFFFF"
        >
          <div className="flex gap-6 mx-2">
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Frontend Engineer
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Graphic Designer
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              EEE Engineer
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Full-stack Developer
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Content Writer
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Advocate
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Motion Designer
            </button>
          </div>
        </Marquee>

        <Marquee
          direction="right"
          speed={40}
          className="relative z-10"
          gradient={true}
          gradientColor="#FFFFFF"
        >
          <div className="flex gap-6 mx-2">
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Frontend Engineer
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Web Developer
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              UI/UX Designer
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Product Manager
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Data Scientist
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              DevOps Engineer
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Software Architect
            </button>
          </div>
        </Marquee>

        <Marquee
          direction="left"
          speed={40}
          className="relative z-10"
          gradient={true}
          gradientColor="#FFFFFF"
        >
          <div className="flex gap-6 mx-2">
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Frontend Engineer
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Digital Marketer
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Business Analyst
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Cloud Engineer
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              ML Engineer
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              System Admin
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Network Engineer
            </button>
          </div>
        </Marquee>

        <Marquee
          direction="right"
          speed={40}
          className="relative z-10"
          gradient={true}
          gradientColor="#FFFFFF"
        >
          <div className="flex gap-6 mx-2">
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Frontend Engineer
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Mobile Developer
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Game Developer
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Security Engineer
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              QA Engineer
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Frontend Developer
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-6 py-3 shadow whitespace-nowrap">
              Backend Developer
            </button>
          </div>
        </Marquee>
      </div>

      <div className="mt-10">
        <HowWizaaardWorksSection />
        <QuickStepSection />
        <FAQSection />
      </div>
      <div className="mt-10 fix-width px-[38px] "></div>
    </div>
  );
};

export default MotherPage;
