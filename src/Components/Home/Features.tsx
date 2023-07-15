import {
  Box,
  Button,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const Features = () => {
  return (
    <Box>
      <Flex flexDirection={"column"} justifyContent={"center"}>
        <Text fontWeight={"bold"} fontSize={50}>
          FEATURES
        </Text>
        <Text fontSize={40} mt={"-2%"}>
          Backtest & Deploy
        </Text>
      </Flex>
      <Flex
        mt={14}
        textAlign={"left"}
        justifyContent={"center"}
        flexDirection={{ base: "column", md: "row" }}
        gap={5}
      >
        <Box bg={"#2a2a2a"} py={12} px={5} borderRadius={20} w={"21%"}>
          <Text color="#0e8fcb" fontWeight={"bold"} fontSize={22}>
            BACKTESTING
          </Text>
          <UnorderedList mt={4}>
            <ListItem fontSize={18}>25 free backtests every week</ListItem>
            <ListItem fontSize={18}>20 paisa per backtest per year</ListItem>
            <ListItem fontSize={18}>Ultra fast</ListItem>
            <ListItem fontSize={18}>
              Unlimited backtests starting @ ₹533
            </ListItem>
          </UnorderedList>
          <Text mt={5} fontSize={18}>
            First time user?
          </Text>
          <Text fontSize={18}>
            Check out our offers{" "}
            <span style={{ color: "green", marginLeft: "2px" }}>here</span>
          </Text>
        </Box>
        <Box bg={"#2a2a2a"} py={12} px={5} borderRadius={20} w={"21%"}>
          <Text color="#0e8fcb" fontWeight={"bold"} fontSize={22}>
            BACKTESTING
          </Text>
          <UnorderedList mt={4}>
            <ListItem fontSize={18}>25 free backtests every week</ListItem>
            <ListItem fontSize={18}>20 paisa per backtest per year</ListItem>
            <ListItem fontSize={18}>Ultra fast</ListItem>
            <ListItem fontSize={18}>
              Unlimited backtests starting @ ₹533
            </ListItem>
          </UnorderedList>
          <Text mt={5} fontSize={18}>
            First time user?
          </Text>
          <Text fontSize={18}>
            Check out our offers{" "}
            <span style={{ color: "green", marginLeft: "2px" }}>here</span>
          </Text>
        </Box>
        <Box bg={"#2a2a2a"} py={12} px={5} borderRadius={20} w={"21%"}>
          <Text color="#0e8fcb" fontWeight={"bold"} fontSize={22}>
            BACKTESTING
          </Text>
          <UnorderedList mt={4}>
            <ListItem fontSize={18}>25 free backtests every week</ListItem>
            <ListItem fontSize={18}>20 paisa per backtest per year</ListItem>
            <ListItem fontSize={18}>Ultra fast</ListItem>
            <ListItem fontSize={18}>
              Unlimited backtests starting @ ₹533
            </ListItem>
          </UnorderedList>
          <Text mt={5} fontSize={18}>
            First time user?
          </Text>
          <Text fontSize={18}>
            Check out our offers{" "}
            <span style={{ color: "green", marginLeft: "2px" }}>here</span>
          </Text>
        </Box>
      </Flex>
      <Button
        colorScheme="blue"
        textTransform={"uppercase"}
        mt={10}
        px={10}
        py={6}
        fontSize={14}
      >
        Explore Our New Margin Calculator{" "}
      </Button>
    </Box>
  );
};

export default Features;
