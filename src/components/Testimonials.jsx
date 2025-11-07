import React from 'react'
import { Star } from 'lucide-react';
import GoodGuy from '../assets/GoodGuy.svg'
import GoodGuy2 from '../assets/GoodGuy2.svg'
import GoodGuy3 from '../assets/GoodGuy3.svg'
import GoodGirl from '../assets/GoodGirl.svg'
import stars from '../assets/stars.svg'

const Testimonials = () => {
  return (
    <div className=''>
            <div className=''>
                <p className='text-[#ff2d59] font-medium text-2xl text-center mt-210 font-semibold'>Testimonials</p>
                    <div className=''>
                        <p className='text-black font-medium text-2xl text-center mt-10 font-semibold font-medium font-semibold'>Some testimonials from our customers</p>
                        <div className='w-[352px] h-[370px] ml-50 mt-70 bg-white rounded-2xl shadow-[-10px_30px_70px_rgba(76,64,247,0.5)] shadow-indigo-500/50'>
                                  <div className=''>  
                                <p className='text-[24px] font-Poppins text-[#111029] ml-18 mt-[150px] font-semibold absolute'>Ronald Richards</p>
                                  </div>
                                  <div className=''>
                                    <p className='text-[18px] font-Poppins text-[#70798B] ml-30 mt-50 absolute'>Google inc.</p>  
                                  </div>
                                  <div className=''>
                                    <p className='text-[20px] font-Poppins text-[#70798B] ml-6 mt-60 absolute'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt.</p>
                                  </div>
                                  <div className=''>
                                <img src={GoodGuy} alt='' className='ml-21 mt-[-170px]'/>
                                  </div>
                                  <div className=''>
                                <img src={stars} alt='' className='ml-28 mt-[160px]'/>
                                  </div>
                      <div className=''>
                               <div className='w-[352px] h-[370px] ml-100 mt-0 bg-white rounded-2xl shadow-[-10px_30px_70px_rgba(76,64,247,0.5)] shadow-indigo-500/50'>
                                  <div className=''>
                                <p className='text-[24px] font-Poppins text-[#111029] ml-24 mt-[150px] font-semibold absolute'>Guy Hawkins</p>
                                  </div>
                                  <div className=''>
                                    <p className='text-[18px] font-Poppins text-[#70798B] ml-31 mt-50 absolute'>Google inc.</p>  
                                  </div>
                                  <div className=''>
                                    <p className='text-[20px] font-Poppins text-[#70798B] ml-6 mt-60 absolute'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt.</p>
                                  </div>
                                  <div className=''>
                                <img src={GoodGuy2} alt='' className='ml-29 mt-[-170px]'/>
                                  </div>
                                  <div className=''>
                                <img src={stars} alt='' className='ml-28 mt-[225px]'/>
                        <div className=''>
                               <div className='w-[352px] h-[370px] ml-100 mt-0 bg-white rounded-2xl shadow-[-10px_30px_70px_rgba(76,64,247,0.5)] shadow-indigo-500/50'>
                                  <div className=''>
                                <p className='text-[24px] font-Poppins text-[#111029] ml-22 mt-[150px] font-semibold absolute'>Kristin Watson</p>
                                  </div>
                                  <div className=''>
                                    <p className='text-[18px] font-Poppins text-[#70798B] ml-31 mt-50 absolute'>Google inc.</p>  
                                  </div>
                                  <div className=''>
                                    <p className='text-[20px] font-Poppins text-[#70798B] ml-6 mt-60 absolute'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt.</p>
                                  </div>
                                  <div className=''>
                                <img src={GoodGirl} alt='' className='ml-29 mt-[-170px]'/>
                                  </div>
                                  <div className=''>
                                <img src={stars} alt='' className='ml-28 mt-[225px]'/>
                          <div className=''>
                               <div className='w-[352px] h-[370px] ml-100 mt-[-100] bg-white rounded-2xl shadow-[-10px_30px_70px_rgba(76,64,247,0.5)] shadow-indigo-500/50'>
                                  <div className=''>
                                <p className='text-[24px] font-Poppins text-[#111029] ml-27 mt-[150px] font-semibold absolute'>Robert Fox</p>
                                  </div>
                                  <div className=''>
                                    <p className='text-[18px] font-Poppins text-[#70798B] ml-31 mt-50 absolute'>Google inc.</p>  
                                  </div>
                                  <div className=''>
                                    <p className='text-[20px] font-Poppins text-[#70798B] ml-6 mt-60 absolute'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt.</p>
                                  </div>
                                  <div className=''>
                                <img src={GoodGuy3} alt='' className='ml-29 mt-[-170px]'/>
                                  </div>
                                  <div className=''>
                                <img src={stars} alt='' className='ml-28 mt-[225px]'/>
                                </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials