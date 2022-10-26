import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { useColorMode } from '@docusaurus/theme-common';
import { createFileMap } from "./createFileMap";

const SandpackEditor = ({
  children,
  dependencies = {},
}: {
  children: JSX.Element;
  dependencies: { [key: string]: string };
}) => {
  const files = createFileMap(children);

  const { colorMode } = useColorMode();

  return (
    <Sandpack
      template="react-ts"
      files={files}
      theme={colorMode === "dark" ? "dark" : "light"}
      options={{
        showNavigator: true,
      }}
      customSetup={{
        dependencies,
      }}
    />
  );
};

export default SandpackEditor;