import * as React from "react";
import NavBar from "./assets/nav/nav";
import { ChakraProvider } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Box, Container, Flex, Stack, Heading, Text, Image } from "@chakra-ui/react";


function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <NavBar />
      <Container maxW="40%" pt='5%'>
        <SimpleGrid columns={2} spacing={1} alignItems={'center'} alignContent={'center'} justifyContent={'center'} justifyItems={'center'}>
          <Box>
            <Stack spacing={6}>
              <Heading as="h1">Hi there !</Heading>
              <Text color={'lightblue'} fontFamily={'heading'} fontWeight={'extrabold'} fontSize="5xl">I'M TOMY MARITANO</Text>
              <Text fontSize="2xl">Developer</Text>
            </Stack>
          </Box>
          <Box>
            <Image src={"/assets/img/rkt.png"} />
          </Box>
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  );
}
export default App;
