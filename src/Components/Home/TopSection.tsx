import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { SiBackendless } from "react-icons/si";
const TopSection = () => {
  return (
    <Box w={"100%"}>
      <Text fontSize={17} letterSpacing={".2rem"}>
        ALGOTEST
      </Text>
      <Text fontWeight={"bold"} fontSize={50}>
        THE ONLY BACKTESTING PLATFORM BUILT FOR
      </Text>
      <Text fontWeight={"bold"} fontSize={50}>
        THE INDIAN INVESTOR
      </Text>
      <Button
        colorScheme="blue"
        textTransform={"uppercase"}
        mt={14}
        px={10}
        py={6}
        fontSize={14}
      >
        get 25 free backtests{" "}
      </Button>
      <Flex alignItems={"center"} gap={5} justifyContent={"center"} mt={3}>
        <Text fontSize={18}>Backend By</Text>
        <SiBackendless size={18} />
        <Text fontSize={18}>Deepak</Text>
      </Flex>
    </Box>
  );
};

export default TopSection;
