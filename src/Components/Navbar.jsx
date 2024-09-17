import React from 'react'
import logo from '../assets/logo.png'
import user from '../assets/user-1.png'

const Navbar = () => {
  return (
    <div className='bg-[#121212] w-screen flex gap-2 items-center rounded'>
        <img className='w-10 ml-5 cursor-pointer' src={logo} alt="" />
        <h1 className='font-bold cursor-pointer' >Safe wallet</h1>
        <h1 className='absolute right-28 cursor-pointer' >Log out</h1>       
        <img className='w-10 rounded-full absolute right-10 cursor-pointer' src={user} alt="" />
    </div>
  )
}

export default Navbar