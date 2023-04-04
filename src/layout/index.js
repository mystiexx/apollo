import React from "react";
import { Box, Text, Container } from "@chakra-ui/react";
import Navbar from "../components/navbar";

const Layout = ({ children }) => {
  return (
    <Box h="100vh" width="100vw">
      <Box display="flex" flexDir="column">
        <Navbar />
        <Box>{children}</Box>

        <Container maxW="container.lg">
          <Box borderTop="1px solid #D9D8DA" pb="24px" pt="24px">
            <Text textAlign="center">© 2023 ALONE</Text>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
