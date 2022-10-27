// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chakra UI',
  tagline: 'Dinosaurs are cool',
  url: 'https://chakra-ui.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Chakra UI Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            docsPluginId: 'getting-started',
            position: 'left',
            label: 'Getting Started',
          },
          {
            type: 'doc',
            docId: 'index',
            docsPluginId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'index',
            docsPluginId: 'community',
            position: 'left',
            label: 'Community',
          },
          { to: '/changelog', label: 'Changelog', position: 'left' },
          {
            position: 'right',
            alt: 'github logo',
            src: 'img/github.svg',
            href: 'https://github.com/chakra-ui/chakra-ui',
          },
          {
            position: 'right',
            alt: 'discord logo',
            src: 'img/discord.svg',
            href: 'https://discord.gg/chakra-ui',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/chakra-ui',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/chakra-ui',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/chakra-ui/chakra-ui',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      algolia: {
        indexName: 'chakra-ui',
        apiKey: 'df1dcc41f7b8e5d68e73dd56d1e19701',
        appId: 'BH4D9OD16A',
        contextualSearch: true,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  themes: [
    '@docusaurus/theme-search-algolia',
    '@docusaurus/theme-live-codeblock',
  ],

  plugins: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: require.resolve('./src/css/custom.css'),
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        path: './content/changelog',
        routeBasePath: 'changelog',
        postsPerPage: 1,
        blogSidebarCount: 'ALL',
        showReadingTime: false,
        blogSidebarTitle: 'Changelogs',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'getting-started',
        routeBasePath: '/',
        path: './content/getting-started',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs',
        routeBasePath: '/docs',
        path: './content/docs',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        routeBasePath: '/community',
        path: './content/community',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects(existingPath) {
          if (existingPath.includes('/frameworks')) {
            return [existingPath.replace('/frameworks', '')];
          }

          if (existingPath.includes('/integrations')) {
            return [existingPath.replace('/integrations', '')];
          }
          return undefined;
        },
      },
    ],
    '@docusaurus/plugin-sitemap',
  ],
};

module.exports = config;
