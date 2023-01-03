import React, { useState, useRef, useEffect } from 'react'
import img1 from './images/bandgroup.jpg'
import img2 from './images/calebgoofy.jpg'
import img3 from './images/drumpov.jpg'
import bGvideo from './videos/short.MOV'
import Sidebar from './Sidebar';
import Socials from './Socials';

const Page = () => {
  const images = [img1, img2, img3];

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
      </main>
    </div>
  );
};

export default Page