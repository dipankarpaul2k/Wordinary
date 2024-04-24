import { createTheme } from "@mantine/core";

const myColors = [
  "#f2f0ff",
  "#e0dff2",
  "#bfbdde",
  "#9b98ca",
  "#7d79ba",
  "#6a65b0",
  "#605bac",
  "#504c97",
  "#464388",
  "#3b3979",
];

const theme = createTheme({
  primaryColor: "myColors",
  colors: {
    myColors,
  },
  autoContrast: true,
  luminanceThreshold: 0.3,
  defaultRadius: "sm",
});

export default theme;
