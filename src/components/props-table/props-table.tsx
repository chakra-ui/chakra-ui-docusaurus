import * as React from "react";
import * as ComponentProps from "@chakra-ui/props-docs";
import { theme } from "@chakra-ui/react";
import { isObject, isString } from "@chakra-ui/utils";

import { css } from "../../../design-system/css";
import { chakra } from "../../../design-system/jsx";
import MDXComponents from "../../theme/MDXComponents";
import { convertBackticksToInlineCode } from "./convert-backticks-to-inline-code";
import { InlineCode } from "../code";

/**
 * A map of components that use foreign theme key.
 * The key is name of the component and value is the theme key it uses.
 */
const themeComponentKeyAliases = {
  AlertDialog: "Modal",
  IconButton: "Button",
};

export type PropsTableProps = {
  /**
   * displayName of the target component
   */
  of: keyof typeof ComponentProps;
  /**
   * prop names to omit
   */
  omit?: string[] | null;
  /**
   * Render only given prop names
   * Has precedence over `omit`
   */
  only?: string[] | null;
};

const rowStyles = css({
  minWidth: "100",
  width: {
    base: "35%",
    md: "20%",
  },
  fontSize: "0.9em",
  textAlign: "start",
  fontWeight: "500",
  padding: "4px 16px 4px 16px",
  whiteSpace: "nowrap",
  verticalAlign: "baseline",
});

const cellStyles = css({
  padding: "4px 0px 4px 8px",
  width: "100%",
});

export const PropsTable = ({
  of,
  omit = ["layerStyle", "noOfLines", "textStyle", "orientation", "styleConfig"],
  only,
}: PropsTableProps) => {
  const propList = React.useMemo(
    () => makePropsTable({ of, omit, only }),
    [of, omit, only]
  );

  if (!propList.length) {
    // this error breaks the build to notify you when there would be an empty table
    throw new Error(
      `No props left to render for component ${of}.
Remove the use of <PropsTable of="${of}" /> for this component in the docs.`
    );
  }

  return (
    <chakra.div
      display="flex"
      flexDirection="column"
      overflowX="auto"
      gap="16"
      my="10"
    >
      {propList.map((prop) => (
        <chakra.div
          key={prop.name}
          width="full"
          fontSize="0.95em"
          borderCollapse="collapse"
        >
          <chakra.div
            textAlign="start"
            fontSize="1em"
            paddingBottom="4"
            marginBottom="2"
            borderBottom="1px solid"
            borderBottomColor={{ base: "gray.100", dark: "gray.700" }}
          >
            <chakra.h3
              fontSize="0.8em"
              marginBottom="16"
              margin="0"
              padding="0"
            >
              <chakra.div display="flex" gap="1">
                {/* TODO: Figure out how to generate static css using style props */}
                <InlineCode
                  className={css({
                    background: { base: "purple.100 !important", dark: "rgba(214, 188, 250, 0.16) !important" },
                    color: { base: "purple.800", dark: "purple.200" },
                    fontWeight: "normal",
                    fontSize: "sm !important",
                  })}
                >
                  {prop.name}
                </InlineCode>
                {prop.required && (
                  <InlineCode fontSize="0.8em !important" colorScheme="red">required</InlineCode>
                )}
              </chakra.div>
            </chakra.h3>
          </chakra.div>
          <div>
            {prop.description && (
              <chakra.div display="flex">
                <div className={rowStyles}>Description</div>
                <div className={cellStyles}>
                  <chakra.p margin="0">
                    {convertBackticksToInlineCode(prop.description)}
                  </chakra.p>
                </div>
              </chakra.div>
            )}
            <chakra.div display="flex">
              <div className={rowStyles}>Type</div>
              <div className={cellStyles}>
                <InlineCode fontSize="0.8em !important">{prop.type}</InlineCode>
              </div>
            </chakra.div>
            {prop.defaultValue && (
              <chakra.div display="flex">
                <div className={rowStyles}>Default</div>
                <div className={cellStyles}>
                  <MDXComponents.code>{prop.defaultValue}</MDXComponents.code>
                </div>
              </chakra.div>
            )}
          </div>
        </chakra.div>
      ))}
    </chakra.div>
  );
};

