import { Button, Flex, Link, Grid } from "@chakra-ui/react";
import * as React from "react";

import ProjectCard from "lib/components/home/RepoCard";
import Title from "lib/components/home/Title";
import { trackEvent } from "lib/utils/trackEvent";

import type { HomePageProps } from "./types";

const HomePage = ({ data }: HomePageProps) => {
  const [showAll, setShowAll] = React.useState<boolean>(false);
  const filteredData = React.useMemo(() => {
    if (showAll) {
      return data;
    }
    return data.slice(0, 6);
  }, [data, showAll]);

  const handleLoadMore = () => {
    trackEvent({
      eventValue: showAll ? "Click Hide" : "Click Load More",
      eventType: "CTA",
    });
    setShowAll(!showAll);
  };

  const handleClickDocumentation = () => {
    trackEvent({
      eventValue: "Open Documentation",
      eventType: "link",
    });
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      width="full"
      gridGap={12}
      marginTop={16}
    >
      <Title />

      <Flex>
        <Button
          size="sm"
          as={Link}
          colorScheme="orange"
          href="https://docs.sznm.dev/v/starter-templates"
          isExternal
          onClick={handleClickDocumentation}
        >
          Documentation [WIP]
        </Button>
      </Flex>

      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={{ base: 6, md: 8, lg: 12 }}
      >
        {filteredData.map((project) => (
          <ProjectCard data={project} />
        ))}
      </Grid>

      <Button colorScheme="gray" size="sm" onClick={handleLoadMore}>
        {showAll ? "Hide" : "Show All"}
      </Button>
    </Flex>
  );
};

export default HomePage;
