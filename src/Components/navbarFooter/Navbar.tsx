import React from "react";
import {
  Box,
  Flex,
  chakra,
  Button,
  useColorModeValue,
  useDisclosure,
  HStack,
  IconButton,
  VStack,
  CloseButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const bg = useColorModeValue("black", "black");
  const mobileNav = useDisclosure();
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={3}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex alignItems={"center"}>
            <Image
              src="https://algotest.in/logo300.png"
              alt="error in main logo"
              w={"10%"}
            />
            <Text fontSize={34} fontWeight="bold" ml="4" color={"white"}>
              AlgoTest
            </Text>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={0}
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
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
                borderLeft={"2px solid white"}
                borderRight={"2px solid white"}
                borderRadius={0}
              >
                Margin Calculator
              </Button>
              <Button
                variant="ghost"
                color={"white"}
                fontSize={{ base: "12px", md: "14px" }}
              >
                Sign Up
              </Button>
            </HStack>
            <Button
              colorScheme="blue"
              size="sm"
              py={5}
              fontWeight={"bold"}
              fontSize={{ base: "12px", md: "14px" }}
            >
              Login
            </Button>
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu color="white" />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Features
                </Button>
                <Button w="full" variant="ghost">
                  Pricing
                </Button>
                <Button w="full" variant="ghost">
                  Blog
                </Button>
                <Button w="full" variant="ghost">
                  Company
                </Button>
                <Button w="full" variant="ghost">
                  Sign in
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default Navbar;
