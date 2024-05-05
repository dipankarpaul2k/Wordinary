import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import theme from "./theme.js";
import "@mantine/core/styles.css";
import "./index.css";

import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <ModalsProvider>
        <App />
      </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>
);
