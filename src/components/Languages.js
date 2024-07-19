import React from "react";
import {
  Tag,
  Wrap,
  WrapItem,
  TagLabel,
  TagLeftIcon,
  Heading,
  Box,
} from "@chakra-ui/react";
import { FaLanguage } from "react-icons/fa";

const Languages = () => {
  // Definición de idiomas y niveles de competencia
  const languages = [
    { name: "Spanish", level: "Native", colorScheme: "gray" },
    { name: "Italian", level: "Fluent", colorScheme: "gray" },
    { name: "English", level: "Fluent", colorScheme: "gray" },
    { name: "Portuguese", level: "Intermediate", colorScheme: "gray" },
  ];

  return (
    <Box pb={4} pt={4}>
      <Heading fontFamily="monospace" size="md" as="h3" pb={4}>
        Languages
      </Heading>
  <Wrap spacing={2} justify="start">
        {languages.map((language) => (
          <WrapItem key={language.name}>
            <Tag
              size="md" // Tamaño más grande para mejor legibilidad
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
      </Wrap> 
    </Box>
  );
};

export default Languages;
