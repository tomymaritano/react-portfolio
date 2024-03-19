import React from 'react';
import { Box, Heading, Image, Text, SimpleGrid } from '@chakra-ui/react';

const juegosFavoritos = [
  {
    nombre: 'The Legend of Zelda: Breath of the Wild',
    imagenUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
    descripcion: 'Una descripción breve del por qué es tu juego favorito.'
  },
  {
    nombre: 'The Legend of Zelda: Breath of the Wild',
    imagenUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
    descripcion: 'Una descripción breve del por qué es tu juego favorito.'
  },
  {
    nombre: 'The Legend of Zelda: Breath of the Wild',
    imagenUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
    descripcion: 'Una descripción breve del por qué es tu juego favorito.'
  },
  {
    nombre: 'The Legend of Zelda: Breath of the Wild',
    imagenUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
    descripcion: 'Una descripción breve del por qué es tu juego favorito.'
  },
  {
    nombre: 'The Legend of Zelda: Breath of the Wild',
    imagenUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
    descripcion: 'Una descripción breve del por qué es tu juego favorito.'
  },
  {
    nombre: 'The Legend of Zelda: Breath of the Wild',
    imagenUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
    descripcion: 'Una descripción breve del por qué es tu juego favorito.'
  },

  // Añade más juegos aquí
];

const SeccionVideojuegos = () => {
  return (
    <Box as="section">
      <Heading fontFamily={'monospace'} size="md" mb={4}>Mis Videojuegos Favoritos</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
        {juegosFavoritos.map((juego, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={juego.imagenUrl} alt={`Carátula de ${juego.nombre}`} />
            <Box p={5}>
              <Heading size="md">{juego.nombre}</Heading>
              <Text mt={2}>{juego.descripcion}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SeccionVideojuegos;
