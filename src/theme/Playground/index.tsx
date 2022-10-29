import useIsBrowser from "@docusaurus/useIsBrowser";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { usePrismTheme } from "@docusaurus/theme-common";
import styles from "./styles.module.css";
import { chakra } from "@chakra-ui/react";
import { ChakraIFrameProvider } from "../../components/ChakraIFrameProvider";

function Header({ children }: { children: React.ReactNode }) {
  return <div className={styles.playgroundHeader}>{children}</div>;
}

function Result() {
  return (
    <chakra.div
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding="1rem"
    >
      <LivePreview />
      <LiveError />
    </chakra.div>
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

const getSize = (sm?: boolean, md?: boolean, lg?: boolean) => {
  switch (true) {
    case sm:
      return "75px";
    case lg:
      return "250px";
    case md:
    default:
      return "150px";
  }
};

export default function Playground({ children, transformCode, ...props }) {
  const prismTheme = usePrismTheme();

  const { title, sm, md, lg } = props;

  return (
    <div className={styles.playgroundContainer}>
      <LiveProvider
        code={children.trim()}
        transformCode={transformCode ?? ((code) => code.trim())}
        theme={prismTheme}
        {...props}
      >
        <ChakraIFrameProvider size={getSize(sm, md, lg)}>
          <Result />
        </ChakraIFrameProvider>
        <ThemedLiveEditor title={title?.replaceAll('"', "")} />
      </LiveProvider>
    </div>
  );
}
