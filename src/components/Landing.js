import React from 'react'
import hanuman2 from '../images/ig/logo.png'
import { motion } from 'framer-motion'
import './Navbar.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {

  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/home"); // Navigate to the /home route (Navbar)
    }, 4000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <>
        <div className='fullbackground1' style={{position: "fixed",top: 0,left: 0,width: "100%",height: "100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
          
        <motion.div style={{ width: "45%", margin: "auto",marginBottom:"100px",display:"flex",flexDirection:"column" }} initial={{opacity:0}} animate={{opacity:1.5}} transition={{duration:5,delay:1}}>
        <div>
        <img src={hanuman2} alt="Hanuman" className='hanuman' />
          </div> 
          <div>
          <div style={{color:'#9a9f75',justifyContent:"center",textAlign:"center",fontWeight:"bold",fontFamily:"Ros"}} className='entry' ><span className='welcome'>WELCOME TO</span> FILMY SIBLINGS PICTURES</div>
          </div> 
        </motion.div>
        
        </div>
        <br/>
       
        
    
    </>
  )
}