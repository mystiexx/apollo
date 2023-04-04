import React from "react";
import {
  Box,
  Container,
  Text,
  Image,
  Button,
  useMediaQuery,
  Icon,
} from "@chakra-ui/react";
import Layout from "../../layout";
import profile from "../../assets/profile_pic.png";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import About from "../about";
import Projects from "../projects";
import styles from './styles.module.css'
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Layout>
      <Box
        paddingTop="8%"
        h={isLargerThan800 ? "auto" : "auto"}
        pb={isLargerThan800 ? "90px" : "100px"}
        id='#home'

      >
        <Container maxW="container.lg">
          <Box
            display="flex"
            flexDir={isLargerThan800 ? "row" : "column"}
            gap="50px"
            justifyContent={"space-between"}
            w="100%"
          >
            <Box>
              <Image
                src={profile}
                alt="profile_pic"
                w={isLargerThan800 ? "80vw" : "100%"}
                h={isLargerThan800 ? "60vh" : "auto"}
              />
            </Box>

            <Box>
              <Fade direction='up' cascade triggerOnce>
                <Text
                  fontSize={isLargerThan800 ? "50px" : "30px"}
                  fontWeight={700}
                  color="#212121"

                >
                  Crafting digital experiences with code and creativity
                </Text>
                <Text
                  fontSize="16px"
                  color="#212121"
                  textAlign={isLargerThan800 ? "left" : "justify"}
                >
                  Hi, I'm a Roland Enola a frontend developer with a passion for React JS, Redux, and
                  CSS libraries. My focus is on building beautiful and intuitive
                  user interfaces that engage and inspire. With years of
                  experience in the industry, I bring a wealth of knowledge and
                  expertise to every project.
                </Text>

              </Fade>

              <a
                href="mailto:aloneroland@gmail.com"
                target={"_blank"}
                rel="noreferrer noopener"
              >
                <Button
                  mt="24px"
                  bg="#212121"
                  color="#fff"
                  w={isLargerThan800 ? "auto" : "100%"}
                  _hover={{ opacity: "0.8" }}
                >
                  Contact
                </Button>
              </a>
            </Box>
          </Box>

          <Box mt='24px' className={styles.moving_text}>
            {`${'while(alive){eat() code() sleep() game()} '}`}
          </Box>

          <Box>
            <Box
              display={"flex"}
              gap="30px"
              mt="10px"

            >
              <a
                href="https://www.linkedin.com/in/enola-roland-18704b135/"
                target={"_blank"}
                rel="noreferrer noopener"
              >
                <Icon
                  as={AiFillLinkedin}
                  fontSize="25px"
                  cursor="pointer"
                  color="#212121"
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
                  color="#212121"
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
                  color="#212121"
                />
              </a>
            </Box>
          </Box>

          <About />
          <Projects />
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
