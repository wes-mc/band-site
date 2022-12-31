import React, { useState, useRef, useEffect } from 'react'
import './backgroundslider.css'
import imageSlide from './data'

import img1 from './images/bandgroup.jpg'
import img2 from './images/calebgoofy.jpg'
import img3 from './images/drumpov.jpg'

const BackgroundSlider = () => {

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
    <div className="imgWrapper">
      {images.map((img, index) => {
        return (
          <img
            src={img}
            className={
              index === currentImage ? "imageActive homeImage" : "image"
            }
          />
        );
      })}
    </div>
  );
};


export default BackgroundSlider