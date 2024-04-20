import React, { useState } from "react";
import {
  Box,
  Text,
  Grid,
  Container,
  Center,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { enums } from "./enums";
import { colors } from "../../utils/colors";
import Card from "./card";

const Projects = () => {
  const [show, setShow] = useState(false);
  const displayCount = show ? enums?.length : 6;
  return (
    <Box id="projects">
      <Container maxW="container.lg">
        <Center>
          <Box bg={colors.light} p="4px" borderRadius={"6px"}>
            <Text fontSize="18px" fontWeight="500" textAlign={"center"}>
              Works
            </Text>
          </Box>
        </Center>

        <Text
          textAlign={"center"}
          color={colors.gold}
          fontSize={{ base: "18px", md: "30px", lg: "30px" }}
          mt="10px"
        >
          Things I've built so far
        </Text>

        <Grid
          templateColumns={{
            base: "auto",
            md: "repeat(2, 1fr)",
            lg: "repeat(3,1fr)",
          }}
          gap="24px"
          mt="50px"
        >
          {enums?.slice(0, displayCount)?.map((data, idx) => (
            <GridItem key={data.id + idx}>
              <Card content={data} />
            </GridItem>
          ))}
        </Grid>

        <Center mt="40px">
          <Button
            onClick={() => setShow(!show)}
            bg={colors.gold}
            _hover={{
              opacity: 0.8,
            }}
          >
            {show ? "Show Less" : "Show More"}
          </Button>
        </Center>
      </Container>
    </Box>
  );
};

export default Projects;
