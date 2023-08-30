
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Contact.css'
import imdb1 from '../images/imdb1.png';
import InstagramIcon from '@mui/icons-material/Instagram';

const AboutUs = () => {
  // const style = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 500,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   p: 4,
    
  // };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%', // Adjust the width for mobile view
    maxWidth: 500, // Maximum width for larger screens
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const [show, setShow] = useState([]);
  const handleOpen = (item) => {
    console.log("item:", item);
    setShow(item);
    setOpen(true);

  }
  const handleClose = () => setOpen(false);

  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  useEffect(() => {

    let config1 = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://prodhouse.pythonanywhere.com/search2/?people_type=Core',
      headers: {}
    };

    async function makeRequest1() {
      try {
        const response = await axios.request(config1);
        //console.log(response.data);
        setData1(response.data);
      }
      catch (error) {
        console.log(error);
      }
    }

    makeRequest1();

    let config2 = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://prodhouse.pythonanywhere.com/search2/?people_type=Employee',
      headers: {}
    };

    async function makeRequest2() {
      try {
        const response = await axios.request(config2);
        //console.log(response.data);
        setData2(response.data);

      }
      catch (error) {
        console.log(error);
      }
    }

    makeRequest2();

    let config3 = {
      method: 'get',
      maxBodyLength: Infinity,
      url: "https://prodhouse.pythonanywhere.com/search2/?people_type=Creatives",
      headers: {}
    };

    async function makeRequest3() {
      try {
        const response = await axios.request(config3);
        //console.log(response.data)
        setData3(response.data);
      }
      catch (error) {
        console.log(error);
      }
    }

    makeRequest3();



  }, []);

  return (
    <>
        <Grid container sx={{backgroundColor:""}}>        
        <Grid item md={4} xs={12} sm={12} sx={{backgroundColor:"",display:"flex-column",placeItems:"center", paddingLeft:{xs:'6%',sm:"33%",md:"15%",s:"32%"},paddingTop: { xs: 5, md: '80px',lg:"80px",s:0 }, fontSize: { xs: '40px', sm: '60px' } }}>
        <div style={{color: "#b62e2f" ,fontFamily:"Rosarivo"}}>
            OUR PEOPLE
          </div>
        </Grid>
        <Grid item md={8} xs={12} sm={12} sx={{ paddingTop: 0 }}>
        <Carousel >
          <Carousel.Item interval={500000} style={{ padding: '60px' }}>
            <Grid container >
            <Grid item md={0.75} xs={0} sm={0.75}></Grid>
              {data1.length > 0 ? <>
                {data1.map(item => (

                  <>
                    <Grid item md={3.5} xs={12} sm={3.5}>
                      <Grid container>
                        <Grid item md={12} xs={12} sm={12} sx={{ justifyContent: "center", display: "flex", alignItems: "center",alignContent:"center" }}>
                          <Button onClick={() => handleOpen(item)}>
                          <img src={item.image} style={{ width: 260, height: 290, borderRadius: 80 , marginBottom:'15px' ,transition: 'transform 0.5s ease'}}
                             onMouseOver={(e)=>{
                              e.currentTarget.style.transform='scale(1.1)';
                              //e.currentTarget.style.filter = 'blur(5px)'; // Adding a blur effect on hover
                              e.currentTarget.style.boxShadow =  '0px 0px 15px rgba(255, 255, 255, 0.5)'; // Adding a shadow effect on hover  
                            }}
                             onMouseOut={(e)=>{e.currentTarget.style.transform='scale(1)';
                             e.currentTarget.style.filter = 'none'; // Resetting the blur effect
                             e.currentTarget.style.boxShadow = 'none'; // Resetting the shadow effect
                            }}
                             ></img>
                          </Button>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} sx={{ justifyContent: "center", display: "block", textAlign: "center" }}>
                          <Typography variant="h6" sx={{ color: "white" , font:'bold',fontFamily:"Rosarivo"}}>
                            {item.name}
                          </Typography>
                          <Typography variant="h6" sx={{ color: "white"}}>
                            {item.slave_type}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                ))}


              </> : <></>}
              <Grid item md={0.75} xs={0} sm={0.75}></Grid>
            </Grid>

          </Carousel.Item>
         
          <Carousel.Item interval={2000} style={{ padding: '60px' }}>
            <Grid container>
            <Grid item md={2.5} xs={0} sm={2.5}></Grid>
              {data3.length > 0 ? <>
                {data3.map(item => (
                  <>
                    <Grid item md={3.5} sm={3.5} xs={12} >
                      <Grid container>
                        <Grid item md={12} sm={12} xs={12} sx={{ justifyContent: "center", display: "flex", alignItems: "center",alignContent:"center" }}>
                        <Button onClick={() => handleOpen(item)}>
                            <img src={item.image} style={{ width: 260, height: 290, borderRadius: 80 , marginBottom:'15px' ,transition: 'transform 0.5s ease'}}
                             onMouseOver={(e)=>{
                              e.currentTarget.style.transform='scale(1.1)';
                              //e.currentTarget.style.filter = 'blur(5px)'; // Adding a blur effect on hover
                              e.currentTarget.style.boxShadow =  '0px 0px 15px rgba(255, 255, 255, 0.5)'; // Adding a shadow effect on hover  
                            }}
                             onMouseOut={(e)=>{e.currentTarget.style.transform='scale(1)';
                             e.currentTarget.style.filter = 'none'; // Resetting the blur effect
                             e.currentTarget.style.boxShadow = 'none'; // Resetting the shadow effect
                            }}
                             ></img>
                          </Button>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} sx={{ justifyContent: "center", display: "block", textAlign: "center"}}>
                          <Typography variant="h6" sx={{ color: "white", paddingLeft: 0,fontFamily:"Rosarivo" }}>
                            {item.name}
                          </Typography>
                          <Typography variant="h6" sx={{ color: "white", paddingLeft: 0 }}>
                            {item.slave_type}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>

                ))}
              </> : <></>}
              <Grid item md={2.5} xs={0} sm={2.5}></Grid>
            </Grid>
          </Carousel.Item>
        </Carousel>
        </Grid>
        </Grid>
   
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        className="chotu2"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="chotu2">
          {show ? (
            <Grid container>
              <Grid item xs={12} md={3}>
                <Grid container>
                  <Grid item xs={12}>
                    <img src={show.image} style={{ width: 100, height: 100, borderRadius: 100 }} alt="Profile" />
                  </Grid>
                  <Grid item md={12} xs={4} >
                      Social Media:
                    </Grid>
                  <Grid item md={6} xs={2}>
                    <a href={show.imdb_id} target="_blank">
                      <img src={imdb1} className="imdbsize" alt="imdb" />
                    </a>
                  </Grid>
                  <Grid item md={6} xs={2}>
                    <a href={show.insta_id} target="_blank">
                      <InstagramIcon />
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={9} sx={{ paddingLeft: { xs: 0, md: 5 } }}>
                <Grid container rowSpacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="h7" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                      <span style={{fontWeight:"bold"}}>Name:</span> {show.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h7" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <span style={{fontWeight:"bold"}}>Description:</span> {show.bio}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h7" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <span style={{fontWeight:"bold"}}>Detail:</span> {show.detail}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <></>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default AboutUs;
