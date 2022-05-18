import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      alignItems="center"
      justifyContent="center"
      paddingY={8}
      marginX="auto"
    >
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="https://sznm.dev" isExternal rel="noopener noreferrer">
          sznm.dev
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
