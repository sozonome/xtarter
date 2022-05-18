import { Box, Heading, Text } from "@chakra-ui/react";

const Title = () => {
  return (
    <Box>
      <Heading
        display="flex"
        bgGradient="linear(to-br, red.300, orange.800)"
        bgClip="text"
      >
        xtarter
      </Heading>
      <Text fontSize="sm" color="gray">
        starter templates - start develop right away!
      </Text>
    </Box>
  );
};

export default Title;
