import { Box } from "@chakra-ui/react";
import React from "react";
import TopSection from "../Components/Home/TopSection";
import FloatingImage from "../Components/Home/FloatingImage";

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
    </Box>
  );
};

export default Home;
