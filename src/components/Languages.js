import React from "react";
import {
  Tag,
  Wrap,
  WrapItem,
  TagLabel,
  TagLeftIcon,
  Heading,
  Box,
  Code,
} from "@chakra-ui/react";
import { FaLanguage } from "react-icons/fa";

const Languages = () => {
  // Definición de idiomas y niveles de competencia
  const languages = [
    { name: "Spanish", level: "Native", colorScheme: "blue" },
    { name: "Italian", level: "Fluent", colorScheme: "orange" },
    { name: "English", level: "Professional", colorScheme: "purple" },
    { name: "Portuguese", level: "Intermediate", colorScheme: "pink" },
  ];

  return (
    <Box pb={4}>
      <Heading fontFamily="monospace" size="md" as="h3" pb={4}>
        Languages
      </Heading>
      <Code colorScheme="purple" mb={4}>
        const languages = ['Spanish', 'English', 'Italian', 'Portuguese'];
      </Code>
      {/* <Wrap spacing={2} justify="start">
        {languages.map((language) => (
          <WrapItem key={language.name}>
            <Tag
              size="lg" // Tamaño más grande para mejor legibilidad
              variant="solid" // Variante sólida para mayor visibilidad
              colorScheme={language.colorScheme} // Uso del esquema de color definido
              borderRadius="full" // Bordes redondeados para un estilo más moderno
              boxShadow="sm" // Sombra suave para un efecto sutil de profundidad
            >
              <TagLeftIcon boxSize="16px" as={FaLanguage} />
              <TagLabel>{`${language.name} (${language.level})`}</TagLabel>
            </Tag>
          </WrapItem>
        ))}
      </Wrap> */}
    </Box>
  );
};

export default Languages;
