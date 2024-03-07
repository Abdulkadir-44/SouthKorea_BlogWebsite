import React from 'react'

const Pagination = ({totalPosts,foodsPerPage,setCurrentPage}) => {
    let pages = [];
    for(let i = 1 ; i <= Math.ceil(totalPosts / foodsPerPage) ; i++)
    {
        pages.push(i)
    }
  return (
    <div className='mb-3 flex justify-center gap-x-4 text-white'>
        {
            pages.map((page,index)=>(
                <button onClick={()=>setCurrentPage(page)} 
                className='px-3 py-1 hover:bg-white hover:text-black duration-150 rounded-md border-1 font-poppins text-sm' key={index}>{page}</button>
            ))
        }
    </div>
  )
}

export default Pagination