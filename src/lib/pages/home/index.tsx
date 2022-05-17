import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex
      alignItems="center"
      minHeight="70vh"
      gap={8}
      mb={8}
      w="full"
      justifyContent="center"
    >
      <Box>
        <Heading
          display="flex"
          bgGradient="linear(to-br, orange.400, red.900)"
          bgClip="text"
        >
          xtarter
        </Heading>
        <Text fontSize="sm" color="gray">
          starter templates - start develop right away!
        </Text>
      </Box>
    </Flex>
  );
};

export default Home;
