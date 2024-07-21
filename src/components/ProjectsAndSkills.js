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
  Image,
} from "@chakra-ui/react";

const ProjectsAndSkills = () => {
  const [projects, setProjects] = useState([]);
  const [selectedTech, setSelectedTech] = useState("All");
  const [showForks, setShowForks] = useState(false);
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

  useEffect(() => {
    fetch("https://api.github.com/users/tomymaritano/repos")
      .then(response => response.json())
      .then(data => {
        const transformedProjects = data.map(repo => ({
          name: repo.name,
          description: repo.description || "No description",
          technologies: repo.language ? [repo.language] : ["Multiple languages"],
          html_url: repo.html_url,
          fork: repo.fork
        }));
        setProjects(transformedProjects);
      })
      .catch(error => console.error("Error fetching projects:", error));
  }, []);

  const handleTechChange = (event) => setSelectedTech(event.target.value);
  const handleShowForksChange = () => setShowForks(!showForks);

  const allTechnologies = ["All", ...new Set(projects.flatMap(p => p.technologies))];
  const filteredProjects = projects.filter(project =>
    (selectedTech === "All" || project.technologies.includes(selectedTech)) &&
    (!showForks || project.fork)
  );

  return (
    <Box>
      <Heading fontFamily="monospace" size="lg" as="h2" mb={4}>
        Projects & Skills
      </Heading>

      <HStack justifyContent="space-between" alignItems="center" mb={4}>
        <Text>Show Forks</Text>
        <Switch
          colorScheme="teal"
          id="fork-switch"
          isChecked={showForks}
          onChange={handleShowForksChange}
        />
        <Select
          onChange={handleTechChange}
          size="sm"
          colorScheme="teal"
          borderRadius="md"
          w="30%"
        >
          {allTechnologies.map(tech => (
            <option key={tech} value={tech}>{tech}</option>
          ))}
        </Select>
      </HStack>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} mb={4}>
        {filteredProjects.map((project, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="md"
            p={4}
            _hover={{ bg: "gray.50", transform: "translateY(-2px)", boxShadow: "lg" }}
          >
            <Heading size="sm" pb={2}>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </Heading>
            <Text fontSize="sm">{project.description}</Text>
            <Wrap mt={2}>
              {project.technologies.map((tech, techIndex) => (
                <WrapItem key={techIndex}>
                  <Tag size="sm" variant="solid" colorScheme="green">
                    {tech}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        ))}
      </SimpleGrid>

      <Image
        w="100%"
        src="https://ghchart.rshah.org/tomymaritano"
        alt="GitHub Contribution Chart"
        mb={4}
      />
      
      <Wrap spacing={2} justify="start">
        {skills.map(skill => (
          <WrapItem key={skill}>
            <Tag
              size="md"
              borderRadius="full"
              variant="solid"
              colorScheme="gray"
            >
              {skill}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default ProjectsAndSkills;
