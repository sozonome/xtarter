import {
  Flex,
  Heading,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

import type { Repo } from "lib/types/repo";
import { filterTopics } from "lib/utils/filterTopics";
import { trackEvent } from "lib/utils/trackEvent";

type RepoCardProps = {
  data: Repo;
};

const RepoCard = ({
  data: { name, description, homepage, stargazers_count, topics },
}: RepoCardProps) => {
  const hoverGradient = useColorModeValue(
    "linear(to-br, orange.50, pink.100)",
    "linear(to-br, orange.600, pink.800)"
  );
  const descriptionColor = useColorModeValue("gray.700", "gray.200");
  const titleLineBg = useColorModeValue(
    "linear-gradient(#fff, #fff),linear-gradient(90deg,#e4a666,#e4a666)",
    "linear-gradient(#1A202C, #1A202C),linear-gradient(90deg,#eedd88,#e4a666)"
  );
  const borderColor = useColorModeValue("orange.300", "orange.800");

  const handleClick = () => {
    trackEvent({
      eventValue: `Click ${name}`,
      eventType: "link",
    });
  };

  return (
    <LinkBox
      display="flex"
      gap={2}
      flexDirection="column"
      justifyContent="space-between"
      borderWidth={4}
      borderColor="transparent"
      borderLeftColor={borderColor}
      padding={4}
      transition="0.2s ease-out"
      _hover={{
        borderColor: "orange.400",
        borderRadius: 24,
        bgGradient: hoverGradient,
      }}
      onClick={handleClick}
      role="group"
    >
      <Heading fontSize="xl" minHeight={12}>
        <LinkOverlay
          href={homepage}
          isExternal
          transition="0.5s ease"
          backgroundImage={titleLineBg}
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
      <Text
        fontSize="sm"
        color="gray"
        _groupHover={{
          color: descriptionColor,
        }}
      >
        {description}
      </Text>

      <Flex gap={2} opacity={0.7} wrap="wrap">
        {filterTopics(topics)
          .sort()
          .map((topic) => (
            <Tag
              fontSize="xs"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              overflow="hidden"
              colorScheme="orange"
            >
              {topic}
            </Tag>
          ))}
      </Flex>

      <HStack fontSize="sm">
        <Icon as={FaStar} _groupHover={{ color: "orange" }} />
        <Text>{stargazers_count}</Text>
      </HStack>
    </LinkBox>
  );
};

export default RepoCard;
