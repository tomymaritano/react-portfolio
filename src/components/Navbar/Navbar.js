import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  ExternalLinkIcon,
  SunIcon,
  MoonIcon,
} from "@chakra-ui/icons";
import TextAnimation from "../Bienvenida/Text";
import { useColorMode } from "@chakra-ui/react";
import { FaBlog } from "react-icons/fa";
import { keyframes } from "@emotion/react";
import { useState } from "react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isAnimating, setIsAnimating] = useState(false);

  // Función para manejar el clic, activa la animación y cambia el modo
  const handleClick = () => {
    setIsAnimating(true); // Activa la animación
    setTimeout(() => {
      toggleColorMode(); // Cambia el modo de color en la mitad de la animación
    }, 500); // Ajusta este tiempo a la mitad de la duración total de la animación
    setTimeout(() => setIsAnimating(false), 1000); // Asegura que la animación se complete
  };

  const rotateAndScale = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.1) rotate(180deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
`;

  return (
    <Flex
      zIndex={1}
      position={"sticky"}
      top={0}
      p={3}
      alignItems={"center"}
      justifyContent={["space-between", "space-evenly"]} // Primero móvil, luego web
      backdropFilter="blur(10px)"
      borderBottom={"none"}
      bg={
        colorMode === "dark"
          ? "rgb(32, 32, 36, 0.8)"
          : "rgb(255, 255, 255, 0.8)"
      }
    >
      <Box>
        <TextAnimation />
      </Box>
      <Box>
        <Menu>
          <IconButton
            size="sm"
            bg={colorMode === "light" ? "purple.300" : "#fbd38d"}
            color={colorMode === "light" ? "white" : "black"}
            aria-label="Change theme"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            mr={1}
            onClick={handleClick}
            _hover={{ bg: colorMode === "light" ? "purple.400" : "#fac75a" }}
            sx={{
              animation: isAnimating
                ? `${rotateAndScale} 1s ease-in-out forwards`
                : "none",
            }}
          />
          <MenuButton
            size={"sm"}
            color={"gray"}
            borderColor={"gray"}
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<FaBlog />}>Blog</MenuItem>
            <MenuItem icon={<ExternalLinkIcon />}>Videogames</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
