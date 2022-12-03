import React from "react";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"
import About from "./components/About/About";
import { BrowserRouter,Route,Routes,Router } from "react-router-dom";

export default function App()

{
  return(
    <div>
   
 
    <BrowserRouter>
    <Navbar/>
           <Routes>
            
              <Route path="/" element={<Home />} />
              <Route path='about' element={<About/>} />
            
             
           </Routes>
  
           </BrowserRouter>
    </div>
    
  
   
  )
  
}