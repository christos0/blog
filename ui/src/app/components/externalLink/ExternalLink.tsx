import { HStack, Icon, Link, LinkProps, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { AiOutlineLink } from "react-icons/ai";

interface Props extends LinkProps {
  href: string;
  title: string;
}

export const ExternalLink = (externalLinkProps: Props) => {
  const { href, title, ...props } = externalLinkProps;

  return (
    <Tooltip label="This redirects to an external website.">
      <Link isExternal href={href} {...props}>
        <HStack>
          <Text>{title}</Text>
          <Icon as={AiOutlineLink} />
        </HStack>
      </Link>
    </Tooltip>
  );
};
