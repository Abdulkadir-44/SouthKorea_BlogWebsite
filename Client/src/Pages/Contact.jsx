import React, { useState } from 'react'
import { Header } from '../Components/Header'
import Footer from '../Components/Footer'
import { motion } from "framer-motion"
import {BallTriangle} from "react-loader-spinner"
import toast, {Toaster} from "react-hot-toast"
const Contact = () => {

  const [formData, setFormData] = useState(
    {
      name: '',
      surname: '',
      subject: '',
      content: ''
    }
  )
  const [loading,setLoading]=useState(false)

  //yanlız form validasyon işlemleri eklenecek onu unutma 
  //en güncel hali ile form değişkenleri backend kısmına gönderildi...
  const handleSubmit = async e => {
    e.preventDefault()
  
    try {
      setLoading(true)
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_CONTACT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      toast.success("İletiniz gönderildi . . .")
      setLoading(false)
      // Başarılı post işlemi
      console.log('Veriler başarıyla gönderildi');
    } catch (error) {
      console.error('Hata oluştu:', error.message);
    }

  }

  //input alanlarında değişen değerler formData değişkenine atandı
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  return (
    <>
      <div className='h-[100%] bg-[#1C1D1F] flex flex-col'>
        <Header />
        <Toaster
         position="top-right"
         reverseOrder={false}
         gutter={8}
         containerClassName=""
         containerStyle={{}}
         toastOptions={{
          duration:2000,
          style:{
            background:"#B91C1C",
            color:"white",
            marginTop:80
          }
         }}
         />
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 mt-24  w-[40%] mx-auto">
          <form onSubmit={handleSubmit} className='flex flex-col bg-[#414141] p-8 rounded-lg font-poppins text-white'>
            
            <label className='text-sm text-gray-200 font-bold italic' htmlFor="name">Name</label>
            <input onChange={handleChange}
              placeholder='yourname . . .'
              className='placeholder:text-xs placeholder:italic placeholder:text-gray-400  p-2 outline-none rounded-sm border-b-1 bg-transparent duration-200 border-gray-600 focus:border-red-500'
              type="text"
              name="name"
              id="name" />

            <label className='text-sm text-gray-200 font-bold italic mt-2' htmlFor="surName">Surname</label>
            <input onChange={handleChange}
              placeholder='surname . . .'
              className=' placeholder:text-xs placeholder:italic placeholder:text-gray-400 p-2 outline-none rounded-sm border-b-1 bg-transparent duration-200 border-gray-600 focus:border-red-500'
              type="text"
              name="surname"
              id="surname" />

            <label className='text-sm text-gray-200 font-bold italic mt-2' htmlFor="subject">Subject</label>
            <input onChange={handleChange}
              placeholder='title . . .'
              className='placeholder:text-xs placeholder:italic placeholder:text-gray-400  p-2 outline-none rounded-sm border-b-1 bg-transparent duration-200 border-gray-600 focus:border-red-500'
              type="text"
              name="subject"
              id="subject" />

            <label htmlFor="content" className='text-sm mb-2 text-gray-200 font-bold italic mt-2'>Content</label>
            <textarea onChange={handleChange}
              placeholder='question . . .'
              className='placeholder:text-xs placeholder:italic outline-none border-1 resize-none rounded-sm bg-[#1C1D1F] p-3 overflow-y-auto '
              name="content"
              id="content"
              cols="60" rows="7"></textarea>

            <button type='submit'
              className='bg-red-600 mt-4 py-2 rounded-md outline-none hover:bg-red-800 duration-200 flex justify-center'>
                {
                  loading ? 
                  <BallTriangle
                   height={25}
                   width={25}
                   radius={5}
                   color='#D4D5D9'
                   ariaLabel='ball-triangle-loading'
                   visible={true} /> : "Gönder"
                   
                }
              </button>
          </form>

        </motion.main>
      </div>
      <Footer />
    </>
  )
}

export default Contact