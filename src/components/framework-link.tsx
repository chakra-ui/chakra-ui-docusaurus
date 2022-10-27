import {
  Box,
  SimpleGrid,
  Text,
  chakra,
  ChakraProvider,
  VStack,
} from "@chakra-ui/react";
import {
  BlitzSvg,
  CreateReactAppSvg,
  GatsbySvg,
  MeteorSvg,
  NextjsSvg,
  RedwoodSvg,
  RemixSvg,
  ViteSvg,
} from "./framework-svg";
import * as React from "React";

const FrameworkLink = (props) => {
  const { accentColor, href, children, name } = props;
  return (
    <chakra.a
      bg="white"
      display="block"
      shadow="md"
      textDecoration="none"
      borderRadius="xl"
      overflow="hidden"
      transform="auto"
      transition="all 0.1s ease-in-out"
      _hover={{ textDecoration: "none", translateY: "-2px", shadow: "md" }}
      href={href}
    >
      <Box pt="4" display="flex" flexDirection={"column"} alignItems="center">
        {children}
        <Box bg={accentColor} mt="4" py="1" color="white" width="full">
          <Text textAlign="center" fontSize="sm" fontWeight="bold">
            {name}
          </Text>
        </Box>
      </Box>
    </chakra.a>
  );
};

export const FrameworkLinks = () => {
  return (
    <ChakraProvider resetCSS={false}>
      <SimpleGrid mt="12" minChildWidth="160px" spacing="40px" fontSize="6xl">
        <FrameworkLink
          href="/getting-started/cra-guide"
          accentColor="#0AC09D"
          name="Create React App"
        >
          <CreateReactAppSvg style={{ margin: "auto" }} />
        </FrameworkLink>

        <FrameworkLink
          href="/getting-started/nextjs-guide"
          accentColor="black"
          name="Next.js"
        >
          <NextjsSvg style={{ margin: "auto" }} />
        </FrameworkLink>

        <FrameworkLink
          href="/getting-started/gatsby-guide"
          accentColor="#663399"
          name="Gatsby"
        >
          <GatsbySvg style={{ margin: "auto" }} />
        </FrameworkLink>

        <FrameworkLink
          href="/getting-started/blitzjs-guide"
          accentColor="#6700EB"
          name="BlitzJS"
        >
          <BlitzSvg style={{ margin: "auto" }} />
        </FrameworkLink>

        <FrameworkLink
          href="/getting-started/redwoodjs-guide"
          accentColor="#BF4722"
          name="RedwoodJS"
        >
          <RedwoodSvg style={{ margin: "auto" }} />
        </FrameworkLink>

        <FrameworkLink
          href="/getting-started/remix-guide"
          accentColor="#121212"
          name="Remix"
        >
          <RemixSvg style={{ margin: "auto" }} />
        </FrameworkLink>

        <FrameworkLink
          href="/getting-started/vite-guide"
          accentColor="#C07600"
          name="Vite"
        >
          <ViteSvg style={{ margin: "auto" }} />
        </FrameworkLink>

        <FrameworkLink
          href="/getting-started/meteor-guide"
          accentColor="#FF6A3E"
          name="Meteor"
        >
          <MeteorSvg style={{ margin: "auto" }} />
        </FrameworkLink>
      </SimpleGrid>
    </ChakraProvider>
  );
};
