import { Box } from '@chakra-ui/react';
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider
} from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';

import { createFileMap } from './createFileMap';

type Props = {
  children: JSX.Element;
  dependencies: Record<string, string>;
  isHorizontal: boolean;
};

const SandpackEditor = ({
  children,
  dependencies = {},
  isHorizontal = false,
}: Props) => {
  const files = createFileMap(children);

  return (
    <SandpackProvider
      template='react-ts'
      files={files}
      theme={nightOwl}
      customSetup={{
        dependencies: {
          '@chakra-ui/react': 'latest',
          '@chakra-ui/icons': 'latest',
          '@chakra-ui/anatomy': 'latest',
          '@chakra-ui/styled-system': 'latest',
          '@emotion/styled': 'latest',
          '@emotion/react': 'latest',
          'framer-motion': 'latest',
          'react-icons': 'latest',
          ...dependencies,
        },
      }}
    >
      <Box
        as={SandpackLayout}
        sx={{
          '--sp-layout-height': 'auto',
        }}
        style={{ flexDirection: isHorizontal ? 'row' : 'column-reverse' }}
      >
        <SandpackCodeEditor
          showLineNumbers
          style={{
            maxHeight: isHorizontal ? '600px' : '500px',
            minWidth: '400px',
          }}
        />
        <Box as={SandpackPreview} minHeight='350px' />
      </Box>
    </SandpackProvider>
  );
};

export default SandpackEditor;
