import React from 'react'
import Logotipes from '../assets/Logotipes.svg'

const SomeofOurGreatCustomers = () => {
  return (
    <div className=''>
        <div className='text-[#ff2d59] font-medium text-2xl text-center mt-350 font-semibold'>
            <p>Some of Our Great Customers</p>
        </div>
        <div className='text-[48px] font-medium text-2xl text-center mt-10 font-semibold'>
            <p>Some of the companies we have worked with</p>
                        <div className='ml-130 mt-15'>
                            <img src={Logotipes} className=''></img>
                        </div>
        </div>
    </div>
  )
}

export default SomeofOurGreatCustomers