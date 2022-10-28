import { chakra } from '../../../design-system/jsx';
import coreMembers from './all-members.json';
import formerMembers from './all-former-members.json';
import { MemberCard, FormerMemberCard } from './member-card';

export const FormerCoreTeam = () => (
  <chakra.div
    display='grid'
    columnGap='6'
    gridTemplateColumns={{ base: '2', md: '6' }}
  >
    {formerMembers.members.map((member) => (
      <FormerMemberCard key={member.githubName} formerMember={member} />
    ))}
  </chakra.div>
);

export const CoreTeam = () => (
  <chakra.div
    display='grid'
    gridTemplateColumns={{ base: '1', sm: '2' }}
    gap='6'
  >
    {coreMembers.members.map((member) => (
      <MemberCard key={member.name} {...member} />
    ))}
  </chakra.div>
);
