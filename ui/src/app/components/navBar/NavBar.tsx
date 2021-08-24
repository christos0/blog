import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  Icon,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import { useMediaQueries } from "app/hooks";
import history from "app/utils/history";

interface INavigationMenuProps {
  logoTitle: string;
  children: React.ReactNode;
}

export const NavBar = ({ logoTitle, children }: INavigationMenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isMd, isXl } = useMediaQueries();

  if (isXl || isMd)
    return (
      <Center minH="64px" pr="64px" pl="64px" borderBottom="1px solid">
        <Flex w="1500px" flexDir="row" align="center" justify="space-around">
          <Center w="100px" h="100px">
            <Link
              onClick={() => history.push("/")}
              as={RouterLink}
              to="/"
              _hover={{ textDecor: "none", boxShadow: "none !important" }}
            >
              <Text fontSize="2xl" whiteSpace="nowrap">
                {logoTitle}
              </Text>
            </Link>
          </Center>
          <Flex flexDir="row" align="center">
            {children}
          </Flex>
        </Flex>
      </Center>
    );
  else
    return (
      <Center minH="64px" pr="64px" pl="64px" borderBottom="1px solid">
        <Flex w="1500px" flexDir="row" align="center" justify="space-around">
          <Text fontSize="2xl" whiteSpace="nowrap">
            {logoTitle}
          </Text>
          <Flex flexDir="row" align="center">
            <Button variant="outline" onClick={onOpen}>
              <Icon as={AiOutlineMenu} />
            </Button>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody>
                  <Flex flexDir="column" justify="center" align="center" mb={5}>
                    <Text
                      fontSize="2xl"
                      whiteSpace="nowrap"
                      borderBottom="1px solid"
                    >
                      {logoTitle}
                    </Text>
                    {children}
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Flex>
        </Flex>
      </Center>
    );
};
