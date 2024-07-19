import * as React from "react";
import { Box, ChakraProvider, Container,Text , theme } from "@chakra-ui/react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Perfil from "./components/Perfil";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import Scene from "./components/Bienvenida/ThreeJS";
import Timeline from "./components/Experience";
import Carousel from "./components/Carrousel";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box width="100%" height="100%">
        <Box bg="#FCD144" w="100%" p={1} color="black" textAlign="center">
        <Text>If there is no struggle, there is no progress </Text>
        </Box>
        <Navbar />
        <Container maxW="3xl">
             <Scene />
          <Perfil />
          <About />
       
          <Timeline />
          <Carousel />
          <Skills />
          <Projects />
          <Footer />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
