import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Image,
    Text,
    Box,
    Button,
    useMediaQuery,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";

const MoreInfo = ({ isOpen, onClose, project }) => {
    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");


    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={isLargerThan800 ? "xl" : "md"}
            isCentered
            motionPreset='slideInRight'
        >
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody mt="60px" pb="30px">
                    <Box>
                        <Image
                            src={project?.image}
                            alt="project"
                            w="100%"
                            h="auto"
                            borderRadius={"10px"}
                        />
                        <Text mt="10px" mb="10px" fontSize="18px" fontWeight="600">
                            {project?.name}
                        </Text>
                        <Text fontSize="15px">{project?.description}</Text>

                        <Box
                            display="flex"
                            flexDir={isLargerThan800 ? "row" : "col"}
                            gap={10}
                            alignItems="center"
                            mt="24px"
                        >
                            <Button
                                leftIcon={<AiFillGithub />}
                                w="100%"
                                border="1px solid #212121"
                                color="#fff"
                                borderRadius={"10px"}
                                background="#212121"
                                _hover={{ bg: "transparent", color: "#212121" }}
                            >
                                <a
                                    href={project?.github}
                                    target={"_blank"}
                                    rel="noreferrer noopener"
                                >
                                    Github
                                </a>
                            </Button>

                            <Button
                                leftIcon={<SiNetlify />}
                                w="100%"
                                border="1px solid #212121"
                                color="#212121"
                                borderRadius={"10px"}
                                background="transparent"
                                _hover={{ bg: "#212121", color: "#fff" }}
                            >
                                <a
                                    href={project?.live}
                                    target={"_blank"}
                                    rel="noreferrer noopener"
                                >
                                    Live
                                </a>
                            </Button>
                        </Box>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default MoreInfo;
