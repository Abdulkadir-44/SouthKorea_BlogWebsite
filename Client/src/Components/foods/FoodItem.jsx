import React from 'react'

const FoodItem = ({food}) => {
   console.log(food.materials);
  return (
    <div className='bg-[#1C1D1F] bg-opacity-95 text-white font-poppins text-sm p-2 rounded-md relative flex'>
        <img  src={food.imgURL} className='object-cover h-52 w-60  rounded-md mr-4 hover:scale-90 duration-200 hover:grayscale-65' alt="There is no picture" />
        <div>
            <h1 className='text-lg text-white italic font-bold  bg-orange-800 p-1 rounded-md inline-block float-left mr-3'>{food.foodName}</h1>
           
            <p className='mb-4'>{food.foodHistory}</p>
            <p className='mb-3'>{food.content}</p>
            <div className='flex gap-x-3 items-center flex-wrap justify-center gap-y-1 '>Materials : 
                {
                    food.materials.map(item=>(
                        <span className='bg-orange-700 whitespace-nowrap text-gray-300 text-xs rounded-sm px-1'>#{item}</span>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default FoodItem