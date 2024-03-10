import React from 'react'
import { Header } from '../Components/Header'
import Footer from '../Components/Footer'

const WhoAmI = () => {
  return (
    <>
     <Header/>  
     <div className='min-h-screen pt-24 bg-[#1C1D1F] px-7 flex font-poppins'>
        <div className='w-2/3 py-5 relative '>
            <div className='bg-[#2F2E43] w-full h-full text-white p-3 rounded-md overflow-y-auto'>
                <p className='text-sm mb-8'>My name is Abdulkadir and I am studying computer engineering at Iskenderun Technical University and  I'm currently learning Javascprit , React , TailwindCss , AWS , HTML , CSS</p>
                <h1 className='text-3xl mb-3'>YAPTIĞIM PROJELER</h1>
                <h2 className='text-xl'>1-Real time chat application</h2>
                <p className='mb-4 text-sm'>This project is a simple messaging application that enables users to communicate with each other in real-time. Users can send and receive instant messages by connecting to a server-side application, which is typically hosted on their own localhost (unless deployed elsewhere). The application is developed using socket programming to facilitate easy communication between users. Its primary goal is to facilitate real-time message exchange between users. The frontend is built using Tailwind CSS and React, while the backend utilizes Express.js and Socket.io.</p>
                <h2 className='text-xl'>2-Weather App</h2>
                <p className='mb-4 text-sm'>This project is a simple weather application. Users can view weather information by entering a city name. The application connects to an API that provides weather data and retrieves relevant weather information based on the city name entered by the user. The frontend interface is built using React.js. Users can instantly see weather information on the application's main page by entering a city name</p>
                <h2 className='text-xl'>3-Historical currency calculation</h2>
                <p className='mb-4 text-sm'>This project is a basic currency converter application built using React. Users can view historical currency exchange rates retrieved from an API and displayed in the application. The application allows users to select different currencies and view their exchange rates for specific dates. It provides a convenient way for users to track past currency exchange rates and monitor currency fluctuations over time.</p>
            </div>
        </div>
        <div className='flex-1 p-5 relative'>
            <div className=' w-full h-full businessBg'></div>
        </div>
     </div>
     <Footer/>
    </>
  )
}

export default WhoAmI