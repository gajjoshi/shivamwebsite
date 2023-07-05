import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


const Mov = ({ value }) => {
    console.log(typeof(value));
    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
const [data, setData] = React.useState([]); 

  useEffect(() => { 
    let url="https://prodhouse.pythonanywhere.com/search/?project_type="
    
    if(value=='1'){
        url=url+"past"
    }
    else if(value=='2'){
        url=url+"current"
    }
    else if(value=='3'){
        url=url+"upcoming"
    }
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: url,
        headers: { }
      };
      
      async function makeRequest() {
        try {
          const response = await axios.request(config);
          console.log((response.data));
          setData(response.data);
        }
        catch (error) {
          console.log(error);
        }
      }
      
      makeRequest();
  }, []);

  return (
    <Grid container spacing={2}>
        {data?<>
        {console.log(data)}
            {data.map((item) => {
                return(
            <Grid item md={4} sm={12} xs={12}>
                {console.log("item:",item)}
        <Card sx={{ maxWidth: 300,height:"400px",textAlign:"center" }}>
      <CardHeader
        
        title={item.name}
      >hii</CardHeader>
      <CardMedia
        component="img"
        height="400"
        image={item.image}
        alt="Paella dish"
      />
    </Card>
        </Grid>
                )
        })}
        
        </>:<>Loading...</>}
    </Grid>
  );
};

export default Mov;
