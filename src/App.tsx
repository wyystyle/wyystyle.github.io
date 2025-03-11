
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routers'
import type {Extebds} from '@/routers'
import PageTitle from '@/common/PageTitle'
// 递归渲染路由的函数
const renderRoutes = (routes: Extebds) => {
  return routes.map((route) => {
    // 确保 route.path 和 route.element 存在且有效
    if (!route.path || !route.element) {
      console.warn('Invalid route configuration:', route);
      return null;
    }
  
    const commonProps = {
      path: route.path,
      element: route.element,
    };
  
    if (route.children) {
      return (
        <Route key={ route.path } {...commonProps}>
          {renderRoutes(route.children)}
        </Route>
      );
    } else {
      return <Route key={ route.path } {...commonProps} />;
    }
  });
  
};
const App = () => {
  return (
    <Router>
      <PageTitle />
      <Routes>
        {renderRoutes(routes)}
      </Routes>
    </Router>
  )
}
export default App
