import {
  Box,
  Container,
  Button,
  Stack,
  Text,
  useColorModeValue,
  Flex,
  Image,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsFacebook, BsTelegram, BsLinkedin } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("black", "black")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Flex alignItems={"center"} m={"auto"} justifyContent={"center"}>
          <Image
            src="https://algotest.in/logo300.png"
            alt="error in main logo"
            w={"10%"}
          />
          <Text fontSize={16} fontWeight="normal" ml="4" color={"white"}>
            AlgoTest
          </Text>
        </Flex>
        <Stack direction={"row"} spacing={0}>
          <Button
            variant="ghost"
            color={"white"}
            fontSize={{ base: "12px", md: "14px" }}
          >
            About us
          </Button>
          <Button
            variant="ghost"
            color={"white"}
            fontSize={{ base: "12px", md: "14px" }}
          >
            Education
          </Button>
          <Button
            variant="ghost"
            color={"white"}
            fontSize={{ base: "12px", md: "14px" }}
          >
            Features
          </Button>
          <Button
            variant="ghost"
            color={"white"}
            fontSize={{ base: "12px", md: "14px" }}
          >
            Pricing
          </Button>
          <Button
            variant="ghost"
            color={"white"}
            fontSize={{ base: "12px", md: "14px" }}
          >
            Blog
          </Button>
          <Button
            variant="ghost"
            color={"white"}
            fontSize={{ base: "12px", md: "14px" }}
          >
            Community
          </Button>
          <Button
            variant="ghost"
            color={"white"}
            fontSize={{ base: "12px", md: "14px" }}
          >
            Sign Up
          </Button>
          <Button
            colorScheme="blue"
            size="sm"
            py={5}
            fontWeight={"bold"}
            fontSize={{ base: "12px", md: "14px" }}
          >
            Login
          </Button>
        </Stack>
      </Container>
      <Box textAlign={"center"} color="white" mt={2}>
        Contact Us:
      </Box>
      <Flex alignItems={"center"} gap={4} justifyContent={"center"} mt={4}>
        <FaInstagram color="white" size={18} />
        <FaTwitter color="white" size={18} />
        <FaYoutube color="white" size={18} />
        <BsFacebook color="white" size={18} />
        <BsTelegram color="white" size={18} />
        <BsLinkedin color="white" size={18} />
        <AiFillMail color="white" size={18} />
      </Flex>
      <Flex flexDirection={"column"} gap={2} mt={4}>
        <Text textAlign={"center"} color={"white"} fontSize={14}>
          Email: arpitmiahra4@gmail.com
        </Text>
        <Text textAlign={"center"} color={"white"} fontSize={14}>
          © 2023 All rights reserved. Oraph Private Limited.
        </Text>
        <Flex alignItems={"center"} gap={5} justifyContent={"center"}>
          <Text textAlign={"center"} color={"white"} fontSize={14}>
            Terms and Conditions
          </Text>
          <Text
            textAlign={"center"}
            color={"white"}
            fontSize={14}
            borderLeft={"1px solid white"}
            borderRight={"1px solid white"}
            px={2}
          >
            Privacy Policy
          </Text>
          <Text textAlign={"center"} color={"white"} fontSize={14}>
            Cancellation/Refund Policy
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
