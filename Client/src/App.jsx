import React from "react"
import {Route,Routes} from "react-router-dom"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import { Foods } from "./Pages/Foods"


function App() {

 
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/foods" element={<Foods/>}/>
    </Routes>

  )
}

export default App
