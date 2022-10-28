import { chakra } from '../../../design-system/jsx';

export const ShowcaseItem = ({ name, image, url }) => (
  <chakra.div
    display='flex'
    flexDirection='column'
    key={url}
    alignItems='flex-start'
    rowGap='3'
  >
    <chakra.a
      href={url}
      target='_blank'
      w='full'
      border='1px solid'
      borderColor={{ base: 'gray.200', dark: 'gray.700' }}
      transform='auto'
      background={{ base: 'inherit', dark: 'whiteAlpha.50' }}
      hover={{ boxShadow: 'md', translateY: '-2px' }}
      borderRadius='md'
      overflow='hidden'
      transition='all 0.1s ease-out'
      lineHeight='0px'
    >
      <chakra.img
        alt={name}
        objectFit='cover'
        src={
          image
            ? /^(https|http)/.test(image)
              ? image
              : `/${image}`
            : '/og-image.png'
        }
      />
      <chakra.div paddingY='2'>
        <chakra.p
          paddingX='4'
          paddingY='4'
          margin='0'
          fontWeight='semibold'
          textAlign='start'
          color={{ base: 'gray.800', dark: 'white' }}
          fontSize={{ base: 'sm', md: 'md' }}
        >
          {name}
        </chakra.p>
      </chakra.div>
    </chakra.a>
  </chakra.div>
);
