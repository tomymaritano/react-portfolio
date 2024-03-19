import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const HoverImage = ({ src, alt }) => {
  return (
    <Box
    
      maxW={"15vh"}
      borderWidth="1px"
      borderRadius="full"
      overflow="hidden"
      _hover={{
        transform: 'scale(1.05)', // Aumenta el tamaño de la imagen
        transition: 'transform 0.2s', // Hace la transición más suave
      }}
    >
      <Image src={src} alt={alt} />
    </Box>
  );
};

export default HoverImage;
