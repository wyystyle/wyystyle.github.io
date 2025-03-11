import { useLocation, useNavigate } from 'react-router-dom';
import { pathToLabelMap } from '@/routers/index';

export const useBreadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split('/').filter((x) => x);

  let breadcrumbs = pathnames.map((_, index) => {
    const path = `/${pathnames.slice(0, index + 1).join('/')}`;
    const route = pathToLabelMap.get(path);
    return {
      label: route?.label || '',
      path,
    };
  });
  breadcrumbs = breadcrumbs.length === 0 ? [{ label: '首页', path: '/' }] : breadcrumbs;
  const handleClick = (path: string) => {
    navigate(path);
  };

  return { breadcrumbs, handleClick };
};