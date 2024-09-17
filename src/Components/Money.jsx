import React from 'react'
import coin from '../assets/coin.png'

const Money = () => {
    return (
        <div className='bg-[#121212] w-[40%]  rounded m-2'>
            {/* <div className='h-[80%] bg-[#374151] w-[80%] m-[10%] rounded'>
               
            </div> */}
            <img className='h-[80%] bg-[#374151] w-[50%] m-[10%] ml-40 rounded' src={coin} alt="" />
             
        </div>
    )
}

export default Money