import React from "react";
import { Box, Center } from "@chakra-ui/react";
import styles from "./styles.module.css";

const Mobile = ({ show, routes }) => {
  return (
    <Box
      position="fixed"
      top="9.4%"
      w="100%"
      left={show ? "0" : "-100%"}
      zIndex="10"
      opacity={show ? "100%" : "0"}
      transition="0.4s"
    >
      <Box
        h="auto"
        bg="#111"
        opacity={"0.9"}
        w="100%"
        p="24px"
        boxSizing="border-box"
      >
        <Center>
          <Box display="flex" flexDir="column" gap="31px">
            {routes?.map((route, i) => (
              <a href={route.route} className={styles.link_mobile} key={i}>
                {route.name}
              </a>
            ))}
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default Mobile;
