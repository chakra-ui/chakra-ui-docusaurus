import { defineConfig } from 'css-panda';
import {
  utilities,
  breakpoints,
  conditions,
  keyframes,
  tokens,
  patterns,
} from 'css-panda/presets';
import { colors } from './src/panda/tokens/colors';

export default defineConfig({
  // whether to use css reset
  preflight: false,
  // where to look for your css declarations
  include: ['./src/**/*.{tsx,jsx}'],
  // files to exclude
  exclude: [],
  // The output directory for system
  outdir: 'design-system',
  jsxFramework: 'react',
  jsxFactory: 'chakra',
  // Add your css conditions here (&:hover, &:focus, etc)
  conditions: {
    ...conditions,
    dark: '[data-theme="dark"] &',
  },
  // Add your tokens here
  tokens,
  // Add your semantic tokens here
  semanticTokens: {
    colors,
  },
  // Add your keyframes here (spin, fade, etc)
  keyframes,
  // Add your breakpoints here (sm, md, lg, xl)
  breakpoints,
  // Add your css property utilities here (mt, ml, etc)
  utilities,
  // Add your css patterns here (stack, grid, etc)
  patterns,
});
