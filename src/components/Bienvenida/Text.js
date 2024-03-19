import React, { useEffect } from 'react';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { Box } from '@chakra-ui/react';

const TextAnimation = () => {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    gsap.to(".text", { 
      duration: 2, 
      text: "Tomy Maritano",
      ease: "power2",
      repeat: Infinity,
    });
  }, []);

  return <Box width={'200px'} className="text" style={{fontSize: "12px", fontWeight: "bold", fontFamily: "monospace"}}></Box>;
};

export default TextAnimation;
