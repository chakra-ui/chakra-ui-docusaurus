import {
  BlitzSvg,
  CreateReactAppSvg,
  GatsbySvg,
  MeteorSvg,
  NextjsSvg,
  RedwoodSvg,
  RemixSvg,
  ViteSvg,
} from './framework-svg';
import { css, cssMap, cx } from '../../design-system/css';
import { chakra } from '../../design-system/jsx';

const accents = cssMap({
  'Create React App': {
    background: '#0AC09D',
  },
  'Next.js': {
    background: 'black',
  },
  Gatsby: {
    background: '#663399',
  },
  RedwoodJS: {
    background: '#BF4722',
  },
  BlitzJS: {
    background: '#6700EB',
  },
  Meteor: {
    background: '#FF6A3E',
  },
  Remix: {
    background: '#121212',
  },
  Vite: {
    background: '#C07600',
  },
});

const FrameworkLink = (props) => {
  const { accentColor, href, children, name } = props;
  return (
    <a
      className={css({
        bg: 'white',
        display: 'block',
        shadow: 'md',
        textDecoration: 'none',
        borderRadius: 'xl',
        overflow: 'hidden',
        transform: 'auto',
        transition: 'all 0.1s ease-in-out',
        hover: {
          textDecoration: 'none',
          translateY: '-4px',
          shadow: 'md',
        },
      })}
      href={href}
    >
      <div
        className={css({
          pt: '4',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        })}
      >
        {children}
        <div
          className={cx(
            css({
              mt: '4',
              py: '1',
              color: 'white',
              width: 'full',
            }),
            accents(name)
          )}
        >
          <chakra.p textAlign='center' fontSize='sm' fontWeight='bold' mb='0'>
            {name}
          </chakra.p>
        </div>
      </div>
    </a>
  );
};

export const FrameworkLinks = () => {
  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        mt: '12',
        gap: '40px',
        fontSize: '6xl',
      })}
    >
      <FrameworkLink href='/getting-started/cra-guide' name='Create React App'>
        <CreateReactAppSvg style={{ margin: 'auto' }} />
      </FrameworkLink>

      <FrameworkLink href='/getting-started/nextjs-guide' name='Next.js'>
        <NextjsSvg style={{ margin: 'auto' }} />
      </FrameworkLink>

      <FrameworkLink href='/getting-started/gatsby-guide' name='Gatsby'>
        <GatsbySvg style={{ margin: 'auto' }} />
      </FrameworkLink>

      <FrameworkLink href='/getting-started/blitzjs-guide' name='BlitzJS'>
        <BlitzSvg style={{ margin: 'auto' }} />
      </FrameworkLink>

      <FrameworkLink href='/getting-started/redwoodjs-guide' name='RedwoodJS'>
        <RedwoodSvg style={{ margin: 'auto' }} />
      </FrameworkLink>

      <FrameworkLink href='/getting-started/remix-guide' name='Remix'>
        <RemixSvg style={{ margin: 'auto' }} />
      </FrameworkLink>

      <FrameworkLink href='/getting-started/vite-guide' name='Vite'>
        <ViteSvg style={{ margin: 'auto' }} />
      </FrameworkLink>

      <FrameworkLink href='/getting-started/meteor-guide' name='Meteor'>
        <MeteorSvg style={{ margin: 'auto' }} />
      </FrameworkLink>
    </div>
  );
};
