import React from "react";
import { Link } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex backgroundColor="#000000">
      <Text color="#ffffff">Hello</Text>
      <Link to="/projects">Projects</Link>
    </Flex>
  );
};

export default Navbar;
