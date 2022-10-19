import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "../styles/globals.css";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeScript initialColorMode="light"  />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
