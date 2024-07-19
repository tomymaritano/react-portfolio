import { Heading, Text, Box,  Button, Link, IconButton, useColorMode, HStack } from "@chakra-ui/react";
import HoverImage from "./Image/ImageHover";
import { FaLinkedin } from "react-icons/fa";

const Perfil = () => {

  const { colorMode } = useColorMode();
  const borderColor = { light: 'black', dark: 'white' };
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
        <Text
          bg={'#FCD144'}
          width={'42%'}
          fontWeight={'bold'}
          mb={4}
        >
          Product designer at <a href="http://www.unicoin.com" target="">Unicoin</a>
        </Text>
        <Text fontSize="14px">
          Hello there, thank you for visiting my portfolio. Have a nice trip !
        </Text>
        <HStack pt={4}>
          <Button
            size="sm"
            colorScheme="gray"
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
