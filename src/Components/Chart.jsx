import React from 'react'
import anaone from '../assets/market.png'
import anatwo from '../assets/all.png'

const Chart = () => {
    return (
        <>
            <div className='bg-[#121212] w-[40%] rounded m-2'>
               <img className='w-[90%] h-[20] mt-5 ml-8 rounded' src={anaone} alt="" />  
               <img className='w-[90%] h-[20] mt-5 ml-8 rounded' src={anatwo} alt="" />  
            </div>
        </>

    )
}

export default Chart