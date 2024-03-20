import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    // Aquí puedes definir colores personalizados que puedes reutilizar en toda tu aplicación
  },
  config: {
    initialColorMode: 'light', // Modo inicial
    useSystemColorMode: true, // Esto permite a la aplicación respetar la preferencia del sistema del usuario para el modo de color
  },
  components: {
    Button: {
      // Estilos base para el componente Button, adaptados al modo de color
      baseStyle: ({ colorMode }) => ({
        bg: colorMode === 'light' ? 'rgb(32, 32, 36)' : 'white', // Fondo oscuro para modo claro, claro para modo oscuro
        color: colorMode === 'dark' ? 'white' : 'black', // Texto claro para modo oscuro, oscuro para modo claro
      }),
    },
    Tag: {
      // Estilos base para el componente Tag, adaptados al modo de color
      baseStyle: ({ colorMode }) => ({
        container: {
          bg: colorMode === 'dark' ? 'gray.700' : 'gray.100', // Fondo más oscuro en modo oscuro, más claro en modo claro
          color: colorMode === 'dark' ? 'gray.100' : 'white', // Texto más claro en modo oscuro, más oscuro en modo claro
        },
      }),
    },
    // Aquí puedes seguir extendiendo otros componentes según necesites
  },
});

export default theme;
