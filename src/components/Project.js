import { Button, Grid, Typography,Paper } from '@mui/material'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import React from 'react'
import './Contact.css'
import current from '../images/7str.jpg'
import future from '../images/future.jpg'
export default function Project() {
    const prev=()=>{
        localStorage.setItem("select",1)
    }
    const curr=()=>{
        localStorage.setItem("select",2)
    }
    const upc=()=>{
        localStorage.setItem("select",3)
    }
  return (
    <>
    <Grid container sx={{backgroundColor:""}}>
        <Grid item md={4} xs={12} sm={12} s={12}  sx={{backgroundColor:"",display:"flex-column",placeItems:"center",textAlign:{xs:'center',sm:'center',s:"center"} ,paddingLeft:{md:"15%"},paddingTop: { xs: 25,sm:"0%", md: '250px',lg:"250px" }, fontSize: { xs: '40px', sm: '60px' },}}>
        <div style={{  color: "#b62e2f" ,fontFamily:"Rosarivo"}}>
            OUR WORK
          </div>
        </Grid>
        <Grid item md={8} xs={12} sm={12} s={12} sx={{height:{md:700,lg:700,sm:500,xs:1380,s:500}}}>
            <Grid container columnSpacing={0} rowSpacing={0} sx={{justifyContent:{sm:"center",xs:"center"}}}>
            <Grid item md={12} sm={0} xs={0} s={0} sx={{ height:{md:100,xs:30,sm:30,s:30} }}></Grid>
            <motion.div whileHover={{ scale: 1.4 }} className='chotu' style={{ backgroundColor: "" }}>
            <Grid item md={3}  sx={{ padding:{md:3,sm:3,xs:3,s:1}, height: "450px", }}>
            <Typography variant='h4' sx={{ fontFamily: "Rosarivo", fontSize: 36, color: "white" }}>PREVIOUS</Typography>
            <img style={{ width: "200px", height: "300px" }} src="https://res.cloudinary.com/dggmxmhlm/image/upload/f_auto,q_auto/j27xoaskm6dh3ylhsuyt"></img>
            <br/>
            <Link to='/movie'>
            <Button variant="contained" onClick={prev} sx={{ backgroundColor: "#f0f0f0", color: "black", borderRadius: 20, marginTop: 3, marginLeft: 6, "&:hover": { backgroundColor: "#f0f0f0", color: "black", borderRadius: 20 } }}>
             More{'>'}
            </Button>
            </Link>
            
            
            </Grid>
            </motion.div>
                <motion.div whileHover={{scale:1.4}} className='chotu'  style={{backgroundColor:""}}>
                <Grid item md={3} s={3} sx={{padding:{md:3,sm:3,xs:3,s:1},height:"450px"}}>
                    <Typography variant='h4' sx={{fontFamily:"Rosarivo",fontSize:36,color:"white"}}>CURRENT</Typography>
                    <img style={{width:"200px",height:"300px"}} src={current}></img>
                    <br/>
                    <Link to='/movie'>
                    <Button variant="contained" onClick={curr} sx={{backgroundColor:"#D9D9D9",color:"black",borderRadius:20,marginTop:3,marginLeft:6,"&:hover": {backgroundColor:"#f0f0f0",color:"black",borderRadius:20}}}>More{'>'}</Button>
                    </Link>
                </Grid>
                </motion.div>
                <motion.div whileHover={{scale:1.4}} className='chotu' style={{backgroundColor:""}}>
                <Grid item md={3} s={3} sx={{padding:{md:3,sm:3,xs:3,s:1},height:"450px"}}>
                    <Typography variant='h4' sx={{fontFamily:"Rosarivo",fontSize:36,color:"white"}}>UPCOMING</Typography>
                    <img style={{width:"200px",height:"300px"}} src={future}></img>
                    <br/>
                    <Link to='/movie'>
                    <Button variant="contained" onClick={upc} sx={{backgroundColor:"#f0f0f0",color:"black",borderRadius:20,marginTop:3,marginLeft:6,"&:hover": {backgroundColor:"#f0f0f0",color:"black",borderRadius:20}}}>More{'>'}</Button>
                    </Link>
                </Grid>
                </motion.div>
                   
            </Grid>
        </Grid>
    </Grid>
    
    </>
  )
}
// #D9D9D9