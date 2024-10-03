import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'be7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '718'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'f69'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '066'),
            routes: [
              {
                path: '/architecture/database-schema',
                component: ComponentCreator('/architecture/database-schema', '1f3'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/architecture/system-architecture',
                component: ComponentCreator('/architecture/system-architecture', '6e7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/setup/installation',
                component: ComponentCreator('/setup/installation', '15d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/setup/prerequisites',
                component: ComponentCreator('/setup/prerequisites', 'fbd'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/troubleshooting/common-issues',
                component: ComponentCreator('/troubleshooting/common-issues', '89c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'b13'),
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
