import React from 'react';
import {
  Box,
  HStack,
  Heading,
  Text,
} from '@chakra-ui/react';
import Languages from './Languages';

const About = () => {

  return (
    <Box pb={4}>
      <Heading as="h3" size="lg" fontFamily="monospace" pb={4}>
        About Me
      </Heading>

      {/* <Code colorScheme="red" mb={4}>
        npm install
      </Code> */}

<Text fontSize="14px">
  As a passionate UX/UI Developer, I'm dedicated to crafting web and mobile applications that not only meet scalability demands but also excel in style and quality. My approach is deeply rooted in a love for technology and a commitment to designing aesthetically pleasing, high-quality products. </Text>


<Languages />
      <HStack spacing={1} pt={5} pb={10}>

      </HStack>
      
    </Box>
  );
};

export default About;
