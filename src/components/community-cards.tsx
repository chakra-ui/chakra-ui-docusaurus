import { FaDiscord, FaTwitter } from 'react-icons/fa';

import { cssMap } from '../../design-system/css';
import { chakra } from '../../design-system/jsx';

const accentColors = cssMap({
  twitter: {
    color: 'twitter',
  },
  discord: {
    color: 'discord',
  },
});

function CommunityCardItem({ children, platform, icon, href }) {
  return (
    <chakra.a
      display='flex'
      href={href}
      justifyContent='center'
      columnGap='5'
      border='1px solid'
      borderColor={{ base: 'gray.200', dark: 'gray.700' }}
      py='3'
      px='4'
      borderRadius='lg'
      hover={{ textDecoration: 'none!' }}
    >
      <chakra.span
        width='6'
        height='6'
        fontSize='xl'
        className={accentColors(platform)}
      >
        {icon}
      </chakra.span>
      <chakra.p
        fontWeight='semibold'
        color={{ base: 'gray.700', dark: 'white' }}
        margin='0!'
      >
        {children}
      </chakra.p>
    </chakra.a>
  );
}

export function JoinCommunityCards() {
  return (
    <chakra.div
      display='grid'
      mt='8'
      gridTemplateColumns={{ base: '1', md: '2' }}
      gap='4'
    >
      <CommunityCardItem
        platform='discord'
        icon={<FaDiscord />}
        href='https://chakra-ui.com/discord'
      >
        Join the Discord
      </CommunityCardItem>
      <CommunityCardItem
        platform='twitter'
        icon={<FaTwitter />}
        href='https://twitter.com/chakra_ui'
      >
        Follow us on Twitter
      </CommunityCardItem>
    </chakra.div>
  );
}
