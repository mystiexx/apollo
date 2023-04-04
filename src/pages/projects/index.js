import React, { useState } from "react";
import {
    Box,
    Text,
    Grid,
    GridItem,
    useMediaQuery,
    Image,
} from "@chakra-ui/react";
import { enums } from "./enums";
import MoreInfo from "./moreInfo";
import { Slide } from "react-awesome-reveal";

const Projects = () => {
    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
    const [show, setShow] = useState(false);
    const [project, setProject] = useState({});

    return (
        <Box pt="200px" pb="100px" id="projects">
            <MoreInfo
                isOpen={show}
                onClose={() => setShow(false)}
                project={project}
            />
            <Text fontWeight={800} fontSize="30px" textAlign={"left"}>
                Projects
            </Text>
            <Text fontSize="12px" fonWeight="400" mb="50px">
                Building a Better Future Together...
            </Text>

            <Grid
                templateColumns={isLargerThan800 ? "repeat(3,1fr)" : "auto"}
                gap={10}
            >
                <Slide direction="up" cascade triggerOnce fraction='0'>
                    {enums?.map((data) => (
                        <GridItem key={data.id}>
                            <Box
                                border="1px solid #212121"
                                borderRadius={"10px"}
                                cursor="pointer"
                                transition="0.4s ease"
                                onClick={() => {
                                    setShow(true);
                                    setProject(data);
                                }}
                                _hover={{
                                    background: "black",
                                    color: "#fff",
                                    transform: "scale(0.9)",
                                }}
                            >
                                <Image
                                    src={data.image}
                                    alt="project"
                                    objectFit={"center"}
                                    w="100%"
                                    height="auto"
                                    borderTopRadius={"10px"}
                                />
                                <Box p="16px">
                                    <Text fontSize="18px" fontWeight="500" mt="10px">
                                        {data.name}
                                    </Text>
                                    <Text noOfLines={2} fontSize="14px" mt="10px">
                                        {data.description}
                                    </Text>

                                    <Text mt="10px" fontSize="12px">
                                        Click for more
                                    </Text>
                                </Box>
                            </Box>
                        </GridItem>
                    ))}
                </Slide>
            </Grid>
        </Box>
    );
};

export default Projects;
