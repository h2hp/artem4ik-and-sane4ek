import React from 'react'
import { ArrowRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import plits from '../assets/plits.svg'

const slider = () => {
  return (
        <div className="bg-[url(src/assets/Orange.svg)] bg-no-repeat bg-cover mt-80">
            <p className='text-white text-[170px] ml-230'>“</p>
            <p className='text-white text-[25px] ml-150 mt-[-80px]'>We are serious about providing our best service to <br /> all the customers we help. Customers satisfaction is <br /> our number one priority.</p>
            <div className=" bg-[#4C40F7] text-white rounded-full w-[50px] h-[50px] flex items-center justify-center ml-430">
                <ArrowRight />
        </div>
            <div className=" bg-white text-black rounded-full w-[50px] h-[50px] flex items-center justify-center ml-10 mt-[-50px]">
                <ArrowLeft />
            </div>
            <div className="text-white text-[28px] ml-210 mt-10">Mark Garfied</div>
            <div className="text-white text-[28px] ml-193 mt-10">CEO & Head of Product</div>
            <img src={plits} className='m-auto mt-0'></img>
        </div>
  )
}

export default slider