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

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
            aria-label="Options"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            mr={1}
            onClick={toggleColorMode}
            _hover={{ borderColor: "whiteAlpha.100", bg: "whiteAlpha.100" }}
            // Aplica transiciones a las propiedades bg y color
            transition="background-color 0.3s ease-out, color 0.3s ease-out"
            // Estilos personalizados para la animación del icono
            _focus={{
              boxShadow: "none",
            }}
            sx={{
              "& svg": {
                // Transición para la rotación del icono
                transition: "transform 0.3s ease-out",
              },
              "&:hover svg": {
                // Rotar el icono en el hover
                transform: "rotate(20deg)",
              },
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
