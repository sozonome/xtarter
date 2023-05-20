import { Box, Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box transition="0.5s ease-out" position="relative">
      <Header />
      <Flex
        direction="column"
        maxWidth={1200}
        marginX="auto"
        paddingX={8}
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
};

export default Layout;
