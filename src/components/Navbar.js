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
  Button,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      paddingY={5}
      paddingX={10}
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="rgba(0, 0, 0, 0.2)"
    >
      <Text fontSize={32} fontWeight="bold">
        Daniel Espinal
      </Text>

      <Button
        onClick={onOpen}
        colorScheme="blackAlpha"
        variant="ghost"
        minH={12}
        _active={{
          transform: "scale(0.9)",
        }}
      >
        <Icon as={FiMenu} color="#ffffff" boxSize={10} />
      </Button>

      <Drawer onClose={onClose} placement="right" isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent backgroundColor="#808080">
          <DrawerCloseButton />
          <DrawerHeader>{`Home drawer contents`}</DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consequat nisl vel pretium lectus quam id. Semper quis lectus
              nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
              quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
              magna eget est lorem. Erat imperdiet sed euismod nisi porta.
              Lectus vestibulum mattis ullamcorper velit.
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
