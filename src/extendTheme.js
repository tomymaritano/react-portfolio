// extendTheme.js

import { extendTheme } from "@chakra-ui/react";

import '@fontsource/m-plus-rounded-1c/100.css';
import '@fontsource/m-plus-rounded-1c/300.css';
import '@fontsource/m-plus-rounded-1c/400.css';
import '@fontsource/m-plus-rounded-1c/500.css';
import '@fontsource/m-plus-rounded-1c/700.css';
import '@fontsource/m-plus-rounded-1c/800.css';
import '@fontsource/m-plus-rounded-1c/900.css';
import '@fontsource/lato/100.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900.css';

const theme = extendTheme({
  colors: {
    primary: "teal",
    secondary: "#6C757D",
    // Agrega más colores personalizados según tus necesidades
  },
  fonts: {
    heading: `'M PLUS Rounded 1c', sans-serif`,
    body: `'Lato', sans-serif`
    // Agrega más fuentes personalizadas según tus necesidades
  },
  styles: {
    global: {
      body: {
          bg: '#202024',
          color: 'white'
      },
    }
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "bold",
      },
    },
    Text: {
      baseStyle: {
        fontWeight: "normal",
      },
    },
  },
  // Agrega más estilos personalizados según tus necesidades
});

export default theme;
