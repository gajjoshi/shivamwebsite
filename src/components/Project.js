import { Button, Grid, Typography,Paper } from '@mui/material'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import React from 'react'

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
    <Grid container sx={{backgroundColor:"#2b2c2c"}}>
        <Grid item md={4} sx={{backgroundColor:"",height:700,display:"grid",placeItems:"center"}}>
            <Typography variant="h3" sx={{fontFamily:"Rosarivo",fontSize:"96px",color:"#b62e2f"}}>
                OUR
                <br></br>
                WORK
            </Typography>
        </Grid>
        <Grid item md={8} sx={{height:700}}>
            <Grid container columnSpacing={0}>
            <Grid item md={12} sx={{ height: 100 }}></Grid>
            <motion.div whileHover={{ scale: 1.4 }} style={{ backgroundColor: "grey" }}>
            <Grid item md={3} sx={{ padding: 3, height: "450px", }}>
            <Typography variant='h4' sx={{ fontFamily: "Rosarivo", fontSize: 36, color: "black" }}>PREVIOUS</Typography>
            <img style={{ width: "200px", height: "300px" }} src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png"></img>
            <br/>
            <Link to='/movie'>
            <Button variant="contained" onClick={prev} sx={{ backgroundColor: "#f0f0f0", color: "black", borderRadius: 20, marginTop: 3, marginLeft: 6, "&:hover": { backgroundColor: "#f0f0f0", color: "black", borderRadius: 20 } }}>
             More{'>'}
            </Button>
            </Link>
            
            
            </Grid>
            </motion.div>
                <motion.div whileHover={{scale:1.4}} style={{backgroundColor:"grey"}}>
                <Grid item md={3} sx={{padding:3,height:"450px"}}>
                    <Typography variant='h4' sx={{fontFamily:"Rosarivo",fontSize:36,color:"black"}}>CURRENT</Typography>
                    <img style={{width:"200px",height:"300px"}} src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png"></img>
                    <br/>
                    <Button variant="contained" onClick={curr} sx={{backgroundColor:"#D9D9D9",color:"black",borderRadius:20,marginTop:3,marginLeft:6,"&:hover": {backgroundColor:"#f0f0f0",color:"black",borderRadius:20}}}>More{'>'}</Button>
                    
                </Grid>
                </motion.div>
                <motion.div whileHover={{scale:1.4}} style={{backgroundColor:"grey"}}>
                <Grid item md={3} sx={{padding:3,height:"450px"}}>
                    <Typography variant='h4' sx={{fontFamily:"Rosarivo",fontSize:36}}>UPCOMING</Typography>
                    <img style={{width:"200px",height:"300px"}} src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png"></img>
                    <br/>
                    <Button variant="contained" onClick={upc} sx={{backgroundColor:"#f0f0f0",color:"black",borderRadius:20,marginTop:3,marginLeft:6,"&:hover": {backgroundColor:"#f0f0f0",color:"black",borderRadius:20}}}>More{'>'}</Button>
                    
                </Grid>
                </motion.div>
                   
            </Grid>
        </Grid>
    </Grid>
    
    </>
  )
}
// #D9D9D9