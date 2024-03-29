import { Box, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Footer = () => {
  return (
    <Box textAlign={'center'} w="full" p={6}>      
      <Text>
        <Link href={"https://twitter.com/0xmetazen"} isExternal alignItems={'center'}>
          Buidler <ExternalLinkIcon />
        </Link>
        {'  |  '}
        <Link href={"https://github.com/syslink/xen-contracts.git"} isExternal alignItems={'center'}>
          Github <ExternalLinkIcon />
        </Link>
        {'  |  '}
        <Link href={"https://bridge.arbitrum.io/"} isExternal alignItems={'center'}>
        Arbitrum Bridge <ExternalLinkIcon />
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
