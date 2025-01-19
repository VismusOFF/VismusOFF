// src/components/SocialLinks.js
import React from 'react';
import "./social.css"

const SocialLinks = () => {
    return (
        <section id="socials">
            <h2>Социальные сети</h2>
            <div className='container'>
                 <a href="https://www.youtube.com/@xx_vismus_xx6550"><div className='yotube'></div></a>
                 <a href="https://open.spotify.com/artist/2aTcKjEtGrtKqWXGUy8eYl?si=Oc6uiNKkSYy3KjJonDXrSw"> <div className='spotify'></div></a>
                 <a href="https://music.yandex.ru/artist/18855397"><div className='yandex'></div></a>
                 <a href="https://vk.com/xx_vismux_xx"> <div className='vk'></div></a>
                 <a href="https://zvuk.com/artist/212405496"> <div className='zvuk'></div></a>
            </div>
        </section>
    );
};

export default SocialLinks;
