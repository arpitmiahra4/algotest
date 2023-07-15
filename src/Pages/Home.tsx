import { Box } from "@chakra-ui/react";
import React from "react";
import TopSection from "../Components/Home/TopSection";

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
    </Box>
  );
};

export default Home;
