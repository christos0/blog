import { Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import history from "app/utils/history";
import { Layout } from "./Layout";

export const App = () => {
  return (
    <Router history={history}>
      <ChakraProvider>
        <Layout />
      </ChakraProvider>
    </Router>
  );
};
