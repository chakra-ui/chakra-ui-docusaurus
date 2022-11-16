import { PropsWithChildren } from "react";
import { FaGithub, FaNpm } from "react-icons/fa";
import { chakra } from '../../design-system/jsx';

type ComponentLinkProps = {
  icon: any;
  url: string;
  iconSize?: string;
  iconColor?: string;
  children: PropsWithChildren<string>;
  name: "NPM" | "Github";
}

const ComponentLink = ({ url, children, icon, name }: ComponentLinkProps) => {
  return (
    <chakra.a
      fontSize='md'
      textDecoration='none !important'
      borderRadius='md'
      px='12px'
      margin='6px !important'
      borderStyle="solid"
      borderWidth="1px"
      display='flex'
      alignItems='center'
      borderColor={{ base: 'gray.200 !important', dark: 'rgba(255, 255, 255, 0.16) !important' }}
      color={{ base: 'gray.600 !important', dark: 'rgba(255, 255, 255, 0.64) !important' }}
      href={url}
      target="_blank"
      fontWeight="medium"
      hover={{
        color: {
          base: 'rgba(0, 0, 0, 0.92) !important',
          dark: 'rgba(255, 255, 255, 0.92) !important',
        },
        transform: 'translateY(-2px)',
      }}
    >
      {name === "Github" &&
        <chakra.span
          display="inline-flex"
          alignItems="center"
          mr="2"
          color={{
            base: 'gray.600 !important',
            dark: 'inherit !important'
          }}
          fontSize={"1rem"}
        >
          {icon}
        </chakra.span>
      }

      {name === "NPM" &&
        <chakra.span
          display="inline-flex"
          alignItems="center"
          mr="2"
          color="red.500 !important"
          fontSize={"2rem"}
        >
          {icon}
        </chakra.span>
      }
      {children}
    </chakra.a>
  );
}

export type ComponentLinksProps = {
  theme?: { componentName: string };
  github?: { url?: string; package?: string };
  npm?: { package: string };
};

function ComponentLinks({ theme, github, npm }: ComponentLinksProps) {
  const githubRepoUrl = "https://github.com/chakra-ui/chakra-ui";

  const githubLink = (github?.url || github?.package) && (
    <ComponentLink
      url={
        github.url ||
        `${githubRepoUrl}/tree/main/packages/components/${github.package}`
      }
      icon={<FaGithub />}
      iconSize="1rem"
      name="Github"
    >
      View source
    </ComponentLink>
  );

  const npmLink = npm?.package && (
    <ComponentLink
      url={`https://www.npmjs.com/package/${npm.package}`}
      icon={<FaNpm />}
      name="NPM"
    >
      {npm.package}
    </ComponentLink>
  );

  const themeComponentLink = theme && (
    <ComponentLink
      url={`${githubRepoUrl}/tree/main/packages/components/theme/src/components/${theme.componentName}.ts`}
      icon={<FaGithub />}
      iconSize="1rem"
      name="Github"
    >
      View theme source
    </ComponentLink>
  );

  return (
    <chakra.div display="flex" gap="3" flexWrap="wrap" overflow="visible">
      {githubLink}
      {themeComponentLink}
      {npmLink}
    </chakra.div>
  );
}

export default ComponentLinks;
