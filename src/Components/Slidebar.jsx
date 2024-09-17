import React from 'react'
import  dashboard from '../assets/dashboard.png'
import  acadamy from '../assets/acadamy.png'
import  network from '../assets/network.png'
import  tools from '../assets/tools.png'
import  settings from '../assets/settings.png'

const Slidebar = () => {
  return (
    <div className='bg-[#121212] w-[20%] block rounded  '>
        <div className='bg-[#e2e8f0] text-black w-[50%] h-[7%] rounded-md m-7 ml-14 cursor-pointer flex align-baseline mt-14'>
            <img className='w-5 m-3 ml-5' src={dashboard} alt="" />
            <h1 className='text-center pt-2.5 font-bold'>Dashbord</h1>
        </div>       
        <div className='bg-[#e2e8f0] text-black w-[50%] h-[7%] rounded-md m-7 ml-14 cursor-pointer flex align-baseline'>
            <img className='w-5 m-3 ml-5' src={acadamy} alt="" />
            <h1 className='text-center pt-2.5 font-bold'>Acadamy</h1>
        </div>
        <div className='bg-[#e2e8f0] text-black w-[50%] h-[7%] rounded-md m-7 ml-14 cursor-pointer flex align-baseline'>
            <img className='w-5 m-3 ml-5' src={network} alt="" />
            <h1 className='text-center pt-2.5 font-bold'>Network</h1>
        </div>
        <div className='bg-[#e2e8f0] text-black w-[50%] h-[7%] rounded-md m-7 ml-14 cursor-pointer flex align-baseline'>
            <img className='w-5 m-3 ml-5' src={tools} alt="" />
            <h1 className='text-center pt-2.5 font-bold'>Tools</h1>
        </div>
        <div className='bg-[#e2e8f0] text-black w-[50%] h-[7%] rounded-md m-7 ml-14 cursor-pointer flex align-baseline'>
            <img className='w-5 m-3 ml-5' src={settings} alt="" />
            <h1 className='text-center pt-2.5 font-bold'>Setting</h1>
        </div>
        
       
        
    </div>
  )
}

export default Slidebar