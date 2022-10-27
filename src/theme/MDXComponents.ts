import { FrameworkLinks } from "../components/framework-link";
import MDXComponents from "@theme-original/MDXComponents";
import SandpackEditor from "../components/SandpackEditor/SandpackEditor";
import { PropsTable } from "../components/PropsTable/props-table";
import { Button } from "./button";

export default {
  ...MDXComponents,
  SandpackEditor: SandpackEditor,
  FrameworkLinks,
  PropsTable,
  Button,
};
