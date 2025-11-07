import React from 'react'
import { SendHorizontal } from 'lucide-react';

const Subscribe = () => {
    return (
        <div className='bg-[url(src/assets/Blue.svg)]  bg-no-repeat ml-100 items-center align-middle text-center justify-center flex'>
            <p className='font-poppins text-[16px] text-white ml-[-300px] mt-[-120px]'>Get Notified About Project</p>
            <div className=''>
                <p className='font-poppins text-[42px] text-white ml-[-310px] mt-30'>Subscribe Now</p>
                <p className='font-poppins text-[1px] text-white ml-[-200000px] mt-30'>Subscribe Now</p>
            </div>
            <div className='absolute'>
                <input className='bg-white w-100 h-10 rounded-2xl mt-50 ml-[-450px] p-1.5' type='text-[18px]' placeholder='Email'></input>
                <div className='mt-[-32px] ml-[-50] absolute text-[#ABAFC7]'>
                    <SendHorizontal/>
                </div>
            </div>
        </div>
    )
}

export default Subscribe