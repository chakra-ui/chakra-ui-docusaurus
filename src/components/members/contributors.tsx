import members from './all-members.json';
import contributors from './all-contributors.json';
import { chakra } from '../../../design-system/jsx';

export const Contributors = () => {
  const memberLogins = members.members.map(({ login }) => login);
  const contributorsWithoutTeam = contributors.contributors.filter(
    ({ login }) => !memberLogins.includes(login)
  );
  return (
    <chakra.div display='flex' flexWrap='wrap' gap='2'>
      {contributorsWithoutTeam.map((contributor) => (
        <chakra.img
          key={contributor.login}
          width='48px'
          height='48px'
          src={contributor.avatar_url}
          alt={contributor.name}
          borderRadius='full'
        />
      ))}
    </chakra.div>
  );
};
