import { ChakraProvider, ColorMode, theme } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import weakMemoize from "@emotion/weak-memoize";
import Frame, { FrameContextConsumer } from "react-frame-component";
import { useColorMode } from "@docusaurus/theme-common";

const memoizedCreateCacheWithContainer = weakMemoize((container: HTMLElement) =>
  createCache({ container, key: "showcase" })
);

export const ChakraIFrameProvider = ({ children }) => {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Frame width="100%">
      <FrameContextConsumer>
        {({ document }) => {
          return document ? (
            <CacheProvider
              value={memoizedCreateCacheWithContainer(document.head)}
            >
              <ChakraProvider
                theme={theme}
                colorModeManager={{
                  type: "localStorage",
                  get: () => colorMode,
                  set: (newColorMode) =>
                    setColorMode(newColorMode as ColorMode),
                }}
              >
                {children}
              </ChakraProvider>
            </CacheProvider>
          ) : null;
        }}
      </FrameContextConsumer>
    </Frame>
  );
};
