import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/markdown-page',
    component: ComponentCreator('/docs/markdown-page', '7cd'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '6c8'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'd89'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', '392'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '900'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/architecture/database-schema',
                component: ComponentCreator('/docs/architecture/database-schema', 'ae6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/architecture/system-architecture',
                component: ComponentCreator('/docs/architecture/system-architecture', '28b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/setup/installation',
                component: ComponentCreator('/docs/setup/installation', '015'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/setup/prerequisites',
                component: ComponentCreator('/docs/setup/prerequisites', '821'),
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
