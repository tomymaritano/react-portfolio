import * as React from "react";
import NavBar from "./assets/nav/nav";
import Footer from "./assets/footer/footer";
import { ChakraProvider } from "@chakra-ui/react";

import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Image,
  Link,
  Button,
  ListItem,
  List,
} from "@chakra-ui/react";

import { FaGithub, FaTwitter, FaLinkedin, FaTerminal } from "react-icons/fa";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <NavBar />
      <Container
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        alignContent={"center"}
        justifyContent={"space-evenly"}
        justifyItems={"center"}
        minW="60%"
        p="3%"
        centerContent
      >
        <Box maxW={"sm"} p={1}>
          <Stack spacing={2}>
            <Heading as="h1">Hi there !</Heading>
            <Text
              color={"teal"}
              fontFamily={"heading"}
              fontWeight={"extrabold"}
              fontSize="2xl"
            >
              I'M TOMY MARITANO
            </Text>
            <Text fontSize="1xl">Developer</Text>
          </Stack>
        </Box>
        <Box maxW={"sm"}>
          <Image
            src="https://media.licdn.com/dms/image/D4D03AQE5Is75WdAkjQ/profile-displayphoto-shrink_800_800/0/1681757745412?e=1695254400&v=beta&t=U7TgFx6hncRJ1-aJLzbSe3WJr1MxQx58jJCuK8iYeKk"
            alt="img"
            objectFit={"cover"}
            borderRadius={"full"}
            boxSize={"120px"}
          />
        </Box>
      </Container>
      <Container
        border={1}
        minW="60%"
        p={"3%"}
        centerContent
      >
        <Box maxW={"md"} p={'3%'}>
          <Heading as="h3" mb={"3%"}>
            Work
          </Heading>
          <Text>
            I'm Tomy Maritano, and I have a strong passion for development and
            management. As a Front-end Developer, I enjoy crafting clean and
            efficient code to create innovative solutions. In addition to
            coding, I thrive on guiding and empowering teams to achieve their
            best. Bridging the technical and managerial aspects, I aim to
            deliver impactful and meaningful projects that drive positive
            change.
          </Text>
          <Box maxW={'sm'} p={'3%'}>
            <Stack spacing={4} direction={"row"} align={"center"}>
              <Button colorScheme="teal" size="sm" variant="solid">
                My portfolio
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
      <Container minW={"60%"} p={"3%"} bgColor={"blue.200"} centerContent>
        <Box maxW={"sm"} p={5} bgColor={"blue.400"}>
          <Heading as={"h3"} mb={"3%"}>
            Find me on
          </Heading>
          <Text>Feel free to contact me</Text>
          <Text>Im gonna reach you as soon as possible</Text>
          <Box maxW={"sm"} centerContent bgColor={"blackAlpha.100"} p={4}>
            <List
              display={"flex"}
              justifyItems={"center"}
              alignContent={"center"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <ListItem p={2}>
                <FaGithub size={"32"} />
              </ListItem>
              <ListItem p={2}>
                <FaTwitter size={"32"} />
              </ListItem>
              <ListItem p={2}>
                <FaLinkedin size={"32"} />
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem p={2}>
                <FaTerminal size={"32"} />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Container>
      <Footer />
    </ChakraProvider>
  );
}
export default App;
