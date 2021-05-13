import { Colors } from "./types";

export const baseColors = {
  failure: "#4CED9A",
  primary: "#bc6f54",
  primaryBright: "#bc6f54",
  primaryDark: "#bc6f54",
  secondary: "#86ad37",
  success: "#D13257",
  warning: "#3884FF",
};

export const brandColors = {
  binance: "#0C41F0",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAFAFA",
  backgroundDisabled: "#EBE9E8",
  contrast: "#202613",
  invertedContrast: "#FFFFFF",
  input: "#F1F5EB",
  tertiary: "#F5F1F0",
  text: "#5F7A2A",
  textDisabled: "#C4BFBC",
  textSubtle: "#ABBA80",
  borderColor: "#EBE9E8",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FFE8E6 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#D0FF6B",
  background: "#323631",
  backgroundDisabled: "#3D4237",
  contrast: "#FFFFFF",
  invertedContrast: "#202613",
  input: "#50593E",
  primaryDark: "#A10800",
  tertiary: "#474736",
  text: "#F5FCE3",
  textDisabled: "#6B7060",
  textSubtle: "#CED4C3",
  borderColor: "#5C634C",
  card: "#2A2B25",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #5C5031 0%, #3D2A54 100%)",
  },
};
