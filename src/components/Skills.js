import React from "react";
import { Box, Heading, Tag, Wrap, WrapItem, Image, Code } from "@chakra-ui/react";

const Skills = () => {
  // Lista de habilidades
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
      <Heading fontFamily="monospace" size="md" as="h3" pb={4}>
        GitHub
      </Heading>
      {/* <Code colorScheme="gray" mb={4}> // Especificar un colorScheme válido
        git commit -m "Updates"
      </Code> */}
      <Image
        w="100%"
        src="https://ghchart.rshah.org/tomymaritano"
        alt="GitHub Contribution Chart"
        pb={6}
      />
      <Wrap spacing={2} justify="start">
        {skills.map(skill => (
          <WrapItem key={skill}>
            <Tag
              size="sm" // Aumenta el tamaño para mejor legibilidad
              borderRadius="full" // Agrega bordes redondeados para un look moderno
              variant="solid" // Usa un fondo sólido para destacar las etiquetas
              colorScheme="green" // Usa un esquema de colores para mejor contraste y coherencia visual
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
