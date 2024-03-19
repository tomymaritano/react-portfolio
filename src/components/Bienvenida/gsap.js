import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ImageGallery = () => {
  const galleryRef = useRef();
  const images = [
    "https://www.cnet.com/a/img/resize/ea66ddc9276eef2884da221adc70ed1cf1545951/hub/2021/10/16/11804578-0dbc-42af-bcd1-3bc7b1394962/the-batman-2022-teaser-poster-batman-01-promo.jpg?auto=webp&fit=crop&height=675&width=1200",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5piJgjisyarw3g00mRqiBHMBhHI2hKqExjfuMyEgwnXAGAQjlqRcFsmLW-XijBRhaSNo&usqp=CAU",
    "https://media.cnn.com/api/v1/images/stellar/prod/211227135008-02-the-batman-trailer.jpg?c=16x9&q=h_833,w_1480,c_fill",
    // Agrega tantas imágenes como desees
  ];

  useEffect(() => {
    gsap.fromTo(galleryRef.current.children, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1 }
    );
  }, []);

  return (
    <div ref={galleryRef} style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {images.map((image, index) => (
        <div key={index} style={{ width: '30%', overflow: 'hidden' }}>
          <img src={image} alt={`Gallery ${index}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
