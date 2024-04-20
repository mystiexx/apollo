import React from "react";
import { Box, Text, Icon, Container, Center } from "@chakra-ui/react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiRedux,
  SiChakraui,
  SiReact,
  SiJavascript,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { colors } from "../../utils/colors";

const About = () => {
  return (
    <Box h='100dvh' display={'grid'} placeItems={'center'}>
      <Container maxW={"container.lg"}>
        <Center>
          <Box bg={colors.light} p="4px" borderRadius={"6px"}>
            <Text fontSize="18px" fontWeight="500" textAlign={"center"}>
              Skills
            </Text>
          </Box>
        </Center>

        <Text
          textAlign={"center"}
          color={colors.gold}
          fontSize={{ base: "18px", md: "30px", lg: "30px" }}
          mt="10px"
        >
          The skills, tools and technologies
          <br /> I am really good at:
        </Text>
        <Center>
          <Box
            display={"flex"}
            flexWrap={"wrap"}
            gap="50px"
            mt="40px"
            alignItems={"center"}
            w={{ base: "auto", md: "auto", lg: "700px" }}
          >
            <Box>
              <Center>
                <Icon as={AiFillHtml5} fontSize="55px" />
              </Center>
              <Text fontSize="16px" textAlign={"center"}>
                HTML 5
              </Text>
            </Box>

            <Box>
              <Center>
                <Icon as={SiCss3} fontSize="50px" />
              </Center>

              <Text fontSize="16px" textAlign={"center"}>
                CSS 3
              </Text>
            </Box>

            <Box>
              <Center>
                <Icon as={SiChakraui} fontSize="50px" />
              </Center>
              <Text fontSize="16px" textAlign={"center"}>
                Chakra UI
              </Text>
            </Box>

            <Box>
              <Center>
                <Icon as={SiRedux} fontSize="50px" />
              </Center>
              <Text fontSize="16px" textAlign={"center"}>
                Redux
              </Text>
            </Box>
            <Box>
              <Center>
                <Icon as={SiReact} fontSize="50px" />
              </Center>
              <Text fontSize="16px" textAlign={"center"}>
                ReactJS / React-Native
              </Text>
            </Box>

            <Box>
              <Center>
                <Icon as={SiJavascript} fontSize="50px" />
              </Center>
              <Text fontSize="16px" textAlign={"center"}>
                Javascript
              </Text>
            </Box>
            <Box>
              <Center>
                <Icon as={SiTypescript} fontSize="50px" />
              </Center>
              <Text fontSize="16px" textAlign={"center"}>
                Typescript
              </Text>
            </Box>

            <Box>
              <Center>
                <Icon as={BsGit} fontSize="50px" />
              </Center>
              <Text fontSize="16px" textAlign={"center"}>
                Git
              </Text>
            </Box>

            <Box>
              <Center>
                <Icon as={SiFirebase} fontSize="50px" />
              </Center>
              <Text fontSize="16px" textAlign={"center"}>
                Firebase
              </Text>
            </Box>
          </Box>
        </Center>
      </Container>
    </Box>
  );
};

export default About;
