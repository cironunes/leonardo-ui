'use client';

import { CacheProvider } from '@chakra-ui/next-js';

import { ApolloWrapper } from '~/lib/components/Apollo';
import { Chakra as ChakraProvider } from '~/lib/components/Chakra';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloWrapper>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </ApolloWrapper>
  );
};

export default Providers;
