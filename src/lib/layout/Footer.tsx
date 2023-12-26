import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        {new Date().getFullYear()} -{' '}
        <Link
          href="https://github.com/cironunes"
          isExternal
          rel="noopener noreferrer"
        >
          Built with love by Ciro Nunes for Leonardo.Ai
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
