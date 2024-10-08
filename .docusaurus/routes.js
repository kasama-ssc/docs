import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/__docusaurus/debug',
    component: ComponentCreator('/docs/__docusaurus/debug', '84b'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/config',
    component: ComponentCreator('/docs/__docusaurus/debug/config', '1f7'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/content',
    component: ComponentCreator('/docs/__docusaurus/debug/content', '166'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/docs/__docusaurus/debug/globalData', 'dc7'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/docs/__docusaurus/debug/metadata', '231'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/registry',
    component: ComponentCreator('/docs/__docusaurus/debug/registry', '7cd'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/routes',
    component: ComponentCreator('/docs/__docusaurus/debug/routes', '21f'),
    exact: true
  },
  {
    path: '/docs/markdown-page',
    component: ComponentCreator('/docs/markdown-page', '7cd'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '53f'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '2a6'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', '4fc'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '900'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/deployment-guide/installation',
                component: ComponentCreator('/docs/deployment-guide/installation', '63c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/deployment-guide/prerequisites',
                component: ComponentCreator('/docs/deployment-guide/prerequisites', '081'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/development-guide/adding-new-features',
                component: ComponentCreator('/docs/development-guide/adding-new-features', '381'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/development-guide/code-structure',
                component: ComponentCreator('/docs/development-guide/code-structure', 'd55'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/development-guide/database-schema',
                component: ComponentCreator('/docs/development-guide/database-schema', '59b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/development-guide/environment-setup',
                component: ComponentCreator('/docs/development-guide/environment-setup', '75c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/development-guide/system-architecture',
                component: ComponentCreator('/docs/development-guide/system-architecture', '765'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/troubleshooting/common-issues',
                component: ComponentCreator('/docs/troubleshooting/common-issues', '457'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
