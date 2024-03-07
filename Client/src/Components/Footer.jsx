import React from 'react'
import {Link} from "react-router-dom"
import {FaChevronRight,FaInstagram,FaGithub,FaLinkedin,FaPhone} from "react-icons/fa"
import {FiMail} from "react-icons/fi"
import {GoLocation} from "react-icons/go"
const Footer = () => {
  return (
    <footer className="flex justify-around pt-10 bg-[#414141] pb-5">
      <div>
        <h1 className='text-gray-300 text-xl font-poppins'>Useful Links</h1>
        <div className='flex flex-col gap-y-3 mt-3 text-center text-white font-poppins'>
        <Link className='hover:underline flex items-center gap-x-3 ' to="/"><FaChevronRight/> Home</Link>
        <Link className='hover:underline flex items-center gap-x-3 ' to="/foods"> <FaChevronRight/>  Foods</Link>
        <Link className='hover:underline flex items-center gap-x-3 ' to="/monument"> <FaChevronRight/>  Monument</Link>
        <Link className='hover:underline flex items-center gap-x-3 ' to="/contact"> <FaChevronRight/>  Contact</Link>
        <Link className='hover:underline flex items-center gap-x-3 ' to="/whoAmI"> <FaChevronRight/>  Who am I</Link>
        </div>
      </div>
      <div>
        <h1 className='text-gray-300 text-xl font-poppins'>Follow Me</h1>
        <div className='flex flex-col gap-y-4 mt-3 text-center text-white font-poppins'>
        <a className='flex items-center gap-x-3 hover:underline' href="#"><FaInstagram color='#f70776' fontSize="25px"/> İnstagram</a>
        <a className='flex items-center gap-x-3 hover:underline' href="#"><FaGithub fontSize="25px"/>Github</a>
        <a className='flex items-center gap-x-3 hover:underline' href="#"><FaLinkedin color='#69A9E7' fontSize="25px"/>Linkedin</a>
        </div>
      </div>
      <div>
        <h1 className='text-gray-300 text-xl font-poppins'>Address</h1>
        <div className='flex flex-col gap-y-4 mt-3  text-white font-poppins'>
        <p className='flex items-center gap-x-2'><GoLocation fontSize="20px"/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aperiam!</p>
        <p className='flex items-center gap-x-2'><FaPhone fontSize="20px"/>+90 555 555 55 55</p>
        <p className='flex items-center gap-x-2'><FiMail fontSize="20px"/>youexample@gmail.com</p>
        </div>
      </div>
     
    </footer>
  )
}

export default Footer