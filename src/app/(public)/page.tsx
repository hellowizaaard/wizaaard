import Typography from '@/components/common/Typography'
import React from 'react'

const MotherPage = () => {
    return (
        <div className="relative w-screen h-[calc(100vh-160px)] bg-[#003062] opacity-100 -left-[50px] ">
            <Typography as="h1" type="h1" className="text-blue-500">
                This is a Home page
            </Typography>

            <Typography as="h2" type="h2" className="text-red-500">
                This is a Heading 2
            </Typography>

            <Typography type="p" className="text-white">
                This is a paragraph with custom styling.
            </Typography>

            <Typography type="caption" className="text-gray-400">
                This is a caption text.
            </Typography>
        </div>
    )
}

export default MotherPage