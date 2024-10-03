import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '6c3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '054'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'd74'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'ebf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '246'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '75f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '700'),
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
