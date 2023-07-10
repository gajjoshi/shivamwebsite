import React from 'react';
import { Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

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
      <Grid container sx={{ backgroundColor: '' }}>
        <Grid item xs={12} md={5} sx={{ backgroundColor: '', height: { xs: 200, sm: 300 }, display: 'grid' }}>
          <Typography className='heading' variant="h6" sx={{ fontFamily: 'Rosarivo', fontSize: { xs: '40px', sm: '60px' }, color: '#b62e2f', textAlign: { xs: 'center', sm: 'center',md:'center' } }}>
            <motion.div initial={{ x: { xs: 100, sm: 100, md:200}  }} animate={{ x: { xs: 300, sm: 300, md:400 } }} transition={{ delay: 0.5, duration: 2, type: 'spring', stiffness: 100 }}>WHO</motion.div>
            <motion.div initial={{ x: { xs: 100, sm: 100, md:300}  }} animate={{ x: { xs: 300, sm: 300, md:480} }} transition={{ delay: 0.5, duration: 0.5, type: 'ease' }}>ARE</motion.div>
            <motion.div initial={{ x: { xs: 100, sm: 100, md:200}  }} animate={{ x: { xs: 300, sm: 300, md:400} }} transition={{ delay: 0.5, duration: 2, type: 'spring', stiffness: 100 }}>WE</motion.div>
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} sx={{ height: { xs: 200, sm: 300 }, color: 'white', paddingTop: { xs: '20px', sm: '70px' }, textAlign: { xs: 'center', sm: 'left' }, color: '#9a9f75' }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quas ratione animi at ullam, eaque neque provident aliquam reprehenderit aliquid soluta repellendus dolores. Repellat accusantium possimus quaerat impedit maiores itaque!
        </Grid>
        <Grid item md={2} xs={0} sm={0}/>
      </Grid>
    </div>
  );
}
