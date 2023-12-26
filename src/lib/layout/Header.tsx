import { Link } from '@chakra-ui/next-js';
import { Flex, Stack } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  const searchParams = useSearchParams();
  return (
    <Flex as="header" width="full" align="center">
      <Stack marginLeft="auto" gap={2} direction="row" alignItems="center">
        <Link href={`/?${searchParams}`}>Home</Link>
        <Link href={`/info?${searchParams}`}>Info</Link>
        <ThemeToggle />
      </Stack>
    </Flex>
  );
};

export default Header;
