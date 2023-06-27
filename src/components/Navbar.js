import React from 'react';
import { useState } from 'react';
import Home from './Home';
import AboutUs from './AboutUs';
import Project from './Project';
import Contact from './Contact';
import Movies from './Movies';
import { Link, animateScroll as scroll } from 'react-scroll';
import Us from './Us';
import { useEffect } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from '../images/logo.png';

export default function Navbar() {
  const handleScroll = () => {
    // Scroll logic here
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [select, setSelect] = useState(0);

  // Styles for the active links
  const styles1 = select === 1 ? { backgroundColor: '#2b2c2c', color: 'white' } : {};
  const styles2 = select === 2 ? { backgroundColor: '#2b2c2c', color: 'white' } : {};
  const styles3 = select === 3 ? { backgroundColor: '#2b2c2c', color: 'white' } : {};
  const styles4 = select === 4 ? { backgroundColor: '#2b2c2c', color: 'white' } : {};
  const styles5 = select === 5 ? { backgroundColor: '#2b2c2c', color: 'white' } : {};

  // Styles for the active link content
  const s1 = select === 1 ? { border: 'solid 2px #9a9f75', padding: 2, borderRadius: 10, color: 'white' } : {};
  const s2 = select === 2 ? { border: 'solid 2px #9a9f75', padding: 2, borderRadius: 10, color: 'white' } : {};
  const s3 = select === 3 ? { border: 'solid 2px #9a9f75', padding: 2, borderRadius: 10, color: 'white' } : {};
  const s4 = select === 4 ? { border: 'solid 2px #9a9f75', padding: 2, borderRadius: 10, color: 'white' } : {};
  const s5 = select === 5 ? { border: 'solid 2px #9a9f75', padding: 2, borderRadius: 10, color: 'white' } : {};

  return (
    <div>
      <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ backgroundColor: '#2b2c2c', padding: 3, paddingLeft: 10 }}>
          <img src={logo} style={{ width: '4%' }} />
        </div>
        <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary p-0 justify-content-start" style={{ backgroundColor: '#b62e2f' }}>
          <div className="container-fluid" style={{ backgroundColor: '#b62e2f' }}>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div>
              <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
              <div className="navbar-nav mb-4 mb-lg-0">
                <Link to="home" smooth={true} duration={300}>
                  <div style={styles1} onClick={() => setSelect(1)}>
                    <a className="nav-link active" aria-current="page" href="#">
                      <div style={s1}>Home</div>
                    </a>
                  </div>
                </Link>
                <Link to="us" smooth={true} duration={300}>
                  <div style={styles5} onClick={() => setSelect(5)}>
                    <a className="nav-link active" aria-current="page" href="#">
                      <div style={s5}>Our Story</div>
                    </a>
                  </div>
                </Link>
                <Link to="project" smooth={true} duration={300}>
                  <div style={styles3} onClick={() => setSelect(3)}>
                    <a className="nav-link active" href="#">
                      <div style={s3}>Projects</div>
                    </a>
                  </div>
                </Link>
                <Link to="about" smooth={true} duration={300}>
                  <div style={styles2} onClick={() => setSelect(2)}>
                    <a className="nav-link active" href="#">
                      <div style={s2}>About us</div>
                    </a>
                  </div>
                </Link>
                <Link to="contact" smooth={false} duration={500}>
                  <div style={styles4} onClick={() => setSelect(4)}>
                    <a className="nav-link active" href="#">
                      <div style={s4}>Contact us</div>
                    </a>
                  </div>
                </Link>
              </div>
            </div>
            </div>
            
            <div style={{display:'flex'}}>
              <div style={{ paddingLeft: 5 }}>
              <InstagramIcon />
            </div>
            <div style={{ paddingLeft: 5 }}>
              <YouTubeIcon />
            </div>
            <div style={{ paddingLeft: 5 }}>
              <FacebookIcon />
            </div>
            </div>
            
          </div>
        </nav>
        {/* jcksjck */}
        </div>
        
      </div>

      <div id="home">
        <Home></Home>
      </div>
      <div id="us">
        <Us></Us>
      </div>
      <div id="project">
        <Project></Project>
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
