// routes.ts
import type { RouteObject } from 'react-router-dom';
import { JSX, lazy } from 'react';
// 使用 React.lazy 包装动态导入的 Home 组件
const Home = lazy(() => import('@/components/Home/Home.tsx'))
const About = lazy(() => import('@/components/About/About.tsx'))
const CommonLinks = lazy(() => import('@/components/CommonLinks/CommonLinks.tsx'))

export type Extebds = (MyRouteObject & RouteObject)[]

export interface MyRouteObject {
  path: string;
  element?: JSX.Element;
  label: string;
  children?:Extebds;
}
const routes: Extebds = [
  {
    path: '/',
    element: <Home />,
    label: '首页',
    children: [
      {
        path: 'about',
        element: <About />,
        label: '关于',
      },
      {
        path: 'user',
        element: <div>User</div>,
        label: '用户',
      },
      {
        path: 'commonlinks',
        element: <CommonLinks />,
        label: '常用链接',
      },
    ],
  },
];
const pathToLabelMap: Map<string, MyRouteObject> = new Map();
const createPathToLabelMap = (routes: Extebds, basePath = '') => {
  for (const route of routes) {
    const fullPath = basePath + route.path;
    pathToLabelMap.set(fullPath, route);
    if (route.children) {
      createPathToLabelMap(route.children, fullPath.endsWith('/') ? fullPath : fullPath + '/');
    }
  }
};
createPathToLabelMap(routes);
export { routes, pathToLabelMap };