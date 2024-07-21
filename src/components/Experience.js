import React from 'react';
import { Box,  Heading, Text, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const TimelineItem = ({ year, title, children }) => {
  const iconColor = useColorModeValue('gray.600', 'gray.400');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={itemVariants}
      transition={{ duration: 0.8 }}
      mb={5}
      pl={8}
      position="relative"
      _before={{
        content: `""`, width: "2px", bgColor: borderColor, left: "10px", top: "0", bottom: "0",
        position: "absolute",
      }}
    >
      <Box>
        <Text fontWeight="bold" fontSize="lg">{year}</Text>
        <Heading size="md" mt={2} mb={2}>{title}</Heading>
        <Text fontSize="md">{children}</Text>
      </Box>
    </MotionBox>
  );
};

const Timeline = () => {
  // const backgroundColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <MotionBox padding={0}  color={textColor}>
      <Heading as="h1" fontSize="2xl" mb={5}>Professional Timeline</Heading>
      <TimelineItem year="May 2024 - Present" title="UX Developer at Unicoin">
        At Unicoin, I collaborate closely with UX/UI designers to create innovative solutions...
      </TimelineItem>
      <TimelineItem year="Jan 2024 - Present" title="UX Designer at Unicoin">
        As a UX/UI Designer at Unicoin, I am at the forefront of designing innovative digital experiences...
      </TimelineItem>
      <TimelineItem year="Jan 2024 - Present" title="Founder of DolarGaucho">
        Dolar Gaucho emerged from a clear need: to democratize economic knowledge in Argentina...
      </TimelineItem>
      <TimelineItem year="Feb 2024 - May 2024" title="Full-stack Developer at Grandvalira SAETDE">
        Expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js)...
      </TimelineItem>
      <TimelineItem year="Apr 2017 - Jun 2018" title="Frontend Developer at Su Web Express">
        Use a variety of programming languages to create user-friendly web pages...
      </TimelineItem>
    </MotionBox>
  );
};

export default Timeline;