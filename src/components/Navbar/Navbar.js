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
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  SunIcon,
} from "@chakra-ui/icons";
import TextAnimation from "../Bienvenida/Text";
import { FaBlog } from "react-icons/fa";

const Navbar = () => {
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
      bg="rgb(255, 255, 255, 0.8)"
    >
      <Box>
        <TextAnimation />
      </Box>
      <Box>
        <Menu>
          <IconButton
            size={"sm"}
            color={"gray"}
            bg={"#FBD38D"}
            aria-label="Options"
            icon={<SunIcon />}
            variant=""
            mr={1}
            _hover={{ borderColor: "#FBD38D", bg: "#FBD38D" }}
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
            <MenuItem icon={<FaBlog />}>
              Blog
            </MenuItem>
            <MenuItem icon={<ExternalLinkIcon />}>
              Videogames
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
