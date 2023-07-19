import React from "react";
import {
  Container,
  Grid,
  GridItem,
  Text,
  Heading,
  Image,
  flexbox,
  Center,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="40%" pl={'5%'} pr={'5%'}>
      <Grid templateColumns="repeat(2, 1fr)" gap={1}>
        <GridItem placeItems={"center"} p={5}>
          <Heading as="h3" pb={"20px"}>
            About me
          </Heading>
          <Text>
            I'm Tomy Maritano, and I have a strong passion for development and
            management. As a software developer, I enjoy crafting clean and
            efficient code to create innovative solutions. In addition to
            coding, I thrive on guiding and empowering teams to achieve their
            best. Bridging the technical and managerial aspects, I aim to
            deliver impactful and meaningful projects that drive positive change
          </Text>
        </GridItem>
        <GridItem p={5}>
          <Center>
            <Image
              src={
                "https://media.licdn.com/dms/image/D4D03AQE5Is75WdAkjQ/profile-displayphoto-shrink_800_800/0/1681757745412?e=1695254400&v=beta&t=U7TgFx6hncRJ1-aJLzbSe3WJr1MxQx58jJCuK8iYeKk"
              }
              alt="img"
              borderRadius={"100%"}
              w={"30%"}
            />
          </Center>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default About;
