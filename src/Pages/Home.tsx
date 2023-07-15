import { Box } from "@chakra-ui/react";
import React from "react";
import TopSection from "../Components/Home/TopSection";
import FloatingImage from "../Components/Home/FloatingImage";
import Features from "../Components/Home/Features";

const Home = () => {
  return (
    <Box
      border={"1px solid red"}
      w={"100%"}
      bg={"black"}
      color={"white"}
      textAlign={"center"}
    >
      <TopSection />
      <FloatingImage />
      <Box bg={"#484848"} color={"white"} textAlign={"center"}>
        <Features />
      </Box>
    </Box>
  );
};

export default Home;
