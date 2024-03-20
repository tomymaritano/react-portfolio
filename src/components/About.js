import {
  Box,
  Code,
  HStack,
  Heading,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiWorld } from "react-icons/ti";

const About = () => {
  return (
    <Box pb={4}>
      <Heading fontFamily={"monospace"} fontSize={"20px"} pb={4}>
        About me
      </Heading>
      <Code colorScheme="red" mb={4}>
        npm install
      </Code>
      <Text fontSize={"14px"}>
        {" "}
        As a Full Stack Engineer, I've successfully launched products from
        concept to market, driven by my passion for cutting-edge technologies
        and digital forensics. My focus on innovation and problem-solving has
        fueled my expertise in developing robust solutions, demonstrating a
        commitment to excellence in the digital domain
      </Text>
      <HStack alignItems={"center"} pt={2} pb={2}>
        <TiWorld boxSize={4} />
        <Text fontSize={"14px"}>Copenhagen, Denmark.</Text>
      </HStack>
      <HStack>
        <Link href="https://github.com/tomymaritano" isExternal>
          {" "}
          <IconButton
            size={"sm"}
            border={"1px solid"}
            borderColor={"#e8e8e8"}
            color={"gray"}
            aria-label="Search database"
            icon={<FaGithub />}
          />
        </Link>

        <Link href="https://www.linkedin.com/in/tomymaritano/" isExternal>
          <IconButton
            size={"sm"}
            border={"1px solid"}
            borderColor={"#e8e8e8"}
            color={"gray"}
            aria-label="Search database"
            icon={<FaLinkedin />}
          />
        </Link>

        <Link href="mailto:tomymaritano@gmail.com" isExternal>
          <IconButton
            size={"sm"}
            border={"1px solid"}
            borderColor={"#e8e8e8"}
            color={"gray"}
            aria-label="Search database"
            icon={<MdEmail />}
          />
        </Link>
      </HStack>
    </Box>
  );
};

export default About;
