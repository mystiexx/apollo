import React, { useEffect } from "react";
import {
  Box,
  Text,
  Icon,
  Center,
  Code,
  Container,
  Button,
} from "@chakra-ui/react";
import Layout from "../../layout";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import About from "../about";
import { colors } from "../../utils/colors";
import Aos from "aos";
import "aos/dist/aos.css";
import Projects from "../projects";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Layout>
      <Box h="100dvh" display={"grid"} placeItems={"center"}>
        <Box>
          <Text
            textAlign={"center"}
            fontSize={{ base: "24px", md: "24px", lg: "30px" }}
          >
            Hi, I'm
          </Text>
          <Text
            textAlign={"center"}
            fontSize={{ base: "40px", md: "40px", lg: "70px" }}
            color={colors.gold}
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Roland Enola
          </Text>
          <Text textAlign={"center"}>
            A passionate{" "}
            <span
              style={{ color: colors.gold }}
            >{`<Frontend Developer/>`}</span>{" "}
          </Text>
          <Center>
            <Box display={"flex"} gap="30px" mt="20px">
              <a
                href="https://www.linkedin.com/in/enola-roland-18704b135/"
                target={"_blank"}
                rel="noreferrer noopener"
              >
                <Icon
                  as={AiFillLinkedin}
                  fontSize="25px"
                  cursor="pointer"
                  color={colors.gold}
                />
              </a>
              <a
                href="https://twitter.com/emystiexx"
                target={"_blank"}
                rel="noreferrer noopener"
              >
                <Icon
                  as={AiFillTwitterCircle}
                  fontSize="25px"
                  cursor="pointer"
                  color={colors.gold}
                />
              </a>
              <a
                href="https://github.com/mystiexx"
                target={"_blank"}
                rel="noreferrer noopener"
              >
                <Icon
                  as={AiFillGithub}
                  fontSize="25px"
                  cursor="pointer"
                  color={colors.gold}
                />
              </a>
            </Box>
          </Center>

          <Center mt="10px">
            <Code>{"while(alive){eat() code() sleep() game()} "}</Code>
          </Center>
        </Box>
      </Box>

      <About />

      <Projects/>


      <Container maxW="container.lg" py='200px'>
        <Box
          p='40px'
          borderRadius={"10px"}
          bg={colors.light}
          alignItems={{ base: "none", md: "center", lg: "center" }}
          display={"flex"}
          flexDir={{ base: 'column', md: 'column', lg: 'row' }}
          justifyContent={"space-between"}
          gap={"20px"}
        >
          <Text fontSize={'24px'} fontWeight={600}>Start a project</Text>

          <Text textAlign={'center'}>
            Interested in working together? we should queue up a time to chat.
          </Text>

          <Button
            bg={colors.gold}
            _hover={{
              opacity: 0.8,
            }}
          >
            Let's do this
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
