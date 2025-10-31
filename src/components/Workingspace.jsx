import React from 'react'
import kich from '../assets/kich.svg'
import kich2 from '../assets/kich2.svg'
import kich3 from '../assets/kich3.svg'
import kich4 from '../assets/kich4.svg'
import kich5 from '../assets/kich5.svg'
import kich6 from '../assets/kich6.svg'


const Workingspace = () => {
  return (
    <div className=''>
        <div className='text-[#ff2d59] font-medium text-2xl text-center mt-350 font-semibold'>
            <p>Working space</p>
        </div>
        <div className='text-[48px] font-medium text-2xl text-center mt-10 font-semibold'>
            <p>Let’s meet our interior room decoration</p>
                        <div className=''>
                            <img src={kich} className='ml-100 mt-20 absolute'></img>
                            <img src={kich2} className='ml-200 mt-20 absolute'></img>
                            <img src={kich3} className='ml-300 mt-20 absolute'></img>
                            <img src={kich4} className='ml-100 mt-125 absolute'></img>
                            <img src={kich5} className='ml-200 mt-160 absolute'></img>
                            <img src={kich6} className='ml-300 mt-140 absolute border-blue-700'></img>
                        </div>
        </div>
    </div>
  )
}

export default Workingspace