import React from 'react';
import { Box } from "@chakra-ui/react";
import { SandpackCodeEditor, SandpackLayout, SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";
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
    <SandpackProvider
      template="react-ts"
      files={files}
      theme={colorMode === 'dark' ? 'dark' : 'light'}
      customSetup={{
        dependencies: {
          '@chakra-ui/react': 'latest',
          '@emotion/styled': 'latest',
          'framer-motion': 'latest',
          '@emotion/react': 'latest',
          ...dependencies
        },
      }}
    >
      <Box
        as={SandpackLayout}
        sx={{
          '--sp-layout-height': 'auto',
        }}
      >
        <SandpackCodeEditor
          showLineNumbers
          style={{
            maxHeight: '500px',
            minWidth: '400px',
          }}
        />
        <Box
          as={SandpackPreview}
          minHeight='350px'
        />
      </Box>
    </SandpackProvider>
  );
};

export default SandpackEditor;