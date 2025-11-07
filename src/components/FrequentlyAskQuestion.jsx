import React from 'react'
import Line from '../assets/Line.svg'
import { ChevronUp } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const FrequentlyAskQuestion = () => {
    return (
        <div className='' class='BackGroundCheck'>
            <div className='text-[#ff2d59]  text-2xl text-center mt-30 '>
                <p className='font-medium font-semibold'> Frequently Ask Question</p>
                <div className='text-[48px] text-2xl text-center mt-10  text-black'>
                    <p className='font-medium font-semibold'>Some of our frequently asked questions</p>
                    <div className='mt-10 border-[#4C40F7] border-2 bg-white rounded-2xl shadow-xl w-[1120px] h-[240px] ml-100'>
                        <p className='font-semibold text-black text-[16px] mt-10 ml-10 flex'> What are the services provided to customers? </p>
                        <img className='mt-10 ml-10' src={Line} />
                        <p className='text-[18px] font-Poppins text-grey mt-10'>Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, <br /> develop websites and mobile applications, provide support for the growth of business ideas, to help customers <br /> market their products online through the marketplace.</p>
                        <div className='ml-260 mt-[-180px]'>
                            <ChevronUp />
                            <div className='absolute text-[16px] font-Poppins text-grey mt-60 ml-[-1045px] font-semibold mt-10 border-[#4C40F7] border-2 bg-white rounded-2xl shadow-xl w-[1120px] h-[120px]'>
                                <p className='mt-11 ml-[-600px]'>How can I submit a proposal for cooperation?</p>
                                <div className='mt-[-24px] ml-261'>
                                    <ChevronDown />
                                    <div className='absolute text-[16px] font-Poppins text-grey mt-30 ml-[-1045px] font-semibold mt-10 border-[#4C40F7] border-2 bg-white rounded-2xl shadow-xl w-[1120px] h-[120px]'>
                                        <p className='mt-13 ml-[-60px]'>I come from a faraway place, can collaboration be done full time online through several meeting applications?</p>
                                        <div className='mt-[-24px] ml-261'>
                                            <ChevronDown />
                                            <div className='absolute text-[16px] font-Poppins text-grey mt-30 ml-[-1045px] font-semibold mt-10 border-[#4C40F7] border-2 bg-white rounded-2xl shadow-xl w-[1120px] h-[120px]'>
                                                <p className='mt-13 ml-[-650px]'>How do I get the payment complete?</p>
                                                <div className='mt-[-24px] ml-261'>
                                                    <ChevronDown />
                                                    <div className='absolute text-[16px] font-Poppins text-grey mt-30 ml-[-1045px] font-semibold mt-10 border-[#4C40F7] border-2 bg-white rounded-2xl shadow-xl w-[1120px] h-[120px]'>
                                                        <p className='mt-13 ml-[-650px]'>How long can the collaboration last?</p>
                                                        <div className='mt-[-24px] ml-261'>
                                                            <ChevronDown />
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

export default FrequentlyAskQuestion