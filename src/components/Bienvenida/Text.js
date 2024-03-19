import React, { useEffect } from 'react';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { Box } from '@chakra-ui/react';

const TextAnimation = () => {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    gsap.to(".text", { 
      duration: 2, 
      text: "Tomy maritano",
      ease: "none"
    });
  }, []);

  return <Box className="text" style={{fontSize: "12px", fontWeight: "bold", fontFamily: "monospace"}}></Box>;
};

export default TextAnimation;
