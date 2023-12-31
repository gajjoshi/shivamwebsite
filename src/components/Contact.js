import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Grid, IconButton, Typography, Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { FormControl } from '@mui/base';
import { useState } from 'react';
import map2 from '../images/map2.png'
import './Contact.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [message,setMessage]=useState("");
  const [error,setError]=useState("");

  const check=()=>{
    console.log("integrated");

      if(name=="")
      {
        setError("*Name is required");
      }
      else if(email=="")
      {
        setError("*Email is required");
      }
      else if(phone=="")
      {
        setError("*Phone is required");
      }
      else if(message=="")
      {
        setError("*Message is required");
      }
      
      else
      {
        toast.success("Message sent successfully");
        setError("");
        submit();
      }
  }
  const submit = () => {
    const FormData = require('form-data');
    let data = new FormData();
    let ph="+91"+phone;
    data.append('name', name);
    data.append('email', email);
    data.append('phone', ph);
    data.append('message', message);

    // let config = {
    //   method: 'post',
    //   maxBodyLength: Infinity,
    //   url: 'https://prodhouse.pythonanywhere.com/contactus/',
    //   data: data
    // };

    // async function makeRequest() {
    //   try {
    //     const response = await axios.request(config);
    //     console.log((response.data));
    //     setEmail("");
    //     setName("");
    //     setPhone("");
    //     setMessage("");
    //     toast.success("Message sent successfully");
    //   }
    //   catch (error) {
    //     console.log(error);
    //   }
    // }

    // makeRequest();

  }
  return (
    <>
    <div style={{backgroundColor:"", paddingTop:'150px'}}>
      <FormControl>
      <Grid container rowSpacing={3} sx={{backgroundColor:""}}>
        <Grid item md={6} sm={12} xs={12} sx={{ paddingTop: "20px",backgroundColor:"2b2c2c" }}>
          <Grid container>
            <Grid item md={3} sm={1} xs={1}></Grid>
            <Grid item md={8} sm={10} xs={10} sx={{textAlign:{sm:"center",s:"center",md:"left"}}} >
              <Typography variant='h5' sx={{ fontStyle: "bold", fontSize: "40px", fontWeight: "1000",color:"#9a9f75", fontWeight :"bold"}}>
                Let’s discuss
              </Typography>
              <Typography variant='h5' sx={{ fontStyle: "bold", fontSize: "40px", fontWeight: "1000",color:"#9a9f75" }}>
                a cool <span style={{ color: "red" }}>story</span>
              </Typography>
              <Typography variant="h5" sx={{ fontStyle: "bold", fontSize: "40px", fontWeight: "1000" ,color:"#9a9f75"}}>
                together
              </Typography>
            </Grid>
            <Grid item md={1} sm={1} xs={1}></Grid>
            <Grid item md={3} sm={1} xs={1}></Grid>
            <Grid item md={8} sm={10} xs={10} sx={{ padding: "40px", paddingLeft: "0px",paddingRight:"  0px",textAlign:{sm:"center",s:"center",md:"left"} }}>
              <IconButton>
              <a href="mailto:info@pinngaksh.com">
              <EmailIcon sx={{ color: "red" ,paddingRight:"0px"}}></EmailIcon></a>
              </IconButton>
              <div style={{ display: "inline", fontStyle: "bold", fontSize: "19px", fontWeight: "800",color:"#9a9f75" }}>
                filmysiblingpictures@gmail.com
              </div>
              <div style={{ padding: "20px", paddingLeft: "0px" }}>
               
                
              </div>
              <div>
                <IconButton>
                  <LocationOnIcon sx={{ color: "red" }}></LocationOnIcon>
                </IconButton>
                <div style={{ display: "inline", fontStyle: "bold", fontSize: "19px", fontWeight: "800",color:"#9a9f75", paddingBottom : "50px" }}>
                Malad West
                </div>
              </div>
              <div>
                <div style={{ display: "inline", fontStyle: "bold", fontSize: "19px", fontWeight: "800",color:"#9a9f75", paddingTop: "100px"}}>
                <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.3376803856513!2d72.84197187498015!3d19.180447982045724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6fbef4d122f%3A0x49138f212a75812!2sSheetal%20Darshi!5e0!3m2!1sen!2sin!4v1703928146260!5m2!1sen!2sin" width="300"
    height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>

            </Grid>
            <Grid item md={1} sm={1} xs={1}></Grid>
          </Grid>
        </Grid>
        <Grid className='hihello' item md={6} sx={{ paddingTop: "20px" ,padding:{md:3,sm:20,s:20,xs:3}}}>
          <Grid container>
            <Grid item md={8} className='contactus' >
              <Grid container>
                <Grid item md={12} sm={12} xs={12} sx={{color:"#9a9f75",fontSize:"40px", fontStyle :"bold", fontWeight :"bold", paddingTop: "20px" }}>
                  Contact Us
                </Grid>
                <Grid item md={12} sm={12} xs={12} sx={{ paddingTop: "40px" }}>
                  <TextField error value={name} onChange={(e)=>{setName(e.target.value)}} required id="standard-basic" variant="standard" placeholder="Your name" sx={{ width: "100%", input: { color: 'white' } }} />
                </Grid>
                <Grid item md={12} sm={12} xs={12} sx={{ paddingTop: "40px" }}>
                  <TextField error value={email} onChange={(e)=>{setEmail(e.target.value)}} required id="standard-basic" variant="standard" placeholder="Email" sx={{ width: "100%" , input: { color: 'white' }}} />
                </Grid>
                <Grid item md={12} sm={12} xs={12} sx={{ paddingTop: "40px" }}>
                  <TextField error value={phone} inputProps={{pattern:'[0-9]'}} onChange={(event)=>{const inputValue = event.target.value;const numericValue = inputValue.replace(/[^0-9]/g, '');setPhone(numericValue)}} id="standard-basic" variant="standard" placeholder="Number" sx={{ width: "100%", input: { color: 'white' }}} />
                </Grid>
                <Grid item md={12} sm={12} xs={12} sx={{ paddingTop: "40px" }}>
                  <TextField error value={message} onChange={(e)=>{setMessage(e.target.value)}} required id="standard-basic" variant="standard" placeholder="Message" sx={{ width: "100%", input: { color: 'white' } }} />
                </Grid>
                <Grid item md={12}  sm={12} xs={12} sx={{ paddingTop: "20px" ,justifyContent:"start",display:"flex",alignItems:"center"}}>
                <div style={{color:"red"}}>{error}</div>
                </Grid>
                <Grid item md={12}  sm={12} xs={12} sx={{ paddingTop: "30px" ,justifyContent:"center",display:"flex",alignItems:"center"}}>
                  
                  <Button onClick={check} sx={{ backgroundColor: "#C61414", color: "white",fontWeight :"bold ", borderRadius: 20, padding: "5px", width: "30%", "&:hover": { backgroundColor: "#C61414", color: "white", borderRadius: 20, padding: "5px", width: "30%" } }}>
                    Send
                  </Button>
                  
                </Grid>
              </Grid>

            </Grid>
            <Grid item md={4}></Grid>
          </Grid>
        </Grid>
      </Grid>
      </FormControl>
      </div>
      <ToastContainer position='bottom-left'/>
    </>
  )
}