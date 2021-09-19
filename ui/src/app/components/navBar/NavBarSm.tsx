import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Heading,
  useDisclosure,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

interface Props {
  websiteTitle: string;
  children: React.ReactNode;
}

export const NavBarSm = ({ websiteTitle, children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex h="100px" w="300px" align="center" justify="space-around">
        {/* Logo. */}
        <Heading size="md" whiteSpace="nowrap">
          {websiteTitle}
        </Heading>
        <IconButton
          aria-label="toggle-menu"
          icon={<AiOutlineMenu />}
          onClick={onOpen}
        />
      </Flex>
      <Drawer size="xs" isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex flexDir="column" justify="center" align="center" mb={5}>
              <Heading size="md">{websiteTitle}</Heading>
              <Divider />
              <VStack>{children}</VStack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
