import React from 'react';
import './App.css';
import bGvideo from './videos/short.MOV'
import Sidebar from './Sidebar'
import Socials from './Socials'
import { Button } from 'antd'
import ReactGA from 'react-ga';
const TRACKING_ID = "G-JLH78CCXBN";

function App() { 
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <div>
            <video autoPlay loop muted playsInline className="video"><source src={bGvideo} type="video/mp4" /> </video>
            <header>
            <meta name="viewport" content="width=device-width, intial-scale=1.0" />
            <ul className='ul-header'>
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                <Socials />
            </ul>
            </header>
            <main>
            <h1 className='main-text'>Pioneer Palace</h1>
            <h2 className='main-button'>
                <Button target='_blank' href='https://calendly.com/pioneerpalace/pioneer-palace-gig' size='large' style={{ fontSize: "xxx-large", paddingTop: "auto", paddingBottom: "auto", marginTop: "10px", height: "auto", width: "auto" }} ghost>Click to book!</Button>
            </h2>
            </main>
            <footer className='footer'>This site is built and managed by Pioneer Palace</footer>
        </div >
    );
}

export default App;