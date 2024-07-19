
import React from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const logos = [

  "https://transparentbusiness.com/img/svg/tb-white.svg",
  "https://unicoin.com/images/main/unicoin-logo-new.svg",
   "https://unicornhunters.com/images/main/unicoin-logo-text.svg",

   "https://wheresheworks.com/wp-content/uploads/2021/06/logo.png",

  // Añade más logos según sea necesario
];

const carouselVariants = {
  animate: {
    x: [0, -100 * logos.length], // Ajusta este valor dependiendo del número total de logos y su ancho
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20, // Ajusta la duración para controlar la velocidad del carrusel
        ease: "linear"
      }
    }
  }
};

const Carousel = () => {
  return (
    <Box bg="#FCD144" w="100%" p={1} color="black" overflow="hidden" display="flex" alignItems="center" height="100px">
      <motion.div
        variants={carouselVariants}
        initial="animate"
        animate="animate"
        style={{ display: 'flex', width: `calc(100px * ${logos.length})` }} // Asegúrate de que el contenedor tenga suficiente ancho
      >
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index}`} style={{ width: "100px", height: "100px" }} />
        ))}
        {/* Repetimos los logos para crear la ilusión de un flujo infinito */}
        {logos.map((logo, index) => (
          <img key={`second-set-${index}`} src={logo} alt={`Logo ${index}`} style={{ width: "100px", height: "100px" }} />
        ))}
      </motion.div>
    </Box>
  );
};

export default Carousel;
