import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, Spinner } from "@chakra-ui/react";

import { Layout } from "./Layout";

export const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Suspense fallback={<Spinner />}>
          <Layout />
        </Suspense>
      </ChakraProvider>
    </BrowserRouter>
  );
};
