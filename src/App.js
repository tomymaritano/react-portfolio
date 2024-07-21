import * as React from "react";
import { Box, ChakraProvider, Container,Text , theme } from "@chakra-ui/react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Perfil from "./components/Perfil";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import Scene from "./components/Bienvenida/ThreeJS";
import Carousel from "./components/Carrousel";
import ProjectsAndSkills from "./components/ProjectsAndSkills";
import MarqueeText from "./components/MarqueeText";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box width="100%" height="100%">

        <Navbar />
        <Container maxW="3xl">
             <Scene />
          <Perfil />
          <Carousel />
          <About />
          <ProjectsAndSkills />
          <Footer />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
