import {
  Center,
  CenterProps,
  Icon,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

interface Props extends CenterProps {}

export const NavBarColorSwitch = ({ ...props }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center {...props}>
      <Icon as={colorMode === "light" ? FaSun : FaMoon} mr={1} />
      <Switch onChange={toggleColorMode} />
    </Center>
  );
};
