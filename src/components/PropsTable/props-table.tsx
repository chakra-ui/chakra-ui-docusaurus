import * as React from "react";
import * as ComponentProps from "@chakra-ui/props-docs";
import {
  Code,
  Flex,
  HStack,
  Stack,
  chakra,
  theme,
  Link,
  ChakraProvider,
} from "@chakra-ui/react";
import { isObject, isString } from "@chakra-ui/utils";
import MDXComponents from "../../theme/MDXComponents";
import { convertBackticksToInlineCode } from "./convert-backticks-to-inline-code";
import { ChakraIFrameProvider } from "../../theme/Playground";

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
    <ChakraProvider resetCSS={false}>
      <Stack overflowX="auto" spacing="16" my="10">
        {propList.map((prop) => (
          <chakra.div
            key={prop.name}
            css={{
              width: "100%",
              fontSize: "0.95em",
              borderCollapse: "collapse",
              ".row": {
                minWidth: 100,
                width: "20%",
                fontSize: "0.9em",
                textAlign: "start",
                fontWeight: 500,
                padding: "4px 16px 4px 16px",
                whiteSpace: "nowrap",
                verticalAlign: "baseline",
              },
              ".cell": {
                padding: "4px 0px 4px 8px",
                width: "100%",
              },
            }}
          >
            <chakra.div css={{ textAlign: "start", fontSize: "1em" }}>
              <chakra.h3
                css={{
                  fontSize: "0.8em",
                  paddingBottom: 4,
                  marginBottom: 16,
                  borderBottomWidth: 1,
                }}
              >
                <HStack>
                  <Code colorScheme="purple">{prop.name}</Code>
                  {prop.required && <Code colorScheme="red">required</Code>}
                </HStack>
              </chakra.h3>
            </chakra.div>
            <div>
              {prop.description && (
                <Flex>
                  <div className="row">Description</div>
                  <div className="cell">
                    <p>{convertBackticksToInlineCode(prop.description)}</p>
                  </div>
                </Flex>
              )}
              <Flex>
                <div className="row">Type</div>
                <div className="cell">
                  <MDXComponents.code>{prop.type}</MDXComponents.code>
                </div>
              </Flex>
              {prop.defaultValue && (
                <Flex>
                  <div className="row">Default</div>
                  <div className="cell">
                    <MDXComponents.code>{prop.defaultValue}</MDXComponents.code>
                  </div>
                </Flex>
              )}
            </div>
          </chakra.div>
        ))}
      </Stack>
    </ChakraProvider>
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
      <Link href="/docs/styled-system/theming/customize-theme#customizing-component-styles">
        extend the theme
      </Link>{" "}
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
