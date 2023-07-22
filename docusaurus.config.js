// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');
  
const TwitterSvg = '<svg style="fill: #1DA1F2; vertical-align: middle; margin-left: 3px;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Homotechsual Docs',
  tagline: 'Documentation for various homotechsual projects, including the HaloAPI and NinjaOne PowerShell modules as well as reimagined API documentation for NinjaOne.',
  url: 'https://docs.homotechsual.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/haloapi',
          routeBasePath: 'docs/haloapi',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/homotechsual/moduledocs/tree/main',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/scss/custom.scss'),
        },
      }),
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: false,
        logo: {
          alt: 'Homotechsual Logo',
          src: 'img/Logo-LightText.svg',
        },
        items: [
          {
            label: 'Module Documentation',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'index',
                label: 'HaloAPI',
                docsPluginId: 'default',
              }
            ],  
          },
          /* {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'MSGraphMail',
            docsPluginId: 'msgraphmail',
          },
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'NinjaOne',
            docsPluginId: 'ninjaone',
          },*/ 
          { 
            label: 'API Documentation',
            position: 'left',
            items: [
              {
                label: 'NinjaOne',
                to: 'api/NinjaOne',
              }
            ]
          },
          {
            to: 'https://github.com/sponsors/homotechsual/',
            label: 'Sponsor',
            position: 'right',
            target: '_blank',
            className: 'sponsorship-link',
          },
          {
            type: 'dropdown',
            position: 'right',
            label: 'GitHub Projects',
            className: 'github-link',
            items: [
              {
                to: 'https://github.com/homotechsual/MSGraphMail',
                label: 'MSGraphMail',
                target: '_blank',
              },
              {
                to: 'https://github.com/homotechsual/HaloAPI',
                label: 'HaloAPI',
                target: '_blank',
              },
              {
                to: 'https://github.com/homotechsual/NinjaOne',
                label: 'NinjaOne',
                target: '_blank',
              },
            ],
          },
        ],
      },
      footer: {
        logo: {
          alt: 'Docusaurus Logo',
          src: 'img/Docusaurus.svg',
          href: 'https://docusaurus.io',
          height: 50,
          width: 50,
        },
        links: [
          {
            title: 'Useful Links and Communities',
            items: [
              {
                to: 'https://cipp.app',
                label: 'CIPP',
              },
              {
                to: 'https://mspgeek.org/',
                label: 'MSPGeek',
              },
              {
                to: 'https://winadmins.io/',
                label: 'WinAdmins',
              }
            ],
          },
          {
            title: 'More Homotechsual',
            items: [
              {
                to: 'pathname:///rss.xml',
                label: 'RSS Feed',
              },
              {
                to: 'https://github.com/homotechsual',
                label: 'GitHub',
              },
              {
                to: 'https://twitter.com/homotechsual',
                label: 'Twitter',
              }
            ],
          },
          {
            title: 'Other Useful Blogs',
            items: [
              {
                to: 'https://cyberdrain.com',
                label: 'CyberDrain',
              },
              {
                to: 'https://mspp.io',
                label: 'MSPP',
              },
              {
                to: 'https://gavsto.com',
                label: 'Gavsto',
              },
              {
                to: 'https://techfoundry.co.uk/',
                label: 'TechFoundry',
              }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mikey O'Toole | Built with <a href="https://docusaurus.io">Docusaurus</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'announcementBar-0', // Increment on change
        content: `⭐️ If you like any of the PowerShell modules or projects, give them a star or sponsor one or more of the authors on <a target="_blank" rel="noopener noreferrer" href="https://github.com/homotechsual">GitHub</a> and follow me on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/homotechsual">Twitter${TwitterSvg}</a>`,
      },
    }),
    plugins: [
      require.resolve('docusaurus-plugin-sass'),
      [
        require.resolve("@cmfcmf/docusaurus-search-local"),
        {
          indexDocs: true,
          indexBlog: false,
          indexPages: true,
          language: "en"
        }
      ],
      [
        require.resolve('@docusaurus/plugin-client-redirects'),
        {
          redirects: [
          ]
        }
      ],
      [
        'docusaurus-plugin-plausible',
        {
          domain: 'homotechsual.dev',
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'ninjaoneapi',
          path: 'api/ninjaone',
          routeBasePath: 'api/ninjaone',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          sidebarCollapsed: false,
          docItemComponent: "@theme/ApiItem"
        },
      ],
      [
        'docusaurus-plugin-openapi-docs',
        {
          id: "ninjaoneapi",
          docsPluginId: "ninjaoneapi",
          config: {
            ninjaone: { // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
              specPath: "api/specs/NinjaOne.oa3.json", // Path to designated spec file
              outputDir: "api/ninjaone", // Output directory for generated .mdx docs
              sidebarOptions: {
                groupPathsBy: "tag",
              },
            }
          }
        },
      ]
    ],
    themes: ["docusaurus-theme-openapi-docs"]
};

module.exports = config;
