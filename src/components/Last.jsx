import React from 'react'
import MegaLine from '../assets/MegaLine.svg'

const Last = () => {
  return (
    <div className='bg-[#00113B] text-white flex justify-between'>
        <div className='flex gap-[81px] text-[20px] mt-60 ml-300'>
        <a href="">Home</a>
        <a href="">Works</a>
        <a href="">About</a>
        <a href=''>Pricing </a>
        <a href="">About</a>
      </div>
      <div className=''>
        <p className='mt-60 ml-[-1750px]'>© 2021 Creative Agency</p>
      </div>
      <div className='mt-35 ml-85 absolute'>
        <img src={MegaLine}/>
      </div>
    </div>
  )
}

export default Last