import { Box, keyframes, Text } from '@chakra-ui/react';

// Definir las animaciones keyframes
const marqueeAnimation = keyframes`
  0% { transform: translateX(100vh); }  /* Iniciar justo fuera de la vista a la derecha */
  100% { transform: translateX(-100vh); }  /* Moverse hasta quedar fuera de la vista a la izquierda */
`;

function MarqueeText() {
  return (
    <Box bg="#FCD144" w="100%" p={1} color="black" textAlign={'center'} overflow="hidden" position="relative" height="50px">
      <Text
        as="p"
        fontWeight={'600'}
        position="absolute"
        whiteSpace="nowrap"
        animation={`${marqueeAnimation} 15s linear infinite`}
        width="max-content"  /* Asegura que el texto tenga suficiente ancho como para no interrumpir la animación */
      >
        If there is no struggle, there is no progress
      </Text>
    </Box>
  );
}

export default MarqueeText;
