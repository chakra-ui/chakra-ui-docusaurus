import { chakra } from '../../design-system/jsx';

export const CourseBanner = ({
  image,
  title,
  href,
}: {
  image: string;
  title: string;
  href: string;
}) => (
  <chakra.a
    border='1px solid'
    borderColor={{ base: 'gray.200', dark: 'gray.700' }}
    target='_blank'
    transition='box-shadow 0.1s ease-out'
    href={href}
    borderRadius='lg'
    overflow='hidden'
    lineHeight='0px'
    hover={{ boxShadow: 'lg', textDecoration: 'none!' }}
  >
    <chakra.img src={image} alt={title} objectFit='contain' />
    <chakra.div py='3' px='4'>
      <chakra.h3
        margin='0!'
        color={{ base: 'black', dark: 'white' }}
        fontSize='medium'
        fontWeight='semibold'
      >
        {title}
      </chakra.h3>
    </chakra.div>
  </chakra.a>
);

export const FeaturesCourses = () => (
  <chakra.div
    display='grid'
    mt='10'
    gridTemplateColumns={{ base: '1', md: '2' }}
    gap={{ base: '4', md: '8' }}
  >
    <CourseBanner
      image='/img/course-banners/egghead-course.png'
      title='Egghead Course'
      href='https://egghead.io/courses/build-a-modern-user-interface-with-chakra-ui-fac68106'
    />
    <CourseBanner
      image='/img/course-banners/chakra-ui-for-beginners.png'
      title='Chakra UI for beginners'
      href='https://www.chakrauiforbeginners.com/'
    />
  </chakra.div>
);
