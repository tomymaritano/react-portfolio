import { Box, HStack, Heading, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiWorld } from "react-icons/ti";

const About = () => {
  return (
    <Box pb={4}>
      <Heading fontFamily={'monospace'} fontSize={"20px"} pb={4}>
        About me
      </Heading>
      <Text fontSize={"14px"}>
        {" "}
        About As a Full Stack Engineer, I have successfully taken multiple
        products from 0 to 1. I am passionate about the latest technologies and
        digital forensics.
      </Text>
      <HStack alignItems={"center"} pt={2} pb={2}>
            <TiWorld boxSize={4} />
            <Text fontSize={'14px'}>Copenhagen, Denmark.</Text>
          </HStack>
          <HStack>
            <IconButton
            size={'sm'}
              border={"1px solid"}
              borderColor={'#e8e8e8'}
              color={"gray"}
              aria-label="Search database"
              icon={<FaGithub />}
            />
            <IconButton
            size={'sm'}
              border={"1px solid"}
              borderColor={'#e8e8e8'}
              color={"gray"}
              aria-label="Search database"
              icon={<FaLinkedin />}
            />
            <IconButton
            size={'sm'}
              border={"1px solid"}
              borderColor={'#e8e8e8'}
              color={"gray"}
              aria-label="Search database"
              icon={<MdEmail />}
            />
          </HStack>
    </Box>
  );
};

export default About;
