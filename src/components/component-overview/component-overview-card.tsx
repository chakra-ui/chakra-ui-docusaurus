import { css } from "../../../design-system/css"
import { chakra } from '../../../design-system/jsx'

type Props = {
  url: string
  title: string
  slug: string
  imageUrl: string
}

const ComponentOverviewCard = ({ url, title, imageUrl }: Props) => {
  return (
    <a
      role="group"
      href={url}
      className={css({
        textDecoration: 'none !important'
      })}
    >
      <chakra.div
        height="full"
        borderRadius="lg"
        borderColor={{ base: 'gray.200', dark: 'gray.700' }}
        borderWidth="1px"
        borderStyle="solid"
        overflow="hidden"
        transition='box-shadow 0.1s ease-out'
        role="group"
        color={{
          base: 'black',
          dark: 'white'
        }}
        background={{ base: 'inherit', dark: 'rgba(255, 255, 255, 0.04)' }}
        shadow={{
          base: 'none',
          hover: 'md',
        }}>
        <chakra.div display="flex" overflow="hidden" bg="gray.100">
          <chakra.img
            src={imageUrl}
            width='full'
            objectFit="cover"
            alt={title}
          />
        </chakra.div>
        <chakra.p fontSize="md" fontWeight="semibold" px='1rem' py='0.75rem' margin='0 !important'>
          {title}
        </chakra.p>
      </chakra.div>
    </a>
  )
}

export default ComponentOverviewCard;