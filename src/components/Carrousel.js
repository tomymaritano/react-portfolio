import React from 'react';
import { Box, HStack,  Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Importación de imágenes
import image1 from './assets/image 1.png';
import image2 from './assets/image 4.png';
import image3 from './assets/image 5.png';
import image4 from './assets/image 6.png';
import image5 from './assets/UH logo.png';
import image6 from './assets/logo-unicoin.png';

const images = [image1, image2, image3, image4, image5, image6];

const Carousel = () => {
  // Animación para mover las imágenes de derecha a izquierda
  const marqueeVariants = {
    animate: {
      x: [-1000, 1000], // Ajusta estos valores basándote en el ancho total de tu conjunto de imágenes
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30, // Duración de cómo de rápido quieres que se mueva el carrusel
          ease: "linear"
        }
      }
    }
  };

  return (
    <Box w="100%" pt={10} pb={20} color="black" overflow="hidden" display="flex" alignItems="center">
      <motion.div variants={marqueeVariants} animate="animate">
        <HStack spacing={20}>
          {images.map((src, index) => (
            <Image key={index}  src={src} />
          ))}
        </HStack>
      </motion.div>
    </Box>
  );
};

export default Carousel;
