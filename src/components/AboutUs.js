
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import imdb from '../images/imdb.png';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const AboutUs = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
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
      url: 'https://prodhouse.pythonanywhere.com/search2/?slave_type=Core',
      headers: {}
    };

    async function makeRequest1() {
      try {
        const response = await axios.request(config1);
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
      url: 'https://prodhouse.pythonanywhere.com/search2/?slave_type=Employee',
      headers: {}
    };

    async function makeRequest2() {
      try {
        const response = await axios.request(config2);
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
      url: "https://prodhouse.pythonanywhere.com/search2/?slave_type=Creatives",
      headers: {}
    };

    async function makeRequest3() {
      try {
        const response = await axios.request(config3);
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
        <Grid container sx={{backgroundColor:"#2b2c2c"}}>        
        <Grid item md={3} xs={12} sm={12} sx={{ paddingTop: 0,display:"grid",placeItems:"center" }}>
          <div style={{ paddinTop: 80, fontSize: 60, paddingLeft: { md:110,lg:110,sm:50,xs:50}, color: "#b62e2f" }}>
            OUR
          </div>
          <div style={{ paddinTop: 10, fontSize: 60, paddingLeft: 80, color: "#b62e2f" }}>
            PEOPLE
          </div>
        </Grid>
        <Grid item md={9} xs={12} sm={12} sx={{ paddingTop: 0 }}>
        <Carousel >
          <Carousel.Item interval={500000} style={{ padding: '60px' }}>
            <Grid container >

              <Grid item md={2}></Grid>
              {data1.length > 0 ? <>
                {data1.map(item => (

                  <>
                    <Grid item md={5}>
                      <Grid container>
                        <Grid item md={12} sx={{ paddingLeft: 10 }}>
                          <Button onClick={() => handleOpen(item)}>
                            <img src={item.image} style={{ width: 120, height: 120, borderRadius: 100 }}></img>
                          </Button>
                        </Grid>
                        <Grid item md={12} sx={{ justifyContent: "center", display: "block", alignItems: "center" }}>
                          <Typography variant="h6" sx={{ color: "white", paddingLeft: 16 }}>
                            {item.name}
                          </Typography>
                          <Typography variant="h6" sx={{ color: "white", paddingLeft: 16 }}>
                            {item.slave_type}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                ))}


              </> : <></>}
            </Grid>

          </Carousel.Item>
          <Carousel.Item interval={2000} style={{ padding: '60px' }}>
            <Grid container>
              <Grid item md={1.5}></Grid>
              {data2.length > 0 ? <>
                {data2.map(item => (
                  <>
                    <Grid item md={3.5}>
                      <Grid container>
                        <Grid item md={12} sx={{ paddingLeft: 2 }}>
                        <Button onClick={() => handleOpen(item)}>
                            <img src={item.image} style={{ width: 120, height: 120, borderRadius: 100 }}></img>
                          </Button>
                        </Grid>
                        <Grid item md={12}>
                          <Typography variant="h6" sx={{ color: "white", paddingLeft: 2 }}>
                            {item.name}
                          </Typography>
                          <Typography variant="h6" sx={{ color: "white", paddingLeft: 2 }}>
                            {item.slave_type}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>

                ))}
              </> : <></>}

            </Grid>
          </Carousel.Item>
          <Carousel.Item interval={2000} style={{ padding: '60px' }}>
            <Grid container>
              <Grid item md={1.5}></Grid>
              {data3.length > 0 ? <>
                {data3.map(item => (
                  <>
                    <Grid item md={3.5}>
                      <Grid container>
                        <Grid item md={12} sx={{ paddingLeft: 2 }}>
                        <Button onClick={() => handleOpen(item)}>
                            <img src={item.image} style={{ width: 120, height: 120, borderRadius: 100 }}></img>
                          </Button>
                        </Grid>
                        <Grid item md={12}>
                          <Typography variant="h6" sx={{ color: "white", paddingLeft: 2 }}>
                            {item.name}
                          </Typography>
                          <Typography variant="h6" sx={{ color: "white", paddingLeft: 2 }}>
                            {item.slave_type}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>

                ))}
              </> : <></>}

            </Grid>
          </Carousel.Item>
        </Carousel>
        </Grid>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {show ? <>
              <Grid container>
                <Grid item md={3}>
                  <Grid container>
                    <Grid item md={12}>
                      <img src={show.image} style={{ width: 100, height: 100, borderRadius: 100 }}></img>
                    </Grid>
                    <Grid item md={12}>
                      Social Media:
                    </Grid>
                    <Grid item md={4}>
                      <YouTubeIcon />
                    </Grid>
                    <Grid item md={4}>
                      <InstagramIcon />
                    </Grid>
                    <Grid item md={4}>
                      <FacebookIcon />
                    </Grid>
                  </Grid>

                </Grid>
                <Grid item md={9} sx={{paddingLeft:5}}>
                  <Grid container rowSpacing={1}>
                    <Grid item md={12}>
                      <Typography variant="h7" >
                        Name: {show.name}
                      </Typography>
                    </Grid>
                    <Grid item md={12}>
                      <Typography variant="h7" >
                        Description:{show.bio}
                      </Typography>
                    </Grid>
                    <Grid item md={12}>
                      <Typography variant="h7" >
                        Detail:{show.detail}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>


              </Grid>

            </> : <></>}

          </Box>
        </Modal>
    </>
  );
};

export default AboutUs;
