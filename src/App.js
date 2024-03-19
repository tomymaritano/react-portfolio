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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box width={"100%"} height={"100%"} bg={"white"} color={"black"}>
        <Box bg="green.400" w="100%" p={1} color="white" textAlign={"center"}>
          This is the Box
        </Box>
        <Navbar />
        <Container maxW={"3xl"}>
          <Scene />
          <Perfil />
          <About />
          <Skills />
          <Languages />
          <Projects />
          <Footer />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
