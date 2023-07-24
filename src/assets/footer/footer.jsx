import React from "react";
import "./footer.css";

import { FaGithub, FaTwitter, FaLinkedin, FaTerminal } from 'react-icons/fa'
import { Container, Box, List, ListItem } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container
      minW={"55%"}
      h={20}
      display={"flex"}
      justifyContent={'space-between'}
      alignItems={"center"}
    >
      <Box>© 2023 Tomy Maritano. All Rights Reserved.</Box>
      <Box>
        <List display={"flex"} justifyContent={"start"}>
          <ListItem p={1}>
            <FaGithub size={"24"} />
          </ListItem>
          <ListItem p={1}>
            <FaTwitter size={"24"} />
          </ListItem>
          <ListItem p={1}>
            <FaLinkedin size={"24"} />
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem p={1}>
            <FaTerminal size={"24"} />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Footer;
