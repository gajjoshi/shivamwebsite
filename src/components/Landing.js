import React from 'react'
import hanuman2 from '../images/jaihaunuman.png'
// import hanuman2 from '../images/hanuman2.png'
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
        <motion.div style={{ width: "45%", margin: "auto",marginBottom:"100px" }} initial={{opacity:0}} animate={{opacity:1.5}} transition={{duration:5,delay:1}}>
        <img src={hanuman2} alt="Hanuman" style={{ width: "80%", paddingLeft:'130px' }} />
        </motion.div>
        </div>
    
    </>
  )
}