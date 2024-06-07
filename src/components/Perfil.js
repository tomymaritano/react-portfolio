import { Heading, Text, Box, Code } from "@chakra-ui/react";
import HoverImage from "./Image/ImageHover";

const Perfil = () => {
  return (
    <Box 
      display="flex" 
      alignItems="center" 
      py={8} 
      justifyContent="space-between"
    >
      <Box w={{ base: '100%', md: '70%' }}>
        <Heading 
          fontSize="26px" 
          as="h1" 
          fontFamily="monospace" 
          pb={4}
        >
           Hey, I'm Tomy👋
        </Heading>
        <Code 
          colorScheme="green" 
          mb={4}
        >
          Founder at DolarGaucho
        </Code>
        <Text fontSize="14px">
          UX/UI Developer focused on building scalable web and mobile
          applications with extra attention to details.
        </Text>
        {/* <Button 
          size="sm" 
          mt={6} 
          colorScheme="green"
        >
          Ver más
        </Button> */}
      </Box>
      <Box display={{ base: 'none', md: 'block' }}>
        <HoverImage
          src="https://media.licdn.com/dms/image/D4D03AQH0MyoFc_QYOw/profile-displayphoto-shrink_800_800/0/1706897249816?e=1723075200&v=beta&t=kwN_9VU7Y-eLD4DMlGrqQTSN-3HoDYGUT9QqS8uQiY8"
          alt="Profile Picture of Tomy"
        />
      </Box>
    </Box>
  );
};

export default Perfil;
