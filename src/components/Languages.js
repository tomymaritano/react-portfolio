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
  // Define tus idiomas y niveles de competencia
  const languages = [
    { name: "Spanish", level: "Native", colorScheme: "blue" },
    { name: "Italian", level: "Fluent", colorScheme: "orange" },
    { name: "English", level: "Professional", colorScheme: "purple" },
    { name: "Portuguese", level: "Intermediate", colorScheme: "pink" },
  ];

  return (
    <Box pb={4}>
      <Heading fontFamily={'monospace'} size={"md"} as={"h3"} pb={4}>
        Languages
      </Heading>
      <Code colorScheme="purple" mb={4}>
        Languages = ['Spanish', 'English', 'Italian', 'Portuguese'];
      </Code>
      <Wrap spacing="1">
        {languages.map((language) => (
          <WrapItem key={language.name}>
            <Tag
              size="md"
              variant="subtle"
              color={"black"}
              border={"1px solid"}
              borderColor={"#e8e8e8"}
            >
              <TagLeftIcon boxSize="12px" as={FaLanguage} />
              <TagLabel>{`${language.name} (${language.level})`}</TagLabel>
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};
export default Languages;
