import React from 'react'
import {Link} from "react-router-dom"
export const Header = () => {
  return (
    <header className=" border-b-1 border-opacity-50 border-red-400 fixed w-full top-0 z-20 h-16 font-poppins text-white bg-transparent backdrop-blur-lg flex items-center justify-between px-12 ">
        <span className='text-3xl font-bold text-white  pointer-events-none cursor-none bg-red-700 bg-opacity-70 px-4 py-1 rounded-sm'>
        The Pearl of the East
        </span>
        <ul className='flex gap-x-5 '>
            <Link className='link-primary' to="/">Home</Link>
            <Link className='link-primary' to="/foods">Foods</Link>
            <Link className='link-primary' to="/monument">Monument</Link>
            <Link className='link-primary' to="/contact">Contact</Link>
            <Link className='link-primary' to="/whoAmI">Who am I</Link>
        </ul>
    </header>
  )
}
