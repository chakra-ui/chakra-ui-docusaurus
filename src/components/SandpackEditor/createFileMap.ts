import type { SandpackFile } from "@codesandbox/sandpack-react";
import React from "react";

export const createFileMap = (
  children: JSX.Element
): Record<string, SandpackFile> => {
  // convert the children to an array
  let codeSnippets = React.Children.toArray(children) as React.ReactElement[];

  // using the array.reduce method to reduce the children to an object containing
  // filename as key then other properties like the code, if the file is hidden as
  // properties
  return codeSnippets.reduce(
    (result: Record<string, SandpackFile>, codeSnippet: React.ReactElement) => {
      if (codeSnippet.props.mdxType !== "pre") {
        return result;
      }
      const { props } = codeSnippet.props.children;
      let filePath; // path in the folder structure
      let fileHidden = false; // if the file is available as a tab
      let fileActive = false; // if the file tab is shown by default

      if (props.metastring) {
        // get our metadata from the prop
        const [name, ...params] = props.metastring.split(" ");
        filePath = "/" + name;
        if (params.includes("hidden")) {
          fileHidden = true;
        }
        if (params.includes("active")) {
          fileActive = true;
        }
      } else {
        // if no name is given to the file, we give them defaults based on the language
        // (<Sandpack /> has a default file it will look for if none given in `files` prop)
        if (props.className === "language-js") {
          filePath = "/App.js";
        } else if (props.className === "language-ts") {
          filePath = "/App.tsx";
        } else if (props.className === "language-tsx") {
          filePath = "/App.tsx";
        } else if (props.className === "language-css") {
          filePath = "/styles.css";
        } else {
          throw new Error(
            `Code block is missing a filename: ${props.children}`
          );
        }
      }
      if (result[filePath]) {
        throw new Error(
          `File ${filePath} was defined multiple times. Each file snippet should have a unique path name`
        );
      }
      result[filePath] = {
        code: props.children as string,
        hidden: fileHidden,
        active: fileActive,
      };

      return result;
    },
    {}
  );
};