const TYPE_GENERIC_THEMEABLE = [
  "string",
  "string | (string & {})",
  "(string & {})",
];

const isGenericThemeable = (type: string) =>
  TYPE_GENERIC_THEMEABLE.includes(type);

const omitGenericThemeableType = (type: string) =>
  type
    .split(" | ")
    .filter((type) => isGenericThemeable(type))
    .join(" | ") || type;

function toLiteralStringType(strings: string[]) {
  return (
    strings
      .map((s) => `"${s}"`)
      .join(" | ")
      .trim() || "string"
  );
}

function isColorScheme(value: unknown): value is Record<string, string> {
  return (
    isObject(value) &&
    ["50", "100", "200", "300", "400", "600", "700", "800", "900"].every((k) =>
      isString(value[k])
    )
  );
}

type MakePropsTableOptions = PropsTableProps;

function makePropsTable({ of, omit, only }: MakePropsTableOptions) {
  const props = ComponentProps[of]?.props;

  const themeKey = themeComponentKeyAliases[of] ?? of;
  const componentTheme = theme.components[themeKey];

  const featNotImplemented = (feat: string) => (
    <>
      {feat} for <MDXComponents.code>{of}</MDXComponents.code> are not
      implemented in the default theme. You can{" "}
      <chakra.a href="/docs/styled-system/theming/customize-theme#customizing-component-styles">
        extend the theme
      </chakra.a>{" "}
      to implement them.
    </>
  );

  if (!props) return [];

  return Object.entries(props)
    .filter(([name]) => {
      if (Array.isArray(only) && !only.includes(name)) {
        return false;
      }

      if (Array.isArray(omit) && omit.includes(name)) {
        return false;
      }

      return true;
    })
    .map(([name, { defaultValue, description, required, type }]) => {
      const prop = {
        name,
        defaultValue: defaultValue?.value,
        description,
        required,
        type: type.name,
      };

      if (name === "size") {
        const defaultSize = componentTheme?.defaultProps?.size;
        const sizes = componentTheme?.sizes;

        if (sizes) {
          prop.type = toLiteralStringType(Object.keys(sizes));
        } else {
          prop.description = featNotImplemented("Sizes");
        }

        if (defaultSize != null) {
          prop.defaultValue = `"${defaultSize}"`;
        } else {
          prop.type = "string";
        }

        if (isGenericThemeable(prop.type)) {
          prop.type = "string";
        } else {
          prop.type = omitGenericThemeableType(prop.type);
        }
      }

      if (name === "variant") {
        const defaultVariant = componentTheme?.defaultProps?.variant;
        const variants = componentTheme?.variants;

        if (variants) {
          prop.type = toLiteralStringType(Object.keys(variants));
        } else {
          prop.description = featNotImplemented("Variants");
        }

        if (defaultVariant != null) {
          prop.defaultValue = `"${defaultVariant}"`;
        }

        if (!defaultVariant) {
          prop.type = "string";
        } else {
          prop.type = omitGenericThemeableType(prop.type);
        }
      }

      if (name === "colorScheme") {
        prop.type = omitGenericThemeableType(prop.type);

        const defaultColorScheme = componentTheme?.defaultProps?.colorScheme;
        const colorSchemes = Object.entries(theme.colors)
          .filter(([, value]) => isColorScheme(value))
          .map(([k]) => k);

        if (defaultColorScheme != null) {
          prop.defaultValue = `"${defaultColorScheme}"`;
          prop.type = toLiteralStringType(colorSchemes);
        } else {
          prop.description = featNotImplemented("Color Schemes");
        }
      }

      return prop;
    })
    .sort((propA, propB) => {
      const aRequired = propA.required ? 1000 : 0;
      const bRequired = propB.required ? 1000 : 0;
      const requiredOffset = aRequired - bRequired;
      return String(propA.name).localeCompare(propB.name) - requiredOffset;
    });
}
