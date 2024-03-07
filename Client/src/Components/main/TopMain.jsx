import React from 'react'
import Card from "../Card"
import {motion} from "framer-motion"
const TopMain = () => {

  return (
    <motion.main initial={{opacity:0}} animate={{opacity:1}} className="flex flex-1 px-32 pt-28 pb-2 gap-x-9 text-white font-poppins">
      <div className='w-[50%] grid grid-cols-2 gap-5 p-2'>
        <Card/>
      </div>
      <div className='flex flex-col flex-1 justify-center'>
      <h1 className='font-bold text-5xl drop-shadow-[2px_5px_2px_rgb(185,28,28)] mb-4 text-center '>SOUTH KOREA</h1>
        <div className='bg-black bg-opacity-45 p-2 rounded-md'>
        <p>
        South Korea, officially known as the Republic of Korea (Korean: 대한민국 Daehan Minguk), is a country located in East Asia, constituting the southern part of the Korean Peninsula and sharing a land border with North Korea
        </p>
        <a href='#section1' className='bg-red-700 bg-opacity-80 px-8 py-2 inline-flex  rounded-md mt-2 font-bold hover:bg-opacity-100 duration-150 text-lg'>More...</a>
        </div>
      </div>
    </motion.main>
  )
}

export default TopMain