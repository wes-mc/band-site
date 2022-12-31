import React, { useState, useRef, useEffect } from 'react'
import { SocialIcon } from 'react-social-icons';

import img1 from './images/bandgroup.jpg'
import img2 from './images/calebgoofy.jpg'
import img3 from './images/drumpov.jpg'
import img4 from './images/pioneerpalacelogo.png'

const Page = () => {
  const images = [img1, img2, img3];

  const [currentImage, setCurrentImage] = useState(0)

  let sliderInterval = useRef();

  let cycleImages = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

  useEffect(() => {
    sliderInterval = setInterval(() => {
      cycleImages();
    }, 5000);
    return () => {
      clearInterval(sliderInterval);
    };
  });

  return (
    <div className="App" style={{ backgroundImage: `url(${images[currentImage]})` }}>
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
};


export default Page