import React from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  useMediaQuery,
  Icon,
} from "@chakra-ui/react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiRedux,
  SiChakraui,
  SiReact,
  SiJavascript,
  SiFirebase,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { Slide } from "react-awesome-reveal";

const About = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Box mt="200px">
      <Text fontSize="30px" fontWeight="800" mb="50px">
        Skills
      </Text>

      <Grid
        templateColumns={isLargerThan800 ? "repeat(3, 1fr)" : "auto"}
        gap={10}
      >
        <GridItem display="flex" gap={5} alignItems="center">
          <Icon as={AiFillHtml5} fontSize="60px" />
          <Text fontSize="20px">HTML 5</Text>
        </GridItem>

        <GridItem display="flex" gap={5} alignItems="center">
          <Icon as={SiCss3} fontSize="50px" />
          <Text fontSize="20px">CSS 3</Text>
        </GridItem>

        <GridItem display="flex" gap={5} alignItems="center">
          <Icon as={SiChakraui} fontSize="50px" />
          <Text fontSize="20px">Chakra UI</Text>
        </GridItem>

        <GridItem display="flex" gap={5} alignItems="center">
          <Icon as={SiRedux} fontSize="50px" />
          <Text fontSize="20px">Redux</Text>
        </GridItem>

        <GridItem display="flex" gap={5} alignItems="center">
          <Icon as={SiReact} fontSize="50px" />
          <Text fontSize="20px">React</Text>
        </GridItem>

        <GridItem display="flex" gap={5} alignItems="center">
          <Icon as={SiJavascript} fontSize="50px" />
          <Text fontSize="20px">Javascript</Text>
        </GridItem>
      </Grid>

      <Box borderTop="1px solid #D9D8DA" mt="30px" pt="30px">
        <Grid
          templateColumns={isLargerThan800 ? "repeat(3, 1fr)" : "auto"}
          gap={10}
        >
          <GridItem display="flex" gap={5} alignItems="center">
            <Icon as={BsGit} fontSize="60px" />
            <Text fontSize="20px">Git</Text>
          </GridItem>

          <GridItem display="flex" gap={5} alignItems="center">
            <Icon as={SiFirebase} fontSize="50px" />
            <Text fontSize="20px">Firebase</Text>
          </GridItem>
        </Grid>
      </Box>

      {/* experience */}

      <Text fontSize="30px" fontWeight="800" mb="50px" mt="200px">
        Experience
      </Text>

      <Box borderBottom="1px solid #D9D8DA" pb="30px" mb="30px">
        <Slide direction="up" cascade triggerOnce>
          <Text fontSize="20px" fontWeight="500">
            Frontend Developer - Akaani(Jun 2022 - Present)
          </Text>
          <Text mt="13px" lineHeight={"25px"}>
            - Implemented elegant and responsive web pages using React. <br />-
            Built re-usable and new components for the internal design system.{" "}
            <br />- Contributed to the development of a style guide and best
            practices. <br />
            - Developed UI components for the internal design system. <br />
            - Contributed to the development of web platform using
            Javascript(React.js). <br />- Collaborated with UI designers and
            backend developers to ensure seamless integration of front-end and
            back-end functionality.
          </Text>
        </Slide>
      </Box>

      <Slide direction="up" cascade triggerOnce>
        <Text fontSize="20px" fontWeight="500">
          Frontend Developer - Euidem Technologies(Mar 2021 - Sep 2021)
        </Text>
        <Text mt="13px" lineHeight={"25px"}>
          - Implemented elegant and responsive web pages using React. <br />-
          Contributed to the development of a style guide and best practices.{" "}
          <br />
          - Developed UI components for the internal design system. <br />
        </Text>
      </Slide>
    </Box>
  );
};

export default About;
