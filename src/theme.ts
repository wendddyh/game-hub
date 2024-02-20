//import extend theme
import { extendTheme } from "@chakra-ui/react";

//add color mode config
const config ={ initialColorMode: 'dark'}

//extend the theme
const theme = extendTheme({
  config,
  colors: {
   gray: {
    50: '#f9f9f9',
    100: '#ededed',
    200: '#d3d3d3',
    300: '#a0a0a0',
    400: '#898989',
    500: '#6c6c6c',
    600: '#202020',
    700: '121212',
    800: '#121212',
    900: '#111'
   }
  }


});

export default theme
