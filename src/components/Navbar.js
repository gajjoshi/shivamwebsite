import React from 'react';
import { useState } from 'react';
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';
import { Link, animateScroll as scroll } from 'react-scroll';
import Us from './Us';
import { useEffect } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Navbar.css';
import pe from '../images/pe.png';
export default function Navbar() {
  const handleScroll = () => {
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    //console.log(scrollY);
    if(scrollY>=0 && scrollY<=300)
    { 
      setSelect(1)
    }
    if(scrollY>300 && scrollY<=600)
    { 
      setSelect(5)
    }
    if(scrollY>=600 && scrollY<=1200)
    {
      setSelect(3)
    }
    if(scrollY>=1200 && scrollY<=1800)
    {
      setSelect(2)
    }
    if(scrollY>=1800 )
    {
      setSelect(4)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [select, setSelect] = useState(0);

  // Styles for the active links
  const styles1 = select === 1 ? {  color: 'white' } : {};
  const styles2 = select === 2 ? { color: 'white' } : {};
  const styles3 = select === 3 ? {  color: 'white' } : {};
  const styles4 = select === 4 ? {  color: 'white' } : {};
  const styles5 = select === 5 ? {  color: 'white' } : {};

  // Styles for the active link content
  const s1 = select === 1 ? {  color: 'red' , fontWeight:'bold' , fontSize:'large'} : {fontWeight:'bold', fontSize:'large',color: 'white'};
  const s2 = select === 2 ? {  color: 'red' , fontWeight:'bold', fontSize:'large' } : {fontWeight:'bold', fontSize:'large',color: 'white'};
  const s3 = select === 3 ? {  color: 'red'  , fontWeight:'bold', fontSize:'large' } : {fontWeight:'bold', fontSize:'large',color: 'white'};
  const s4 = select === 4 ? {  color: 'red'  , fontWeight:'bold', fontSize:'large' } : {fontWeight:'bold', fontSize:'large',color: 'white'};
  const s5 = select === 5 ? {  color: 'red'  , fontWeight:'bold', fontSize:'large' } : {fontWeight:'bold', fontSize:'large',color: 'white'};

  const st={paddingLeft:20,paddingRight:20}
  return (
    <div className='fullbackground'>
      <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        {/* <div style={{ backgroundColor: '#2b2c2c', padding: 1, paddingLeft: 10 }}>
          <img src={pe} style={{ width: '4%',padding:0 }} />
        </div> */}
        <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary p-0 justify-content-start" style={{  }}>
          <div className="container-fluid" style={{ }}>
              {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <img src={pe} style={{  }} className='logopic' />
            <div style={{paddingLeft:"15%"}}>
            
              <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
              <div className="navbar-nav mb-4 mb-lg-0">
                <Link to="home" smooth={true} duration={300} offset={-200}>
                  <div style={st}>
                  <div style={styles1} >
                    <a className="nav-link active" aria-current="page" href="#">
                      <div className='h' style={s1}>Home</div>
                    </a>
                  </div>
                  </div>
                </Link>
                <Link to="us" smooth={true} duration={300} offset={-170}>
                <div style={st}>
                  <div style={styles5} >
                    <a className="nav-link active" aria-current="page" href="#">
                      <div className='h' style={s5}>Our Story</div>
                    </a>
                  </div>
                </div>
                </Link>

                <Link to="about" smooth={true} duration={300} offset={-370}>
                  <div style={st}>
                  <div style={styles2} >
                    <a className="nav-link active" href="#">
                      <div className='h' style={s2}>About us</div>
                    </a>
                  </div>
                  </div>
                </Link>
                <Link to="contact" smooth={false} duration={500}>
                  <div style={st}>
                  <div style={styles4} >
                    <a className="nav-link active" href="#">
                      <div className='h' style={s4}>Contact us</div>
                    </a>
                  </div>
                  </div>
                </Link>
              </div>
            </div>
            </div>
            
            <div style={{display:'flex'}}>
              <div style={{ paddingLeft: 5 }}>
                <a href="https://www.instagram.com/filmysiblingpictures/">
                <InstagramIcon sx={{color:'white'}}/>
                </a>
            </div>
            <div style={{ paddingLeft: 5 }}>
              <YouTubeIcon sx={{color:'white'}}/>
            </div>
            <div style={{ paddingLeft: 5 }}>
              <FacebookIcon sx={{color:'white'}}/>
            </div>
            </div>
            
          </div>
        </nav>
        </div>
        
      </div>

      <div id="home">
        <Home></Home>
      </div>
      {/* <div id="bio">
        <Producerbio />
      </div> */}
      <div id="us">
        <Us></Us>
      </div>

      <div id="about">
        <AboutUs></AboutUs>
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
    </div>
  );
}
