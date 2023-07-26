import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box
      bgGradient='linear(to-r, #3D3D3D, #0F0F0F)'
      p={5}
    >
      <Flex alignItems="center" justifyContent="space-between" maxWidth="35%" mx="auto">
        <Box>
          <Link href="/" color="white" fontSize="lg" fontWeight="bold" _hover={{ textDecoration: 'none' }}>
            Tomy Maritano.
          </Link>
        </Box>
        <Box>
          <Link href="/inicio" color="white" mr={4} _hover={{ textDecoration: 'none' }}>
            Inicio
          </Link>
          <Link href="/servicios" color="white" mr={4} _hover={{ textDecoration: 'none' }}>
            Servicios
          </Link>
          <Link href="/contacto" color="white" mr={4} _hover={{ textDecoration: 'none' }}>
            Contacto
          </Link>
          {/* Puedes agregar más enlaces aquí */}
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
