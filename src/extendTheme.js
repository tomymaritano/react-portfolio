// extendTheme.js

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "teal",
    secondary: "#6C757D",
    // Agrega más colores personalizados según tus necesidades
  },
  fonts: {
    body: "Raleway', sans-serif",
    heading: "M PLUS Rounded 1c', sans-serif",
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
