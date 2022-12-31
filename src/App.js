import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import BackgroundSlider from './BackgroundSlider'

function App() {
    return (
        <div className="App">
            <BackgroundSlider />
            <header>
                <ul className='ul-header'>
                    <SocialIcon url="https://www.facebook.com/people/Pioneer-Palace/100086961293325/" target="_blank" network='facebook' style={{ height: 50, width: 50, marginRight: 10 }} fgColor="#ffffff" />
                    <SocialIcon url="https://www.instagram.com/pioneerpalace/?hl=en" target="_blank" network='instagram' style={{ height: 50, width: 50, marginRight: 10 }} fgColor="#ffffff" />
                    <SocialIcon url="mailto:kylemarlow95@gmail.com?subject=PioneerPalace" network='mailto' style={{ height: 50, width: 50 }} fgColor="#ffffff" />
                </ul>
            </header>
            <main>
                <h1 className='main-text'>Pioneer Palace</h1>
                <ul className='ul-menu'>
                    <li><a href="/">HOME</a></li>
                    <li><a>ABOUT</a></li>
                    <li><a>CONTACT</a></li>
                </ul>
            </main>
        </div>
    );
}

export default App;