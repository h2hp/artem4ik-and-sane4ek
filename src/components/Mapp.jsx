import React from "react"
import Coco from '../assets/coco.svg'
import Map  from "../assets/map.svg"

const Mapp =() => {
  return (
    <div className="bg-[#00113B] text-white flex justify-between">
        <div className="">
            <img className="pt-10 pl-[150px]" src={Coco} alt=""/>
            <div className="pl-[180px] pt-15">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco laboris nisi ut aliquip ex <br /> ea commodo consequat. Duis aute irure <br /> dolor in reprehenderit in voluptate velit esse <br /> cillum dolore eu fugiat nulla pariatur.</div>
        </div>
        <div className="">
            <img src={Map} alt="" className='mt-35' />
        </div>
        <div className="">
            <p className="text-[25px] pt-15 pb-[80px] mt-20">Contact</p>
            <p className="pb-[25px]">Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki Jakarta</p>
            <p className="pb-[25px]">info@yourdomain.com</p>
            <p>+62 (0) 000 0000 00</p>
        </div>
    </div>
)
}

export default Mapp