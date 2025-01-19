// src/components/SocialLinks.js
import React from 'react';
import './video.css'

const Video = () => {
    return (
        <section id="socials">
            <h2>Популярные песни</h2>
            
            <div className='container'>
                <div className='musicContainer'>
                    Karedis
                    <div className='karedis'></div>
                </div>
                <div className='musicContainer'>
                    Wareson
                    <div className='wareson'></div>
                </div>
                <div className='musicContainer'>
                    Papu
                    <div className='papy'></div>
                </div>
                <div className='musicContainer'>
                    Vochkume
                    <div className='vochkume'></div>
                </div>
                
            </div>
        </section>
    );
};

export default Video;
