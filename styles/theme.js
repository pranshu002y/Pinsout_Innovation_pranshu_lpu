import { extendTheme } from "@chakra-ui/react";

const Button = {
  
  baseStyle: {
    fontfamily:"DM Sans",
    }, 
  }



const theme = extendTheme({
  fonts: {
    heading: "DM Sans",
    text: "DM Sans",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  components: {
    Button,
  },
});

export default theme;
