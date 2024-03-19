import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Tag,
  Wrap,
  WrapItem,
  Text,
  SimpleGrid,
  Select,
  HStack,
  Switch,
  // Stack,
  // FormLabel,
  // Switch,
} from "@chakra-ui/react";
// import ProjectBorderHover from "./ProjectBorderHover.css";


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedTech, setSelectedTech] = useState("All");

  useEffect(() => {
    fetch("https://api.github.com/users/tomymaritano/repos")
      .then((response) => response.json())
      .then((data) => {
        const transformedProjects = data.map((repo) => ({
          name: repo.name,
          description: repo.description || "No description",
          technologies: repo.language
            ? [repo.language]
            : ["Multiple languages"],
          html_url: repo.html_url,
          fork: repo.fork, // Asegúrate de incluir esta línea
        }));

        setProjects(transformedProjects);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);
  const [showForks, setShowForks] = useState(false);

  const handleShowForksChange = () => {
    setShowForks(!showForks);
  };

  // Esto se calcula cada vez que 'projects' o 'selectedTech' cambian
  const allTechnologies = [
    "All",
    ...new Set(projects.flatMap((p) => p.technologies)),
  ];
  // Filtrar proyectos basados en la tecnología seleccionada y en si son forks
  const filteredProjects = projects.filter(
    (project) =>
      (selectedTech === "All" || project.technologies.includes(selectedTech)) &&
      (!showForks || project.fork) // Mostrar todos los proyectos si showForks es false, o solo los forks si es true
  );

  const handleTechChange = (event) => {
    setSelectedTech(event.target.value);
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Heading fontFamily={"monospace"} size={"md"} as={"h3"}>
          Projects
        </Heading>
      </HStack>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box display={'flex'} alignItems={'center'} gap={1}>
        <Text htmlFor="fork-switch">Forks</Text>
        <Switch
          color="gray"
          id="fork-switch"
          onChange={handleShowForksChange}
          isChecked={showForks}
        />
        </Box>

        <Select
          onChange={handleTechChange}
          size={"sm"}
          marginTop={2}
          color={"gray"}
          border={"1px solid"}
          borderColor={"#e8e8e8"}
          borderRadius={"6px"}
          width={"30%"}
          _hover={{ borderColor: "gray.300" }}
        >
          {allTechnologies.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </Select>
      </Box>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} marginTop={4}>
        {filteredProjects.map((project, index) => (
          <Box
          id="projects-list"
            key={index}
            border="1px solid rgb(232, 232, 232)"
            borderRadius="md"
            p={4}
            // _hover={{
            //   bg: "whiteAlpha.400",
            //   borderColor: "gray",
            //   transition: "transform 0.5s", // Hace la transición más suave}}
            // }}
          >
            <Heading size="sm" paddingBottom={2}>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </a>
            </Heading>
            <Text fontSize="sm">{project.description}</Text>
            <Wrap marginTop={2}>
              {project.technologies.map((tech, techIndex) => (
                <WrapItem key={techIndex}>
                  <Tag
                    size="sm"
                    variant="subtle"
                    fontSize={"12px"}
                    color={"black"}
                    border={"1px solid"}
                    borderColor={"#e8e8e8"}
                  >
                    {tech}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
