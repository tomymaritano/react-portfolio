import React from "react";
import { Box, Heading, Tag, Wrap, WrapItem, Image, Code } from "@chakra-ui/react";

const Skills = () => {
  // Define tus habilidades
  const skills = [
    "MongoDB",
    "Firebase",
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "ElectronJS",
    "Vue.js",
    "HTML",
    "CSS",
    "Docker",
    "Git",
  ];

  return (
    <Box pb={4}>
      <Heading fontFamily={"monospace"} size={"md"} as={"h3"} pb={4}>
        Skills
      </Heading>
      <Code colorScheme="" mb={4}>
        git commit -m "Updates"
      </Code>
      <Image
      w={'100%'}
        src="https://ghchart.rshah.org/tomymaritano"
        alt="Gráfico de Contribución de GitHub"
        pb={6}
      />
      <Wrap spacing="1">
        {skills.map((skill) => (
          <WrapItem key={skill}>
            <Tag
              size="md"
              variant="subtle"
              color={"black"}
              border={"1px solid"}
              borderColor={"#e8e8e8"}
            >
              {skill}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default Skills;
