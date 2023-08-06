import { Text } from "@chakra-ui/react";
import { useTypingText } from "./useTypingEffect";

// eslint-disable-next-line no-unused-vars
import style from "./style.css"

const Developer = () => {
  const { word } = useTypingText(
    ["Front end Developer", "Data Analytics", "Startup Creator"],
    50,
    30
  );

  return (
      <Text fontSize={'xl'} fontFamily={'sans-serif'} color={'teal.200'}>{word}</Text>
  );
};

export default Developer;
