import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        // Establece 'Roboto Mono' como la fuente para textos y encabezados
        heading: `'Roboto Mono', monospace`,
        body: `'Roboto Mono', monospace`,
      },
      
});

export default theme;
