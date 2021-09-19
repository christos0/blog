import { Center, Container } from "@chakra-ui/react";

import { NavBar } from "app/components";
import { useWidths } from "app/hooks";
import { Routes } from "./Routes";

export const Layout = () => {
  const { maxWidth } = useWidths();

  return (
    <Center flexDir="column">
      <NavBar websiteTitle="rainbow_chad">
        <NavBar.Item to="/" name="Home" />
        <NavBar.ColorSwitch />
      </NavBar>
      <Container maxW={maxWidth} fontFamily="monospace">
        <Routes />
      </Container>
    </Center>
  );
};
