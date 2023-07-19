import React from "react";

import { Container, Box, Flex, Heading, Text, SimpleGrid, Link } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Container pt={10} centerContent justifyContent={'center'} alignItems={'center'} justifyItems={'center'}>
            <Box>
                {/* <SimpleGrid columns={3} spacing={10}>
                    <Box bg={'tomato'} height={'80px'}></Box>
                    <Box bg={'red'} height={'60px'}></Box>
                    <Box bg={'yellow'}></Box>
                </SimpleGrid> */}

                <Heading as={'h3'}>Find me on</Heading>
                <Link>Github</Link>
                <Link>LinkedIn</Link>
                <Link>Medium</Link>
            </Box>
        </Container>
    )
}

export default Footer;