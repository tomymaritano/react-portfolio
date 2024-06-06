import React from 'react';
import {
  Box,
  Code,
  HStack,
  Heading,
  IconButton,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { TiWorld } from 'react-icons/ti';
import Languages from './Languages';

const About = () => {
  const { colorMode } = useColorMode();
  const borderColor = { light: 'black', dark: 'white' };

  return (
    <Box pb={4}>
      <Heading as="h3" size="lg" fontFamily="monospace" pb={4}>
        About Me
      </Heading>

      {/* <Code colorScheme="red" mb={4}>
        npm install
      </Code> */}

      <Text fontSize="sm">
        As a Full Stack Engineer, I've successfully launched products from
        concept to market, driven by my passion for cutting-edge technologies
        and digital forensics. My focus on innovation and problem-solving has
        fueled my expertise in developing robust solutions, demonstrating a
        commitment to excellence in the digital domain.
      </Text>


      <HStack spacing={1} pt={5} pb={10}>
        <Link href="https://github.com/tomymaritano" isExternal>
          <IconButton
            aria-label="GitHub"
            icon={<FaGithub />}
            size="sm"
            variant="solid"
            borderColor={borderColor[colorMode]}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/tomymaritano/" isExternal>
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            size="sm"
            variant="solid"
            borderColor={borderColor[colorMode]}
          />
        </Link>
        <Link href="mailto:tomymaritano@gmail.com" isExternal>
          <IconButton
            aria-label="Email"
            icon={<MdEmail />}
            size="sm"
            variant="solid"
            borderColor={borderColor[colorMode]}
          />
        </Link>
      </HStack>
      <Languages />
    </Box>
  );
};

export default About;
