import React, { useState } from "react";
import {
  Box,
  Container,
  Icon,
  Text,
  Button,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./styles.module.css";
import Mobile from "./mobile";
import { colors } from "../../utils/colors";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const routes = [
    {
      name: "project",
      route: "#projects",
    },
  ];
  return (
    <Box>
      <Mobile show={show} routes={routes} />
      <Container maxW="container.lg">
        <Box
          h="60px"
          display="flex"
          alignItems={"center"}
          justifyContent="space-between"
          pt="24px"
          pb="24px"
          border={`1px solid ${colors.gray}`}
          borderRadius={"10px"}
          px="16px"
          mt="20px"
        >
          <Text fontSize={"20px"}>
            <span style={{ color: colors.gold }}>{`<A`}</span>lone
            <span style={{ color: colors.gold }}>{`/>`}</span>
          </Text>
          <Box display={{ base: "none", md: "flex", lg: "flex" }} gap="24px">
            {routes.map((route, i) => (
              <a href={route.route} className={styles.link} key={i}>
                {route.name}
              </a>
            ))}
          </Box>

          <Button
            bg={colors.gold}
            display={{base:'none', md:'block', lg: 'block'}}
            _hover={{
              opacity: 0.8,
            }}
          >
            <a href="mailto:aloneroland@gmail.com" target="_blank" rel='noreferrer' >
              Contact me
            </a>
          </Button>

          <Box display={{ base: "block", md: "none", lg: "none" }}>
            {show ? (
              <Icon
                as={AiOutlineClose}
                fontSize="25px"
                transition="0.5s"
                onClick={() => setShow(!show)}
              />
            ) : (
              <Icon
                as={AiOutlineMenu}
                fontSize="25px"
                transition="0.5s"
                onClick={() => setShow(!show)}
              />
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
