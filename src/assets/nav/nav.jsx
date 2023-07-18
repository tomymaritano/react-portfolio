import React from 'react';
import { Box, Flex, Link, Button, Spacer, Image } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="black" p={4} blur={3} backdropBlur={4}>
      <Flex alignItems="center" justifyContent="space-between" maxWidth="800px" mx="auto">
        <Box>
          <Link href="/" color="white" fontSize="lg" fontWeight="bold" _hover={{ textDecoration: 'none' }}>
            TM.
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
