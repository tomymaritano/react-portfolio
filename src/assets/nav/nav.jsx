import React from "react";
import {
  Box,
  Flex,
  Spacer,
  IconButton,
  useDisclosure,
  Link,
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
          <span>
            <Link href="./app.jsx">Home</Link>
          </span>
          <span>
            <Link href="#">About me</Link>
          </span>
          <span>
            <Link href="#">Projects</Link>
          </span>
          <span>
            <Link href="#">Contact</Link>
          </span>
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
        <span>
          <Link href="./app.jsx">Home</Link>
        </span>
        <span>
          <Link href="#">About me</Link>
        </span>
        <span>
          <Link href="#">Projects</Link>
        </span>
        <span>
          <Link href="#">Contact</Link>
        </span>
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
