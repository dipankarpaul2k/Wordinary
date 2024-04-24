import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import theme from "./theme.js";
import "@mantine/core/styles.css";
import "./index.css";

import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </React.StrictMode>
);
