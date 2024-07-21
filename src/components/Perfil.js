import { Heading, Text, Box,} from "@chakra-ui/react";
import HoverImage from "./Image/ImageHover";
import Scene from "./Bienvenida/ThreeJS";
import Carousel from "./Carrousel"
const Perfil = () => {

  return (
    <Box
      display="flex"
      alignItems="start"
      py={8}
      justifyContent="space-between"
    >
      <Box w={{ base: '100%', md: '100%' }}>
        <Heading
          size={'xl'}
          fontFamily="monospace"
          mb={2}
        >
          A bit of myself👋
        </Heading>
        <Heading
        size={'md'}
        fontFamily={'monospace'}
          mb={6}
        >
          Product designer at <a href="http://www.unicoin.com">Unicoin</a>
        </Heading>
        <Text fontSize="14px">
I design and develop intuitive digital experiences for companies worldwide, combining user experience design with front-end development to deliver seamless and engaging products.
        </Text>
        <Scene />
        <Carousel />
        
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
