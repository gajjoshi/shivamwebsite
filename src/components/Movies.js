import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Mov from './Mov';
import './Navbar.css';
import { useEffect } from 'react';
export default function Movies() {
    const [value, setValue] = React.useState('1');
    //console.log(value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    //localStorage.setItem("select",value)
    setValue(localStorage.getItem("select"))
  }, [])
  const styles = {
    tab: {
        color: 'primary',
    },
    tabItemContainer: {
        background: 'none'
    }
}
  return (
    <>
    <div className='fullbackground'>
     <Box sx={{ width: '100%', typography: 'body1',paddingTop:'40px' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} centered aria-label="lab API tabs example" indicatorColor="secondary" textColor="white   ">
            <Tab label="Previous" value="1" label={<span style={{ color: 'white' }}>Previous</span>} ></Tab>
            <Tab label="Current" value="2" label={<span style={{ color: 'white' }}>Current</span>} />
            <Tab label="Upcoming" value="3" label={<span style={{ color: 'white' }}>Upcoming</span>} />
          </TabList>
        </Box>  
        <TabPanel value="1" style={styles.tab}>
        <Mov value={value}></Mov>
        </TabPanel>
        <TabPanel value="2">
        <Mov value={value}></Mov>
        </TabPanel>
        <TabPanel value="3">
        <Mov value={value}></Mov>
        </TabPanel>
      </TabContext>
    </Box>
    </div>
    
    </>
  )
}
