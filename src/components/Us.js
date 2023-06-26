import React from 'react'
import { Button, Grid, Typography,Paper } from '@mui/material'
import { motion, spring } from "framer-motion"
import { useEffect } from 'react';
import './AboutUs.css';
export default function Us() {
  const [view, setView] = React.useState(false);
  const handleScroll = () => {
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    console.log('Scroll X:', scrollX);
    console.log('Scroll Y:', scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <Grid container sx={{backgroundColor:"#2b2c2c"}}>
        <Grid item md={5} sx={{backgroundColor:"",height:300,display:"grid"}}>
            <Typography className='heading' variant="h9" sx={{fontFamily:"Rosarivo",fontSize:"60px",color:"#b62e2f"}}>
               <motion.div initial={{x:-200}} animate={{x:420}} transition={{delay:0.5,duration:2,type:"spring",stiffness:100}}> WHO </motion.div>
               <motion.div initial={{x:-200}} animate={{x:480}} transition={{delay:0.5,duration:0.5,type:"ease"}}>ARE</motion.div> 
               <motion.div initial={{x:-200}} animate={{x:440}} transition={{delay:0.5,duration:2,type:"spring",stiffness:100}}> WE</motion.div>
            </Typography>
        </Grid>
        <Grid item md={4} sx={{height:300,color:"white",paddingTop:"70px",color:"#9a9f75"}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quas ratione animi at ullam, eaque neque provident aliquam reprehenderit aliquid soluta repellendus dolores. Repellat accusantium possimus quaerat impedit maiores itaque!
        </Grid>
        </Grid>
    </div>
  )
}
