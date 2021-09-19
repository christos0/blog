import { Link, LinkProps } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface Props extends LinkProps {
  to: string;
  name: string;
}

export const NavBarItem = (navBarItemProps: Props) => {
  const { to, name, ...props } = navBarItemProps;

  return (
    <Link as={RouterLink} to={to} {...props}>
      {name}
    </Link>
  );
};
