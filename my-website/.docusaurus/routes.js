import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/355/__docusaurus/debug',
    component: ComponentCreator('/355/__docusaurus/debug', 'e3b'),
    exact: true
  },
  {
    path: '/355/__docusaurus/debug/config',
    component: ComponentCreator('/355/__docusaurus/debug/config', '79f'),
    exact: true
  },
  {
    path: '/355/__docusaurus/debug/content',
    component: ComponentCreator('/355/__docusaurus/debug/content', '906'),
    exact: true
  },
  {
    path: '/355/__docusaurus/debug/globalData',
    component: ComponentCreator('/355/__docusaurus/debug/globalData', '39d'),
    exact: true
  },
  {
    path: '/355/__docusaurus/debug/metadata',
    component: ComponentCreator('/355/__docusaurus/debug/metadata', 'f50'),
    exact: true
  },
  {
    path: '/355/__docusaurus/debug/registry',
    component: ComponentCreator('/355/__docusaurus/debug/registry', '281'),
    exact: true
  },
  {
    path: '/355/__docusaurus/debug/routes',
    component: ComponentCreator('/355/__docusaurus/debug/routes', '4e9'),
    exact: true
  },
  {
    path: '/355/blog',
    component: ComponentCreator('/355/blog', '112'),
    exact: true
  },
  {
    path: '/355/blog/archive',
    component: ComponentCreator('/355/blog/archive', 'e81'),
    exact: true
  },
  {
    path: '/355/blog/first-blog-post',
    component: ComponentCreator('/355/blog/first-blog-post', '419'),
    exact: true
  },
  {
    path: '/355/blog/long-blog-post',
    component: ComponentCreator('/355/blog/long-blog-post', '623'),
    exact: true
  },
  {
    path: '/355/blog/mdx-blog-post',
    component: ComponentCreator('/355/blog/mdx-blog-post', '87b'),
    exact: true
  },
  {
    path: '/355/blog/tags',
    component: ComponentCreator('/355/blog/tags', 'a5f'),
    exact: true
  },
  {
    path: '/355/blog/tags/docusaurus',
    component: ComponentCreator('/355/blog/tags/docusaurus', '88f'),
    exact: true
  },
  {
    path: '/355/blog/tags/facebook',
    component: ComponentCreator('/355/blog/tags/facebook', '4e1'),
    exact: true
  },
  {
    path: '/355/blog/tags/hello',
    component: ComponentCreator('/355/blog/tags/hello', '1f9'),
    exact: true
  },
  {
    path: '/355/blog/tags/hola',
    component: ComponentCreator('/355/blog/tags/hola', 'b83'),
    exact: true
  },
  {
    path: '/355/blog/welcome',
    component: ComponentCreator('/355/blog/welcome', '275'),
    exact: true
  },
  {
    path: '/355/markdown-page',
    component: ComponentCreator('/355/markdown-page', '04b'),
    exact: true
  },
  {
    path: '/355/docs',
    component: ComponentCreator('/355/docs', '9cc'),
    routes: [
      {
        path: '/355/docs/category/tutorial---basics',
        component: ComponentCreator('/355/docs/category/tutorial---basics', 'b09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/355/docs/category/tutorial---extras',
        component: ComponentCreator('/355/docs/category/tutorial---extras', '5ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/355/docs/intro',
        component: ComponentCreator('/355/docs/intro', 'ba0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/355/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/355/docs/tutorial-basics/congratulations', '7e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/355/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/355/docs/tutorial-basics/create-a-blog-post', 'ca4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/355/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/355/docs/tutorial-basics/create-a-document', '742'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/355/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/355/docs/tutorial-basics/create-a-page', 'f5a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/355/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/355/docs/tutorial-basics/deploy-your-site', 'da2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/355/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/355/docs/tutorial-basics/markdown-features', '597'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/355/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/355/docs/tutorial-extras/manage-docs-versions', '5b1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/355/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/355/docs/tutorial-extras/translate-your-site', '3d9'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/355/',
    component: ComponentCreator('/355/', '7c0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
