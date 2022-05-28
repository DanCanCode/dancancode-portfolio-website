import React from "react";
import { Link as ReactLink } from "react-router-dom";
import {
  Flex,
  Box,
  Text,
  Link,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      paddingY={15}
      paddingX={30}
      backgroundColor="rgba(0, 0, 0, 0.1)"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text margin={0} fontWeight="bold" fontSize={28}>
        Daniel Espinal
      </Text>
      <Box
        as="button"
        borderWidth={0}
        backgroundColor="rgba(255, 255, 255, 0)"
        color="#ffffff"
        padding={0}
        _hover={{
          color: "#808080",
        }}
      >
        <Icon
          as={GiHamburgerMenu}
          boxSize={36}
          _active={{
            transform: "scale(0.9)",
          }}
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
