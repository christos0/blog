import { ColorModeScript } from "@chakra-ui/react";
import ReactDOM from "react-dom";

import theme from "app/layout/theme";
import { App } from "app/layout/App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

ReactDOM.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
