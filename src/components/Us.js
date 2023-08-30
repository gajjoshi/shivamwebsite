import React from 'react';
import { Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import './us.css'
export default function Us() {
  const [view, setView] = React.useState(false);
  const handleScroll = () => {
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    // console.log('Scroll X:', scrollX);
    // console.log('Scroll Y:', scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Grid container sx={{ marginBottom:{md:"100px"}}}>
        <Grid item xs={12} sm={12} md={5} sx={{ backgroundColor: '', height: { xs: 200, sm: 200 }, paddingTop: { xs: '20px', sm: '1%',md:"5%" },display: 'flex',justifyContent:"center",alignItems:"center" }}>
          <Typography className='heading' variant="h6" sx={{paddingTop: { xs: '20px', sm: '10px',md:"130px" }, fontFamily: 'BebasNeueRegular', fontSize: { xs: '40px', sm: '60px' }, color: '#b62e2f', textAlign: { xs: 'center', sm: 'justify',md:'center' } }}>
            {/* <motion.div initial={{ x: { xs: 100, sm: 100, md:200}  }} animate={{ x: { xs: 300, sm: 300, md:400 } }} transition={{ delay: 0.5, duration: 2, type: 'spring', stiffness: 100 }}>WHO</motion.div> */}
            {/* <motion.div initial={{ x: { xs: 100, sm: 100, md:300}  }} animate={{ x: { xs: 300, sm: 300, md:480} }} transition={{ delay: 0.5, duration: 0.5, type: 'ease' }}>ARE WE</motion.div> */}
              {/* <motion.div initial={{ x: { xs: 100, sm: 100, md:200}  }} animate={{ x: { xs: 300, sm: 300, md:400} }} transition={{ delay: 0.5, duration: 2, type: 'spring', stiffness: 100 }}>WE</motion.div> */}
            WHO ARE WE
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={7} sx={{ height: { xs: 200, sm: 300 }, color: 'white', paddingTop: { xs: '20px', sm: '20px' },padding:{xs:'10px'}, textAlign: { xs: 'center', sm: 'left' }, color: '#9a9f75',fontSize:{xs:"15px",md:"25px"},textAlign: { xs: 'center', sm: 'center',md:'center' } }}>
            <span >Welcome to Pinngaksh Enterconn</span>
            <br/>
            The nexus of innovative storytelling. We specialize in curating gripping narratives that transcend conventions and kindle the flames of imagination.

            With a fusion of creativity and expertise, we craft unique tales that leave an indelible mark on our viewers. Our productions are more than content – they are immersive experiences that captivate and resonate.

            Join us in exploring new dimensions of entertainment, where each story is a journey and every frame is a brushstroke of brilliance.
            <br/>
            <span > At Pinngaksh Enterconn, we don't just tell stories; we redefine them</span>
           </Grid>
        <Grid item md={0} xs={12} sm={12} className='tp' />
      </Grid>
    </div>
  );
}
