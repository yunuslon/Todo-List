import { createTheme } from "@shopify/restyle";
import { palette } from "./palette";

const theme = createTheme({
  colors: {
    mainBackground: palette.dark,
    primary: palette.violet,
    white: palette.white,
    black: palette.black,
    secondary: palette.yellow,
    cardPrimaryBackground: palette["grey-800"],
    "grey-600": palette["grey-600"],
    softGrey: palette["grey-400"],
    red: palette.red,
    green: palette.green,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    defaults: {
      color: "white",
    },

    body: {
      fontFamily: "Roboto-Regular",
      fontSize: 16,
      lineHeight: 24,
    },

    bodySmall: {
      fontFamily: "Roboto-Regular",
      fontSize: 14,
      lineHeight: 20,
    },

    caption: {
      fontFamily: "Roboto-Regular",
      fontSize: 12,
      lineHeight: 16,
    },

    title: {
      fontFamily: "Roboto-Medium",
      fontSize: 16,
      lineHeight: 24,
    },

    heading: {
      fontFamily: "Roboto-Medium",
      fontSize: 24,
      lineHeight: 32,
    },

    headingSemiBold: {
      fontFamily: "Roboto-SemiBold",
      fontSize: 24,
      lineHeight: 32,
    },
  },
});

export type Theme = typeof theme;

export default theme;
