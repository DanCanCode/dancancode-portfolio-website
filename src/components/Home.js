import React, { Suspense } from "react";
import { Box, Text } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import Earth from "./Earth";

const Home = () => {
  return (
    <Box>
      <Text textAlign="center" fontSize={36} fontWeight="bold">
        Hello World!
      </Text>

      <Box>
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </Box>
    </Box>
  );
};

export default Home;
