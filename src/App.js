import React from "react";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"
import About from "./components/About/About";
import Project from "./components/Project/Project"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

export default function App()

{
  return(
    <div>
   
 
    <BrowserRouter>

    <Navbar/>
    
           <Routes>
            
              <Route path="/" element={<Home />} />
              <Route path='about' element={<About/>} />
              <Route path='projects' element={<Project/>} />
             
             
           </Routes>
           <Footer/>
      
          
           </BrowserRouter>
         
          
    </div>
    
  
   
  )
  
}

