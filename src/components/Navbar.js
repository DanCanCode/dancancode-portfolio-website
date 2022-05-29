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
import { FaTelegramPlane } from "react-icons/fa";
import { IoPersonSharp, IoHomeSharp } from "react-icons/io5";
import { IoIosConstruct } from "react-icons/io";
import { BsLinkedin, BsGithub } from "react-icons/bs";

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

          <DrawerBody>
            <Flex flexDirection="column" alignItems="center" marginTop={10}>
              <Link
                as={ReactLink}
                to="/"
                onClick={onClose}
                display="flex"
                alignItems="center"
                marginY={5}
              >
                <Icon
                  as={IoHomeSharp}
                  color="#ffffff"
                  marginRight={2}
                  boxSize={6}
                />
                <Text fontWeight="bold" fontSize={24}>
                  Home
                </Text>
              </Link>

              <Link
                as={ReactLink}
                to="/profile"
                onClick={onClose}
                display="flex"
                alignItems="center"
                marginY={5}
              >
                <Icon
                  as={IoPersonSharp}
                  color="#ffffff"
                  marginRight={2}
                  boxSize={6}
                />
                <Text fontWeight="bold" fontSize={24}>
                  Profile
                </Text>
              </Link>

              <Link
                as={ReactLink}
                to="/projects"
                onClick={onClose}
                display="flex"
                alignItems="center"
                marginY={5}
              >
                <Icon
                  as={IoIosConstruct}
                  color="#ffffff"
                  marginRight={2}
                  boxSize={6}
                />
                <Text fontWeight="bold" fontSize={24}>
                  Projects
                </Text>
              </Link>

              <Link
                as={ReactLink}
                to="/contact"
                onClick={onClose}
                display="flex"
                alignItems="center"
                marginY={5}
              >
                <Icon
                  as={FaTelegramPlane}
                  color="#ffffff"
                  marginRight={2}
                  boxSize={6}
                />
                <Text fontWeight="bold" fontSize={24}>
                  Contact
                </Text>
              </Link>
            </Flex>
          </DrawerBody>

          <DrawerFooter
            borderTopWidth="1px"
            borderColor="#c9c9c9"
            alignItems="center"
            justifyContent="center"
          >
            <Link
              href="https://www.linkedin.com/in/danieleespinal/"
              isExternal
              marginRight={2}
            >
              <Icon as={BsLinkedin} color="#c9c9c9" boxSize={6} />
            </Link>

            <Link
              href="https://github.com/DanCanCode"
              isExternal
              marginLeft={2}
            >
              <Icon as={BsGithub} color="#c9c9c9" boxSize={6} />
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
