import { chakra } from '../../../design-system/jsx';
import { ShowcaseItem } from './showcase-item';
import showcase from './showcase.json';

export const ShowcaseGallery = () => {
  return (
    <chakra.div
      display='grid'
      gridTemplateColumns={{ base: '1', xl: '2' }}
      gap='8'
    >
      {showcase.map(({ name, image, url }) => (
        <ShowcaseItem key={url} name={name} image={image} url={url} />
      ))}
    </chakra.div>
  );
};
