import { Flex, Grid } from "@chakra-ui/react";

import ProjectCard from "lib/components/home/RepoCard";
import Title from "lib/components/home/Title";

import type { HomePageProps } from "./types";

const HomePage = ({ data }: HomePageProps) => {
  return (
    <Flex direction="column" alignItems="center" width="full" gridGap={8}>
      <Title />
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={{ base: 6, md: 8, lg: 12 }}
      >
        {data.map((project) => (
          <ProjectCard data={project} />
        ))}
      </Grid>
    </Flex>
  );
};

export default HomePage;
