import React from 'react'
import './SlaveDetails.css'

const SlaveDetails = () => {
    return (
        <div>
            <div className='details'>
                <div className='top'>
                    <div className='left'>
                    <img className='left-img' src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png" alt="movie" />

                    </div>
                    <div className='right'>
                        <h2>Profile</h2>
                        <p className='short-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus praesentium libero velit voluptas laborum excepturi officiis,
                         architecto, maiores perspiciatis aperiam est a? 
                         Accusantium sint id, nam dolorem
                        <br />  maxime cupiditate beatae!</p>
                        <h2>Experience</h2>
                        <p className='short-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Temporibus praesentium libero velit voluptas laborum excepturi officiis,
                        
                        <br />  maxime cupiditate beatae!</p>

                    </div>
                </div>
                <div className='bottom'>
                    
                    <h2>Long Detail</h2>
                    <p className='short-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Temporibus praesentium libero velit voluptas laborum excepturi officiis,
                         architecto, maiores perspiciatis aperiam est a? 
                        <br /> Accusantium sint id, nam dolorem
                        <br />  maxime cupiditate beatae!</p>

                </div>


            </div>

        </div>
    )
}

export default SlaveDetails