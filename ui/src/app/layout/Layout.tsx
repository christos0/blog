import { Flex, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

import { NavBar } from "app/components";
import { Routes } from "./Routes";

export const Layout = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <NavBar logoSrc={"hi"}>
        <Flex justify="center" align="center">
          <Icon as={colorMode === "light" ? FaMoon : FaSun} mr={2} />
          <Switch onChange={toggleColorMode} />
        </Flex>
      </NavBar>
      <Routes />
    </>
  );
};
