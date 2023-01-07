import React from 'react';
import './App.css';
import bGvideo from './videos/short.MOV'
import Sidebar from './Sidebar'
import Socials from './Socials'
import { Button, Switch } from 'antd'
import ReactGA from 'react-ga';

const TRACKING_ID = "G-JLH78CCXBN";
const LoadVideo = () => {
    return (
        <video autoPlay loop muted playsInline className="video" src={bGvideo} type="video/mp4"></video>
    )
}

function App() {   
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);    
    return (
        <div>
            <LoadVideo />
            <header>
                <meta name="viewport" content="width=device-width, intial-scale=1.0" />
                <ul className='ul-header'>
                    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    <Socials />
                </ul>
            </header>
            <main>
            <div className='audio'>
                <Switch checkedChildren="Audio Enabled" unCheckedChildren="Audio Disabled"/>
            </div>
            <h1 className='main-text'>Pioneer Palace</h1>
            <h2 className='main-button'>
                <Button target='_blank' href='https://calendly.com/pioneerpalace/pioneer-palace-gig' size='large' style={{ fontSize: "xx-large", paddingTop: "auto", paddingBottom: "auto", marginTop: "10px", height: "auto", width: "auto" }} ghost>Click to book!</Button>
            </h2>
            </main>
            <footer className='footer'>This site is built and managed by Pioneer Palace</footer>
        </div >
    );
}

export default App;