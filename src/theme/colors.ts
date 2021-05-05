import { Colors } from "./types";

export const baseColors = {
  failure: "#F72B50",
  primary: "#379683",
  primaryBright: "#5CDB95",
  primaryDark: "#291e08",
  secondary: "#05386B",
  success: "#68CF29",
  warning: "#FFAB2D",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ADE48E", 
  backgroundDisabled: "#E9EAEB",
  contrast: "#05386B",
  invertedContrast: "#5CDB95",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#05386B",
  textDisabled: "#05386B",
  textSubtle: "#379683",
  borderColor: "#05386B",
  card: "#edf5e1",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#338c15", //Title?
  background: "#40290e", //#40290e
  backgroundDisabled: "#291e08",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#291e08", //was 0098A1
  tertiary: "#353547",
  text: "#338c15",
  textDisabled: "#99a917",
  textSubtle: "#99a917",
  borderColor: "#524B63",
  card: "#0e1f0e",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
