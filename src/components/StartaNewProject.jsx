import React from 'react'
import { ArrowRight } from 'lucide-react';
import Start from '../assets/Start.svg'

const StartaNewProject = () => {
    return (
        <div className=''>
            <div className="bg-[url(src/assets/Start.svg)]  bg-no-repeat mt-160 ml-100 items-center align-middle text-center justify-center flex">
            <p className='text-white text-[42px] ml-90 mt-200 font-semibold'></p>
            <a href="" className='bg-[#4c40f7] rounded-2xl text-white px-[70px] absolute w-70 h-20 ml-[-400px] mt-[-250px] '>
                <p className='font-semibold text-[20px] mt-6 ml-[10px]'>Start Now</p>
                <div className="ml-[170px] mt-[-25px]">
                    <ArrowRight/>
                </div>
            </a>
            <div className='ready'>
            </div>
            </div>
        </div>

    )
}

export default StartaNewProject