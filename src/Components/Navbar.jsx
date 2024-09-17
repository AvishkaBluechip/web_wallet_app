import React from 'react'
import logo from '../assets/logo.png'
import user from '../assets/user-1.png'
import logout from '../assets/logout.png'

const Navbar = () => {
  return (
    <div className='bg-[#121212] w-screen flex gap-2 items-center rounded'>
        <img className='w-10 ml-5 cursor-pointer' src={logo} alt="" />
        <h1 className='font-bold cursor-pointer' >Safe wallet</h1>
        <h1 className='absolute cursor-pointer right-28' >Log out</h1> 
        {/* <img className='absolute w-5 bg-white rounded cursor-pointer right-28' src={logout} alt="" />       */}
        <img className='absolute w-10 rounded-full cursor-pointer right-10' src={user} alt="" />
    </div>
  )
}

export default Navbar