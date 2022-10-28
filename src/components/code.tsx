import { css } from '../../design-system/css';
import { chakra, HTMLChakraProps } from '../../design-system/jsx';

export const InlineCode = (props: HTMLChakraProps<'code'>) => {
  return (
    <chakra.code
      borderRadius='sm'
      px='1'
      fontSize='0.875em'
      py='2px'
      lineHeight='normal'
      border='none'
      background='none'
      color={{ base: 'purple.500', dark: 'purple.200' }}
      {...props}
    />
  );
};
