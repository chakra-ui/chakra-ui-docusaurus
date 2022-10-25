// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chakra UI',
  tagline: 'Dinosaurs are cool',
  url: 'https://chakra-ui.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            docsPluginId: 'default',
            position: 'left',
            label: 'Getting Started',
            sidebarPath: require.resolve('./sidebars/getting-started.js'),
          },
          {
            type: 'doc',
            docId: 'style-props',
            docsPluginId: 'styled-system',
            position: 'left',
            label: 'Styled System',
            sidebarPath: require.resolve('./sidebars/styled-system.js'),
          },
          // {
          //   type: 'doc',
          //   docId: 'index',
          //   position: 'left',
          //   label: 'Components',
          // },
          // {
          //   type: 'doc',
          //   docId: 'index',
          //   position: 'left',
          //   label: 'Hooks',
          // },
          // {
          //   type: 'doc',
          //   docId: 'index',
          //   position: 'left',
          //   label: 'Community',
          // },
          { to: '/changelog', label: 'Changelog', position: 'left' },
          // {
          //   type: 'doc',
          //   docId: 'index',
          //   position: 'left',
          //   label: 'Blog',
          // },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
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
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
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
        theme: lightCodeTheme,
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
        path: 'changelog',
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
        routeBasePath: '/getting-started',
        path: './docs/getting-started',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        versions: {
          current: {
            label: 'v2',
          },
        },
        lastVersion: 'current',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'styled-system',
        routeBasePath: '/styled-system',
        path: './docs/styled-system',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        versions: {
          current: {
            label: 'v2',
          },
        },
        lastVersion: 'current',
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
