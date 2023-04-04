import { extendTheme } from "@chakra-ui/react";

// Version 1: Using objects
export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Rubik",
        color: "#212121",
        fontWeight: 400,
        backgroundColor: "white",
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
