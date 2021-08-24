import { Box, Flex, Icon, Link, Switch, useColorMode } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

import { NavBar } from "app/components";
import { Routes } from "./Routes";

export const Layout = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <NavBar logoTitle="christos kaltsas">
        <Link as={RouterLink} to="/contact" mr={5}>
          Contact
        </Link>
        <Flex justify="center" align="center">
          <Icon as={colorMode === "light" ? FaMoon : FaSun} mr={2} />
          <Switch onChange={toggleColorMode} />
        </Flex>
      </NavBar>
      <Box>
        <Routes />
      </Box>
    </>
  );
};
