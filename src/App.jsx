import * as React from "react";
import NavBar from "./assets/nav/nav";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "./extendTheme";


import {
  Box,
  Container,
  Stack,
  Heading,
  Link,
  Text,
  Image,
  List,
  ListItem,
  Button,
} from "@chakra-ui/react";

import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaTerminal,
  FaMailBulk,
  FaArrowAltCircleRight,
  FaArrowRight,
} from "react-icons/fa";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Container p={4}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
          p={"3%"}
        >
          <Stack spacing={1} p={3}>
            <Heading as={"h1"} size={"2xl"}>
              Tomy Maritano
            </Heading>
            <Text fontSize="xl" fontFamily={""}>
              Developer
            </Text>
          </Stack>
          <Image
            src="https://media.licdn.com/dms/image/D4D03AQE5Is75WdAkjQ/profile-displayphoto-shrink_800_800/0/1681757745412?e=1695254400&v=beta&t=U7TgFx6hncRJ1-aJLzbSe3WJr1MxQx58jJCuK8iYeKk"
            alt="img"
            objectFit={"cover"}
            borderRadius={"full"}
            boxSize={"20%"}
          />
        </Box>
        <Box p={"3%"}>
          <Heading
            as="h3"
            size={"md"}
            mb={"3%"}
            textDecoration={"underline"}
            textDecorationColor={"darkgrey"}
          >
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
          <Box m={3}>
            <Stack spacing={4} direction={"row"} align={"center"}>
              <Button
                rightIcon={<FaArrowRight />}
                bgColor="teal.200"
                size="md"
                variant="solid"
              >
                My portfolio
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box p={"3%"}>
          <Heading
            as="h3"
            size={"md"}
            mb={"3%"}
            textDecoration={"underline"}
            textDecorationColor={"darkgrey"}
          >
            Bio
          </Heading>
          <Text>
            <Text as={"b"}>1994</Text> - Was born in Rosario, Santa Fe,
            Argentina.
          </Text>
          <Text>2013 - Finished High-school degree</Text>
          <Text>
            2016 - Started to studying Web Design and App development at{" "}
            <Link href="https://davinci.edu.ar/" color={'plum'}>Escuela DaVinci</Link>
          </Text>
          <Text>
            2020 - Front end development at{" "}
            <Link href="https://coderhouse.es" color={"plum"}>
              Coderhouse
            </Link>{" "}
          </Text>
          <Text>
            2021 - JavaScript at{" "}
            <Link href="https://coderhouse.es" color={"plum"}>
              Coderhouse
            </Link>
          </Text>
          <Text>
            2022 - React JS at{" "}
            <Link href="https://coderhouse.es" color={"plum"}>
              Coderhouse
            </Link>
          </Text>
          <Text>2023 to present - Startup creator.</Text>
        </Box>

        <Box p={5}>
          <Heading
            as={"h3"}
            size={"md"}
            mb={"3%"}
            textDecoration={"underline"}
            textDecorationColor={"darkgrey"}
          >
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/craftzdog" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  color={"teal.300"}
                  leftIcon={<FaTerminal />}
                >
                  @tomymaritano
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/tomymaritano" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  color={"teal.300"}
                  leftIcon={<FaGithub />}
                >
                  @tomymaritano
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/tomymaritano" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  color={"teal.300"}
                  leftIcon={<FaTwitter />}
                >
                  @tomymaritano
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/tomymaritano" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  color={"teal.300"}
                  leftIcon={<FaLinkedin />}
                >
                  @tomymaritano
                </Button>
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box p={"3%"}>
          <Heading
            as="h3"
            size={"md"}
            mb={"3%"}
            textDecoration={"underline"}
            textDecorationColor={"darkgrey"}
          >
            Newsletter
          </Heading>
          <Text>
            Join me on a behind-the-scenes coding journey. Weekly updates on
            projects, tutorials, and videos
          </Text>
          <Box m={3}>
            <Stack spacing={4} direction={"row"} align={"center"}>
              <Button
                leftIcon={<FaMailBulk />}
                bgColor="teal.200"
                size="md"
                variant="solid"
              >
                Sign up to my newsletter here
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box color={"gray"} p={3} display={"flex"} justifyContent={"center"}>
          © 2023 Tomy Maritano. All Rights Reserved.
        </Box>
      </Container>
    </ChakraProvider>
  );
}
export default App;
