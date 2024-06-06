import * as React from "react";
import { Box, ChakraProvider, Container, theme } from "@chakra-ui/react";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import About from "./components/About";
import Perfil from "./components/Perfil";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import Scene from "./components/Bienvenida/ThreeJS";
import ProjectsAndSkills from "./components/ProjectsAndSkills";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box width="100%" height="100%">
        <Box bg="green.400" w="100%" p={1} color="white" textAlign="center">
          {/* Considera añadir contenido aquí si es necesario */}
          dolargaucho
        </Box>
        <Navbar />
        <Container maxW="3xl">
          <Scene />
          <Perfil />
          <About />
          <Skills />
          <Projects />
          <Footer />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
