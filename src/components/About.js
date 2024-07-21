import React from 'react';
import {
  Box,
  HStack,
  Heading,
  Text,
  Button,
  Link,
  IconButton,
  useColorMode
} from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';

const About = () => {

  const { colorMode } = useColorMode();
  const borderColor = { light: 'black', dark: 'white' };
  return (
    <Box pb={10}>
      <Heading as="h2" size="lg" fontFamily="monospace" pb={4}>
        About Me
      </Heading>

      {/* <Code colorScheme="red" mb={4}>
        npm install
      </Code> */}

      <Text fontSize="14px">
        As a passionate UX/UI Developer, I'm dedicated to crafting web and mobile applications that not only meet scalability demands but also excel in style and quality. My approach is deeply rooted in a love for technology and a commitment to designing aesthetically pleasing, high-quality products. </Text>
      <HStack pt={4}>
        <Button
          size="sm"
          colorScheme="yellow"
        >
          Download CV
        </Button>

        <Link href="https://www.linkedin.com/in/tomymaritano/" isExternal>
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            size="sm"
            variant="solid"
            borderColor={borderColor[colorMode]}
          />
        </Link>
      </HStack>

    </Box>
  );
};

export default About;
