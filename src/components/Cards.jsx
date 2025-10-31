import React from 'react'
import Ogonek from '../assets/Ogonek.svg'
import pero from '../assets/pero.svg'
import Pc from '../assets/Pc.svg'
import { ArrowRight } from 'lucide-react';
import Phone from '../assets/Phone.svg'
import City from '../assets/City.svg'
import Lines from '../assets/Lines.svg'
const Cards = () => {
  return (
    <div className="">
      <div className="display flex justify-center mt-18 ">
        <div className="flex">
          <div className="w-[322px] h-[438px] bg-[#4C40F7] rounded-2xl shadow-[-10px_30px_70px_rgba(76,64,247,0.5)]">
            <div className=" text-center items-center flex flex-col justify-between p-11 h-full">
              <img className='shadow-[-5px_10px_30px_rgba(76,64,247,0.5)]' src={Ogonek} alt="" />
              <div className="">
                <p className='text-[20px] font-semibold mb-6 text-white'>Ideate</p>
                <p className='text-[15px] font-normal text-white'>We help you develop creative<br />ideas so that your business<br />can grow more rapidly</p>
              </div>
              <div className="bg-white rounded-full p-4 text-[#4C40F7]">
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-[322px] h-[438px] bg-[#ffffff] rounded-2xl shadow-xl hover:bg-[#FF2D59]">
            <div className=" text-center items-center flex flex-col justify-between p-11 h-full">
              <img className='shadow-[-10px_30px_70px_rgba(219,222,225,0.4)]' src={pero} alt="" />
              <div className="">
                <p className='text-[20px] font-semibold mb-6 text-black'>Design</p>
                <p className='text-[15px] font-normal text-black'>We provide services with the<br />best designs than our designer<br />team for your business</p>
              </div>
              <div className="bg-[#F3F4F6] rounded-full p-4 text-[#4C40F7]">
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-[322px] h-[438px] bg-[#ffffff] rounded-2xl shadow-xl hover:bg-[#4ADB6166]">
            <div className=" text-center items-center flex flex-col justify-between p-11 h-full">
              <div className="bg-[#66d433] shadow-xl w-24 h-24 items-center align-middle text-center  justify-center flex rounded-full"  >
                <img className='' src={Pc} alt="" />
              </div>
              <div className="">
                <p className='text-[20px] font-semibold mb-6 text-black'>Web Development</p>
                <p className='text-[15px] font-normal text-black'>We help develop company<br />websites to be more<br />professional and attractive</p>
              </div>
              <div className="bg-[#F3F4F6] rounded-full p-4 text-[#4C40F7]">
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="display flex justify-center mt-16">
        <div className="flex">
          <div className="w-[322px] h-[438px] bg-[#ffffff] rounded-2xl shadow-xl hover:bg-[#FFCC00]">
            <div className=" text-center items-center flex flex-col justify-between p-11 h-full">
              <div className="bg-[#FFCC00]   shadow-xl w-24 h-24 items-center align-middle text-center  justify-center flex rounded-full" >
                <img className='' src={Phone} alt="" />
              </div>
              <div className="">
                <p className='text-[20px] font-semibold mb-6 text-black'>App Development</p>
                <p className='text-[15px] font-normal text-black'>We help develop company<br />mobile apps to be more<br />professional and attractive</p>
              </div>
              <div className="bg-[#F3F4F6] rounded-full p-4 text-[#4C40F7]">
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-[322px] h-[438px] bg-[#ffffff] rounded-2xl shadow-xl hover:bg-[#007BFF]">
            <div className=" text-center items-center flex flex-col justify-between p-11 h-full">
              <div className="bg-[#007BFF] shadow-xl w-24 h-24 items-center align-middle text-center  justify-center flex rounded-full">
                <img className='' src={City} alt="" />
              </div>
              <div className="">
                <p className='text-[20px] font-semibold mb-6 text-black'>Business Growth</p>
                <p className='text-[15px] font-normal text-black'>We also provide services by <br />providing input for your <br />business growth</p>
              </div>
              <div className="bg-[#F3F4F6] rounded-full p-4 text-[#4C40F7]">
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-[322px] h-[438px] bg-[#ffffff] rounded-2xl shadow-xl hover:bg-[#FF6800]">
            <div className=" text-center items-center flex flex-col justify-between p-11 h-full">
              <div className="bg-[#FF6800] shadow-xl w-24 h-24 items-center align-middle text-center rounded-full justify-center flex rounded-full">
                <img className='' src={Lines} alt="" />
              </div>
              <div className="">
                <p className='text-[20px] font-semibold mb-6 text-black'>Digital marketing</p>
                <p className='text-[15px] font-normal text-black'>We also help you market your<br />products through an online<br />marketplace</p>
              </div>
              <div className="bg-[#F3F4F6] rounded-full p-4 text-[#4C40F7]">
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards