import { Box, Flex } from "@chakra-ui/react";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      position="sticky"
      top="0"
      padding={8}
    >
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
