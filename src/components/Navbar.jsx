import React, { useState } from 'react'
import { navLinks } from './navLinks';
import { NavLink } from 'react-router-dom';
import EventLogo from '../assets/logo.svg';
import CmrLogo from '../assets/image.svg'
import { RiMenuFoldFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";



const Navbar = () => {
  const [menu,setMenu]=useState(true);
  React.useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menu]);
  return (
    <nav className='fixed py-2 top-0 bg-black z-1000 w-full lg:px-15 xl:px-20 md:px-15 px-5 flex gap-0 items-center justify-between shadow-2xl shadow-blue-400/20' >
      <div className='flex gap-2 items-center'>
        <img className='w-15 md:w-20' src={CmrLogo} alt="" />
        <img className='w-45 md:w-50' src={EventLogo} alt="" />
      </div>
      <div className='xl:flex lg:flex lg:gap-12 xl:gap-15 hidden' >
        {navLinks.map((e,i)=>(
         <NavLink key={i} to={e.path}><p className=' hover:text-[#11D2F9] text-lg font-semibold transition-colors duration-300' >{e.text}</p></NavLink>
        ))}
      </div>
      <div className='xl:hidden lg:hidden' >
        <span onClick={()=>{
          setMenu(!menu);
          
        }} >
          <RiMenuFoldFill size={35} />
        </span>
      </div>
      <div className={`w-full h-screen bg-black flex flex-col gap-5 absolute top-0 right-0 transition-transform duration-300 ${menu?' translate-x-full ':''} p-10 `} >
      <IoCloseSharp onClick={()=>{
        setMenu(!menu);
      }} className='absolute right-3 top-4' size={45} />
      <h1 className='text-3xl' >Menu</h1>
      <div className='h-[1px] bg-white' ></div>
      {navLinks.map((e,i)=>(
         <NavLink className={'w-fit'} key={i} to={e.path}><p className=' hover:text-[#11D2F9] text-2xl transition-colors duration-300 w-fit' >{e.text}</p></NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Navbar;