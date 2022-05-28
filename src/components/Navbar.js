import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { Box, Text, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box as="nav" width="100%" backgroundColor="#000000">
      <Text margin={0} color="#ffffff">
        Hello
      </Text>
      <Link color="#ffffff" as={ReactLink} to="/projects">
        Projects
      </Link>
    </Box>
  );
};

export default Navbar;
