import { Heading, Text, Box, Button, Code } from "@chakra-ui/react";
import HoverImage from "./Image/ImageHover";



const Perfil = () => {
  return (

      <Box display={"flex"} alignItems={"center"} pb={8} pt={8} justifyContent={'space-between'}>
        <Box w={{base: '100%', md:'70%'}}>
          <Heading fontSize={'26px'} as={'h1'} fontFamily={'monospace'} pb={4}>👋 Hey, Im Tomy.</Heading>
          <Code colorScheme="green" mb={4}>console.log('Welcome to my Portfolio!')</Code>
          <Text fontSize={'14px'}>
            Full Stack Engineer focused on building scalable web and mobile
            applications with extra attention to detail.
          </Text>
        <Button size={'sm'} mt={6} colorScheme="green">Ver mas</Button>

        </Box>
        <Box
        display={{ base: 'none', md: 'block ' }}>
          <HoverImage
            src={
              "https://media.licdn.com/dms/image/D4D03AQH0MyoFc_QYOw/profile-displayphoto-shrink_200_200/0/1706897249816?e=1716422400&v=beta&t=E-kb1G81T3caQUOf1fAWqMJ_yr78wV10tqYBZRFXnM0"
            }
          ></HoverImage>
        </Box>
      </Box>
  );
};
export default Perfil;
