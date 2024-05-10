import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";
const theme = extendTheme({});
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraBaseProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </ChakraBaseProvider>
);
