import React, { useState } from "react";
import { Box, Container, Icon, useMediaQuery, Text } from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./styles.module.css";
import Mobile from "./mobile";

const Navbar = () => {
    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
    const [show, setShow] = useState(false);

    const routes = [
        {
            name: "home",
            route: "#home",
        },
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
                >
                    <Text fontSize='30px' fontFamily={"Zeyada"}>Roland Enola</Text>
                    <Box display={isLargerThan800 ? "flex" : "none"} gap="24px">
                        {routes.map((route, i) => (
                            <a href={route.route} className={styles.link} key={i}>
                                {route.name}
                            </a>
                        ))}
                    </Box>

                    {isLargerThan800 ? null : (
                        <Box>
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
                    )}
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;
