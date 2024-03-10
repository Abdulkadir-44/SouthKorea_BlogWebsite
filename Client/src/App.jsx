import React from "react"
import {Route,Routes} from "react-router-dom"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import { Foods } from "./Pages/Foods"
import WhoAmI from "./Pages/WhoAmI"

function App() {

 
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/foods" element={<Foods/>}/>
      <Route path="/whoAmI" element={<WhoAmI/>}/>
    </Routes>

  )
}

export default App
