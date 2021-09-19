import { Center, Flex, HStack, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { useWidths } from "app/hooks";

interface Props {
  websiteTitle: string;
  children: React.ReactNode;
}

export const NavBarLg = ({ websiteTitle, children }: Props) => {
  const { maxWidth } = useWidths();

  return (
    <Flex h="100px" w={maxWidth} align="center" justify="space-around">
      {/* Logo. */}
      <Center w="100px" h="100px">
        <Link
          as={RouterLink}
          to="/"
          _hover={{ textDecor: "none", boxShadow: "none !important" }}
        >
          <Heading size="md" whiteSpace="nowrap">
            {websiteTitle}
          </Heading>
        </Link>
      </Center>
      {/* Navigation Menu. */}
      <HStack spacing={4}>{children}</HStack>
    </Flex>
  );
};
