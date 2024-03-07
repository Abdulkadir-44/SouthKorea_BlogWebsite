import React from 'react'
import {Link} from "react-router-dom"
import bg1 from "../assets/foods1.jpg"
import bg2 from "../assets/foods2.jpg"
import bg3 from "../assets/streets1.jpg"
import bg4 from "../assets/streets2.jpg"

const Card = () => {
    
    const foodBg1 = {
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }
    const foodBg2 = {
        backgroundImage: `url(${bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    const streetBg1 = {
        backgroundImage: `url(${bg3})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    const streetBg2 = {
        backgroundImage: `url(${bg4})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    return (
        <>
            <Link to="foods" style={foodBg1} className='card-style group'>
                <h1 className='h1-style '>Kimchi</h1>
                <p className='p-style'>
                The history of kimchi dates back thousands of years in Korea. Originally, kimchi was developed...
                </p>
            </Link>
            <Link to="foods" style={foodBg2} className='card-style group'>
            <h1 className='h1-style'>Seollangtang</h1>
                <p className='p-style'>
                Seollangtang is thought to have a long history as a part of Korean cuisine. It is known that this type...
                </p>
            </Link>
            <div style={streetBg1} className='card-style group'>
            <h1 className='h1-style'>Streets</h1>
                <p className='p-style'>
                Seollangtang is thought to have a long history as a part of Korean cuisine. It is known that this type...
                </p>
            </div>
            <div style={streetBg2} className='card-style group'>
            <h1 className='h1-style'>Streets</h1>
                <p className='p-style'>
                Seollangtang is thought to have a long history as a part of Korean cuisine. It is known that this type...
                </p>
            </div>
        </>
    )
}

export default Card