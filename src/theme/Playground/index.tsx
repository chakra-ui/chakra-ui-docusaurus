import * as React from "react";
import clsx from "clsx";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { usePrismTheme } from "@docusaurus/theme-common";
import styles from "./styles.module.css";
import { chakra, ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import weakMemoize from "@emotion/weak-memoize";
import Frame, { FrameContextConsumer } from "react-frame-component";
import createCache from "@emotion/cache";

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

function ThemedLiveEditor() {
  const isBrowser = useIsBrowser();
  return (
    <LiveEditor
      // We force remount the editor on hydration,
      // otherwise dark prism theme is not applied
      key={String(isBrowser)}
      className={styles.playgroundEditor}
    />
  );
}

export default function Playground({ children, transformCode, ...props }) {
  const prismTheme = usePrismTheme();

  const isNotLive = props.metastring.includes("live=false");
  return (
    <div className={styles.playgroundContainer}>
      <LiveProvider
        code={children}
        transformCode={transformCode ?? ((code) => `${code};`)}
        theme={prismTheme}
        {...props}
      >
        <>
          {!isNotLive && (
            <ChakraIFrameProvider>
              <Result />
            </ChakraIFrameProvider>
          )}
          <ThemedLiveEditor />
        </>
      </LiveProvider>
    </div>
  );
}

const memoizedCreateCacheWithContainer = weakMemoize((container: HTMLElement) =>
  createCache({ container, key: "showcase" })
);

export const ChakraIFrameProvider = ({ children }) => {
  return (
    <Frame width="100%">
      <FrameContextConsumer>
        {({ document }) => {
          return document ? (
            <CacheProvider
              value={memoizedCreateCacheWithContainer(document.head)}
            >
              <ChakraProvider>{children}</ChakraProvider>
            </CacheProvider>
          ) : null;
        }}
      </FrameContextConsumer>
    </Frame>
  );
};
