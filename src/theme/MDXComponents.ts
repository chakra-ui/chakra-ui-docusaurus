import { FrameworkLinks } from "../components/framework-link";
import MDXComponents from "@theme-original/MDXComponents";
import SandpackEditor from "@site/src/components/SandpackEditor/SandpackEditor";

export default {
  ...MDXComponents,
  SandpackEditor: SandpackEditor,
  FrameworkLinks,
};
