import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Mov from './Mov';

export default function Movies() {
    const [value, setValue] = React.useState('1');
    // if(localStorage.getItem("select")==1){
    //     setValue("1")
    // }
    // else if(localStorage.getItem("select")==2){
    //     setValue("2")
    // }
    // else if(localStorage.getItem("select")==3){
    //     setValue("3")
    // }
    console.log(value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
     <Box sx={{ width: '100%', typography: 'body1',paddingTop:'40px' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} centered aria-label="lab API tabs example" indicatorColor="secondary" textColor="secondary">
            <Tab label="Previous" value="1"   />
            <Tab label="Current" value="2" />
            <Tab label="Upcoming" value="3" />
          </TabList>
        </Box>  
        <TabPanel value="1">
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
    
    
    </>
  )
}
