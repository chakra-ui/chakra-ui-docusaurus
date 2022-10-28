import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { usePrismTheme } from '@docusaurus/theme-common';
import styles from './styles.module.css';
import { chakra, ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@emotion/react';
import weakMemoize from '@emotion/weak-memoize';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import createCache from '@emotion/cache';
import { theme } from '../chakra-theme';

function Header({ children }: { children: React.ReactNode }) {
  return <div className={clsx(styles.playgroundHeader)}>{children}</div>;
}

function Result() {
  return (
    <>
      <chakra.div className={styles.playgroundPreview}>
        <LivePreview />
        <LiveError />
      </chakra.div>
    </>
  );
}

function ThemedLiveEditor({ title }) {
  const isBrowser = useIsBrowser();
  return (
    <>
      {title && <Header>{title}</Header>}
      <LiveEditor
        // We force remount the editor on hydration,
        // otherwise dark prism theme is not applied
        key={String(isBrowser)}
        className={styles.playgroundEditor}
      />
    </>
  );
}

export default function Playground({ children, transformCode, ...props }) {
  const prismTheme = usePrismTheme();

  // const isNotLive = props.metastring.includes('') || props.metastring.indexOf('live') === -1;
  const { title } = props;

  return (
    <div className={styles.playgroundContainer}>
      <LiveProvider
        code={children.trim()}
        transformCode={transformCode ?? ((code) => code.trim())}
        theme={prismTheme}
        {...props}
      >
        <>
          <ChakraIFrameProvider>
            <Result />
          </ChakraIFrameProvider>
          <ThemedLiveEditor
            // isLive={!isNotLive}
            title={title?.replaceAll('"', '')}
          />
        </>
      </LiveProvider>
    </div>
  );
}

const memoizedCreateCacheWithContainer = weakMemoize((container: HTMLElement) =>
  createCache({ container, key: 'showcase' })
);

export const ChakraIFrameProvider = ({ children }) => {
  return (
    <Frame width='100%'>
      <FrameContextConsumer>
        {({ document }) => {
          return document ? (
            <CacheProvider
              value={memoizedCreateCacheWithContainer(document.head)}
            >
              <ChakraProvider theme={theme}>{children}</ChakraProvider>
            </CacheProvider>
          ) : null;
        }}
      </FrameContextConsumer>
    </Frame>
  );
};
