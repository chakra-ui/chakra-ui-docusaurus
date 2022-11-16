import { chakra, HTMLChakraProps } from "../../design-system/jsx";

export const InlineCode = (props: HTMLChakraProps<"code">) => {
  return (
    <chakra.code
      borderRadius="0px !important"
      border="0px solid white !important"
      px="1"
      fontSize="0.875em"
      py="2px"
      lineHeight="normal"
      backgroundColor="transparent !important"
      color={{ base: "purple.500", dark: "purple.200" }}
      {...props}
    />
  );
};
