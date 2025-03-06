
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './routers'
import { lazy } from 'react';
import type {Extebds} from '@/routers'
console.log('routes', routes)
const Home = lazy(() => import('@/components/Home/Home.tsx'))
const About = lazy(() => import('@/components/About/About.tsx'))
// 递归渲染路由的函数
const renderRoutes = (routes: Extebds) => {
  return routes.map((route) => {
    if (route.children) {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        >
          {renderRoutes(route.children)}
        </Route>
      );
    } else {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      );
    }
  });
  
};
console.log(renderRoutes(routes),"renderRoutes(routes)")
const App = () => {
  return (
    <Router>
      <Routes>
        {/* {renderRoutes(routes)} */}
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />}>
          
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}
export default App
