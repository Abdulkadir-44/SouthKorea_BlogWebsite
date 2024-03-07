import React from 'react'
import { Header } from "../Components/Header"
import Footer from "../Components/Footer"
import TopMain from "../Components/main/TopMain"
import BottomMain from "../Components/main/BottomMain"
import bg from "../assets/background.jpg"


const Home = () => {

    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "top"
      }
      
    return (
        <>
            <div style={backgroundStyle} className="min-h-[100%] flex flex-col">
                <Header />
                < TopMain />
            </div>
            <BottomMain />
            <Footer />
        </>
    )
}

export default Home