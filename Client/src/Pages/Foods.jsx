import React, { useEffect, useState } from 'react'
import { Header } from '../Components/Header' 
import Footer from '../Components/Footer'
import foodsPageBg from "../assets/foodsPageBg.jpg"
import FoodItem from '../Components/foods/FoodItem'
import Pagination from '../Components/foods/Pagination'
import {BallTriangle} from "react-loader-spinner"
import {motion} from "framer-motion"

export const Foods = () => {

  
  const [foods,setFoods]=useState([]);
  const backgroundStyle = {
    backgroundImage: `url(${foodsPageBg})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    boxShadow: "inset 100px 100px  200px 100px rgba(0, 0, 0, 0.8)"
  }

  const [currentPage,setCurrentPage]=useState(1)
  const [foodsPerPage,setfoodsPerPage] = useState(2)
  const lastPostIndex = currentPage * foodsPerPage
  const firstPostIndex = lastPostIndex - foodsPerPage ;
  const currentFoods = foods.slice(firstPostIndex,lastPostIndex)
  
  useEffect(()=>{
    const fetchData = async ()=>{
       await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}`)
      .then(res=>res.json())
      .then(value=>setFoods(value))
      .catch(err=>{
        console.log(err);
      })
    }

    fetchData()
  },[])

  console.log(foods);
  return (

    <>
    <div className='wrapper flex flex-col h-[100%]'>
        <Header/>
        <main  style={backgroundStyle} className='flex-1 pt-16'>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} className='container mx-auto  mt-9 flex flex-col gap-y-3 '>

              {
                foods.length > 0 ? (
                  currentFoods.map(food=>(
                    <FoodItem food={food}/>
                  ))
                ) : 
                <>
                <div className='container w-[50%] mt-20 mx-auto bg-[#b1adac] bg-opacity-30 rounded-lg h-60 flex justify-center items-center'>
                  <BallTriangle
                   height={65}
                   width={65}
                   radius={5}
                   color='orange'
                   ariaLabel='ball-triangle-loading'
                   visible={true} />
                </div>
                
                </>
              }
              <Pagination foodsPerPage={foodsPerPage} totalPosts={foods.length} setCurrentPage={setCurrentPage}/>
            </motion.div>
            
        </main>
    </div>
    <Footer/>
    </>
  )
}
