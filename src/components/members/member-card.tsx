import type { ReactNode } from 'react';
import { IoIosGlobe, IoLogoGithub, IoLogoTwitter } from 'react-icons/io';

import { chakra } from '../../../design-system/jsx';
import { VisuallyHidden } from '../visually-hidden';

export const FormerMemberCard = ({
  formerMember: { name, githubName },
}: {
  formerMember: { name: string; githubName: string };
}) => (
  <chakra.a
    href={`https://github.com/${githubName}`}
    color={{ base: 'gray.700', dark: 'white' }}
    hover={{ textDecoration: 'none!' }}
  >
    <chakra.div
      display='flex'
      flexDirection='column'
      rowGap='2'
      alignItems='center'
    >
      <chakra.img
        src={`https://github.com/${githubName}.png`}
        width='96px'
        height='96px'
        borderRadius='full'
        alt={name}
      />
      <chakra.p fontSize='md' textAlign='center'>
        {name}
      </chakra.p>
    </chakra.div>
  </chakra.a>
);

const SocialLink = ({
  icon,
  href,
  label,
}: {
  icon: ReactNode;
  href: string;
  label: string;
}) => (
  <chakra.a
    display='inline-flex'
    alignItems='center'
    justifyContent='center'
    borderRadius='full'
    href={href}
    fontSize='xl'
    target='_blank'
  >
    <>
      <VisuallyHidden>{label}</VisuallyHidden>
      {icon}
    </>
  </chakra.a>
);

export const MemberCard = ({
  avatar_url,
  url,
  blog,
  name,
  bio,
  twitter_username,
}) => (
  <chakra.div display='flex' columnGap='6'>
    <chakra.img
      alt={name}
      src={avatar_url}
      width='96px'
      height='96px'
      borderRadius='full'
    />
    <chakra.div display='flex' flexDirection='column' rowGap='3'>
      <chakra.p
        marginBottom='0px'
        color={{ base: 'gray.700', dark: 'white' }}
        fontWeight='bold'
      >
        {name}
      </chakra.p>
      <chakra.div display='flex' columnGap='2'>
        <SocialLink
          href={url}
          label={`View ${name}'s GitHub`}
          icon={<IoLogoGithub />}
        />
        {twitter_username && (
          <SocialLink
            href={`https://twitter.com/${twitter_username}`}
            label={`View ${name}'s Twitter`}
            icon={<IoLogoTwitter />}
          />
        )}
        {blog && (
          <SocialLink
            href={blog}
            label={`View ${name}'s website`}
            icon={<IoIosGlobe />}
          />
        )}
      </chakra.div>
      <chakra.p fontSize='sm' color='fg-muted'>
        {bio}
      </chakra.p>
    </chakra.div>
  </chakra.div>
);
