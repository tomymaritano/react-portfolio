import React from "react";
import {
  Box,
  Flex,
  Spacer,
  IconButton,
  useDisclosure,
  VStack,
  HStack,
  CloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <Box p={4}>
      <Flex alignItems="center">
        <Box>
          {/* Logo o título del Navbar */}
          <span>TM.</span>
        </Box>
        <Spacer />
        {/* Menú para dispositivos móviles */}
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            icon={<HamburgerIcon />}
            size="md"
            onClick={isOpen ? onClose : onOpen}
            aria-label="Abrir menú"
          />
        </Box>
        {/* Menú para pantallas más grandes */}
        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          <span>Inicio</span>
          <span>Productos</span>
          <span>Servicios</span>
          <span>Contacto</span>
        </HStack>
      </Flex>
      {/* Menú desplegable para dispositivos móviles */}
      <VStack
        pos="absolute"
        top={0}
        left={0}
        right={0}
        display={{ base: isOpen ? "flex" : "none", md: "none" }}
        flexDirection="column"
        p={2}
        pb={4}
        m={2}
        bg="black"
        boxShadow="md"
      >
        <span>Inicio</span>
        <span>Productos</span>
        <span>Servicios</span>
        <span>Contacto</span>
        {/* Botón para cerrar el menú móvil */}
        <IconButton
          icon={<CloseButton />}
          size="md"
          onClick={isOpen ? onClose : onOpen}
          aria-label="Abrir menú"
        />
      </VStack>
    </Box>
  );
};

export default Navbar;
