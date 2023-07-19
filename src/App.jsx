import * as React from "react";
import NavBar from "./assets/nav/nav";
import { ChakraProvider } from "@chakra-ui/react";
import { Box, Container, Stack, Heading, Text, Image, Divider, SimpleGrid } from "@chakra-ui/react";
import About from "./assets/aboutMe/aboutMe";
import Footer from "./assets/footer/footer";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <NavBar />
      <Container display={'flex'} alignItems={'center'} alignContent={'center'} justifyContent={'center'} justifyItems={'center'} maxW="40%" p='5%'>
        <SimpleGrid columns={2} spacing={1} alignItems={'center'} alignContent={'center'} justifyContent={'center'} justifyItems={'center'}>
          <Box p={1}>
            <Stack spacing={2}>
              <Heading as="h1">Hi there !</Heading>
              <Text color={'lightblue'} fontFamily={'heading'} fontWeight={'extrabold'} fontSize="5xl">I'M TOMY MARITANO</Text>
              <Text fontSize="2xl">Developer</Text>
            </Stack>
          </Box>
          <Box>
            <Image src="https://ouch-cdn2.icons8.com/e7_pkXHuAi-jlLxSXrRK3sOCzmWdv7qWQ1EKlhbhO-E/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTgw/L2Y5Y2U1ZjdlLWJk/NzctNDM5Ni04MTYx/LWIzNjFmYmFiZjA4/NS5zdmc.png" alt="logo"/>
          </Box>
        </SimpleGrid>
      </Container>
      <About />
      <Footer />
    </ChakraProvider>
  );
}
export default App;
