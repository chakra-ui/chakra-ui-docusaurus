import { chakra } from '../../../design-system/jsx';

export const OrganizationSponsors = () => (
  <chakra.div display='flex' flexWrap='wrap' gap='4'>
    {new Array(9).fill('').map((_, idx) => (
      <chakra.a
        key={idx}
        href={`https://opencollective.com/chakra-ui/organization/${idx}/website`}
      >
        <img
          alt='Open collective Organizations'
          src={`https://opencollective.com/chakra-ui/organization/${idx}/avatar.svg?avatarHeight=130`}
        />
      </chakra.a>
    ))}
  </chakra.div>
);

export const IndividualSponsors = () => (
  <a href='https://opencollective.com/chakra-ui'>
    <img
      alt='Open collective Individuals'
      src='https://opencollective.com/chakra-ui/individuals.svg?width=890'
    />
  </a>
);
