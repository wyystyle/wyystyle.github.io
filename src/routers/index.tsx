// routes.ts
import type { RouteObject } from 'react-router-dom';
import { JSX, lazy } from 'react';
// 使用 React.lazy 包装动态导入的 Home 组件
const Home = lazy(() => import('@/components/Home/Home.tsx'))
const About = lazy(() => import('@/components/About/About.tsx'))

export type Extebds = (MyRouteObject & RouteObject)[] 

interface MyRouteObject {
  path: string;
  element: JSX.Element;
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
    ],
  },
];

export default routes;