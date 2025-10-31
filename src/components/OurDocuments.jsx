import React from 'react'
import business from '../assets/business.svg'

const OurDocuments = () => {
    return (
        <div className="bg-[url(src/assets/BgOk.svg)] bg-no-repeat bg-cover">
            <div className='text-[#ff2d59] font-medium text-2xl text-center mt-30 font-semibold'>
                <p>Our Documentation</p>
            </div>
            <div className='text-black font-medium text-center mt-7 font-semibold text-[42px] '>
                <p>See what our profile is like and how we work for your <br/> business
                </p>
            </div>
            <div className=''>
                <img src={business} alt='' className='m-auto mt-20'/>
            </div>
        </div>
    );
}

export default OurDocuments