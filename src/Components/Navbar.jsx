import React from 'react'
import logo from '../assets/logo.png'
import user from '../assets/user-1.png'

const Navbar = () => {
  return (
    <div className='bg-[#121212] w-screen flex gap-2 items-center'>
        <img className='w-10 ml-5' src={logo} alt="" />
        <h1 >Safe wallet</h1>
        <img className='w-10 rounded-full absolute right-10' src={user} alt="" />
    </div>
  )
}

export default Navbar