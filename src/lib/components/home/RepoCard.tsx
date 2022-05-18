import {
  Flex,
  Heading,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

import type { Repo } from "lib/types/repo";

type RepoCardProps = {
  data: Repo;
};

const RepoCard = ({
  data: { name, description, homepage, stargazers_count },
}: RepoCardProps) => {
  const hoverGradient = useColorModeValue(
    "linear(to-br, orange.50, pink.100)",
    "linear(to-br, orange.600, pink.800)"
  );

  return (
    <LinkBox
      display="flex"
      gap={2}
      flexDirection="column"
      justifyContent="space-between"
      borderLeftWidth={4}
      padding={4}
      minHeight={32}
      transition="0.2s ease-out"
      _hover={{
        borderColor: "orange.400",
        borderRadius: 24,
        borderBottomWidth: 4,
        borderRightWidth: 4,
        borderLeftWidth: 0,
        bgGradient: hoverGradient,
      }}
      role="group"
    >
      <Heading fontSize="xl" minHeight={12}>
        <LinkOverlay
          href={homepage}
          isExternal
          transition="0.5s ease"
          backgroundImage="linear-gradient(#fff, #fff),linear-gradient(90deg,#88ddee,#66a6e4)"
          backgroundSize="100% 2px, 0 2px"
          backgroundPosition="100% 100%, 0 100%"
          backgroundRepeat="no-repeat"
          _groupHover={{
            backgroundSize: "0 2px, 100% 2px",
          }}
        >
          {name}
        </LinkOverlay>
      </Heading>
      <Text fontSize="sm" color="gray">
        {description}
      </Text>
      <Flex>
        <HStack fontSize="sm">
          <Icon as={FaStar} _groupHover={{ color: "orange" }} />
          <Text>{stargazers_count}</Text>
        </HStack>
      </Flex>
    </LinkBox>
  );
};

export default RepoCard;
