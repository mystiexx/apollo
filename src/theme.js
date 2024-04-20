import { extendTheme } from "@chakra-ui/react";

// Version 1: Using objects
export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Ubuntu",
        color: "#fff",
        fontWeight: 400,
        backgroundColor: "#0c0b0b",
      },
    },
  },
  components: {
    Text: {
      baseStyle: {
        fontFamily: "Rubik",
        fontWeight: 400,
      },
    },
  },
});
