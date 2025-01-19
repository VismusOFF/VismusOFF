// src/App.js
import React from 'react';
import Header from './components/header';
import About from './components/about';
import SocialLinks from './components/social';
import Contact from './components/contact';
import Developer from './components/develoer';
import Video from './components/video';


const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Developer/>
            <Video/>
            <SocialLinks />
            <Contact />
        </div>
    );
};

export default App;
