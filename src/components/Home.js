import React from 'react'
import head from '../images/head.png'
import './Home.css'
import image from '../images/7string.png'

const Home = () => {
    return (
        <div >

            <div className='main' stlye={{ backgroundColor: "" , paddingLeft:'350px'}}>
                <div className='left'>
                    <img className='left-img' src={image} alt="movie" />
                </div>
                <div className='right'>
                    <div className='right-img'> 
                        <img src={head}></img>
                    </div>
                    <div >
                        <p className='right-lower'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>  Aliquam vero, inventore facilis laborum sapiente <br></br> dignissimos magnam quas. Dolor iure possimus fugiat, vel ratione porro <br></br> ipsum expedita officia doloremque. Aliquid, consequuntur!</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home