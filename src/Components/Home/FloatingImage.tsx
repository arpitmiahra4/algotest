import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import "../../Styles/Home.css";

const FloatingImage = () => {
  return (
    <Box mt={10}>
      <Text>Integrated with</Text>
      <Box className="main_box" mt={5}>
        <Box className="slider">
          <Box className="slide-track">
            <Box className="slide">
              <Image
                className="images"
                src="https://algotest.in/landing/nuvama.svg"
                alt=""
              />
            </Box>
            <Box className="slide">
              <Image
                className="images"
                src="https://algotest.in/landing/zerodha.svg"
                alt=""
              />
            </Box>
            <Box className="slide">
              <Image
                className="images"
                src="https://algotest.in/landing/tv.svg"
                alt=""
              />
            </Box>
            <Box className="slide">
              <Image
                className="images"
                src="https://algotest.in/landing/dhan.svg"
                alt=""
              />
            </Box>
            <Box className="slide">
              <Image
                className="images"
                src="https://algotest.in/landing/upstox.svg"
                alt=""
              />
            </Box>
            <Box className="slide">
              <Image
                className="images"
                src="https://algotest.in/landing/flattrade.svg"
                alt=""
              />
            </Box>
            <Box className="slide">
              <Image
                className="images"
                src="https://algotest.in/landing/icici.svg"
                alt=""
              />
            </Box>
            {/* same double */}
            <Box className="slide">
              <Image
                className="images"
                src="https://algotest.in/landing/nuvama.svg"
                alt=""
              />
            </Box>
            <Box className="slide">
              <Image
                className="images"
                src="https://algotest.in/landing/zerodha.svg"
                alt=""
              />
            </Box>
            <Box className="slide">
              <Image
                className="images"
                src="https://algotest.in/landing/tv.svg"
                alt=""
              />
            </Box>
            <Box className="slide">
              <Image
                className="images"
                src="https://algotest.in/landing/dhan.svg"
                alt=""
              />
            </Box>
            <Box className="slide">
              <Image
                className="images"
                src="https://algotest.in/landing/upstox.svg"
                alt=""
              />
            </Box>
            <Box className="slide">
              <Image
                className="images"
                src="https://algotest.in/landing/flattrade.svg"
                alt=""
              />
            </Box>
            <Box className="slide">
              <Image
                className="images"
                src="https://algotest.in/landing/icici.svg"
                alt=""
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FloatingImage;
