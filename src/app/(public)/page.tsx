import Typography from '@/components/common/Typography'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { BsFillPlayFill } from "react-icons/bs";
// @ts-expect-error: TypeScript cannot resolve files in the public folder
import resumeView from "../../../public/images/wiz-home.PNG";


const MotherPage = () => {
    return (
        <div className="relative font-poppins">
            {/* Background that spans the full viewport */}
            <div className="absolute inset-0 -left-[50px] -right-[50px] bg-[#003062] -z-10"></div>

            {/* Main Content */}
            <div className="py-[50px]">
                <Typography as="h3" type="h3" className="text-white text-center">
                    More than a resume builder
                </Typography>
                <Typography as="h1" type="h1" className="heading-primary">
                    Your <span className="bg-blue-500 block max-w-fit ml-2.5 mr-1 pt-1 pb-2 pr-2">resume</span> profile is your
                </Typography>
                <Typography as="h1" type="h1" className="heading-primary">
                    personal <span className="bg-blue-500 block max-w-fit ml-2.5 mr-1 pt-1 pb-2 pr-2">marketing</span> tool!
                </Typography>
                <div className="mt-[22px] mb-12">
                    <Typography as="p" type="p" className="text-white text-center font-light">
                        As the first-ever website experience platform, Wezard lets experience & upcoming professionals
                    </Typography>
                    <Typography as="p" type="p" className="text-white text-center font-light">
                        come together to build, manage, and optimize digital profile experiences that express them.
                    </Typography>
                </div>
                <div className="flex justify-center items-center space-x-1">
                    <Link href="/join" className="px-8 py-3 bg-blue-500 text-white rounded-2xl text-xs font-medium hover:bg-gray-400">
                        Join now for free
                    </Link>
                    <Link href="/join" className="px-6 py-3 bg-white text-black rounded-2xl text-xs font-medium hover:bg-gray-400">
                        Login
                    </Link>
                    <Link href="/join" className="flex items-center px-8 py-2 bg-transparent text-white border border-white rounded-2xl text-xs font-medium hover:bg-gray-400">
                        Watch Demo
                        <BsFillPlayFill color="white" className="w-6 h-6" />
                    </Link>
                </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center overflow-hidden">
                <Image
                    src={resumeView}
                    alt="Resume view image"
                    property='true'
                    style={{
                        maxWidth: "100%",
                        height: "auto"
                    }}
                />
            </div>
        </div>
    )
}

export default MotherPage