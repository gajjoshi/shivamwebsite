import React from 'react'
import hanuman2 from '../images/jaihaunuman.png'
// import hanuman2 from '../images/hanuman2.png'
import { motion } from 'framer-motion'
export default function Landing() {
  return (
    <>
        <div style={{backgroundColor: "white",position: "fixed",top: 0,left: 0,width: "100%",height: "100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <motion.div style={{ width: "45%", margin: "auto",marginBottom:"100px" }} initial={{opacity:0}} animate={{opacity:1.5}} transition={{duration:5,delay:0.8}}>
        <img src={hanuman2} alt="Hanuman" style={{ width: "80%", paddingLeft:'130px' }} />
        </motion.div>
        </div>
    
    </>
  )
}