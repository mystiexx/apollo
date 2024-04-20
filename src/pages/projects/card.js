import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { colors } from "../../utils/colors";
import { FiLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Card = ({ content }) => {
  return (
    <Box border={`1px solid ${colors.light}`} borderRadius={"10px"}>
      <Image
        src={content.image}
        alt="project image"
        h="150px"
        w="full"
        objectFit={"cover"}
        borderTopRadius={"10px"}
      />
      <Box p="16px">
        <Text fontSize={"16px"} fontWeight={600}>
          {content.name}
        </Text>
        <Text color={colors.white} fontSize={"14px"} mt="12px" noOfLines={3}>
          {content.description}
        </Text>

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          mt="24px"
          alignItems={"center"}
        >
          <a href={content.live} target="_blank" rel="noreferrer">
            <Box
              display={"flex"}
              alignItems={"center"}
              gap="8px"
              cursor={"pointer"}
            >
              <FiLink fontSize={14} />
              <Text textDecoration={"underline"} fontSize={"14px"}>
                Live Preview
              </Text>
            </Box>
          </a>

          {content.github && (
            <a href={content.github} target="_blank" rel="noreferrer">
              <Box
                display={"flex"}
                alignItems={"center"}
                gap="8px"
                cursor={"pointer"}
              >
                <FaGithub fontSize={14} />
                <Text textDecoration={"underline"} fontSize={"14px"}>
                  View Code
                </Text>
              </Box>
            </a>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
