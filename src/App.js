import * as React from "react";
import { Box, ChakraProvider, Container , theme } from "@chakra-ui/react";
import About from "./components/About";
import Perfil from "./components/Perfil";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProjectsAndSkills from "./components/ProjectsAndSkills";
import UX from "./components/UX";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box width="100%" height="100%">

        <Navbar />
        <Container maxW="6xl">
             
          <Perfil />
          <About />
          <UX />
          <ProjectsAndSkills />
          <Footer />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
