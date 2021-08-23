import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface INavItemProps {
  path: string;
  title: string;
}

export const NavBarItem = ({ path, title }: INavItemProps) => {
  return (
    <Link color="" mr={12} as={RouterLink} to={path}>
      {title}
    </Link>
  );
};
