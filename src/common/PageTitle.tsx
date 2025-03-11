import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { pathToLabelMap } from '@/routers/index'
import '@/assets/css/PageTitle.css'
import useHeartEffect from '@/common/useHeartEffect';

const PageTitle: React.FC = () => {
  const location = useLocation();
  const heartsContainerRef = useHeartEffect();
  useEffect(() => {
    const currentPath = location.pathname;
    const current = pathToLabelMap.get(currentPath);

    if (current) {
      document.title = current.label;
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        document.title = '欢迎回来~~~';
        const timer = setTimeout(() => {
          if (current) {
            document.title = current.label;
          }
        }, 3000);
        return () => clearTimeout(timer);
      }else{
        if (current) {
          document.title = current.label;
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [location]);

  return (
    <div>
      <div ref={heartsContainerRef} className="hearts-container">

      </div>
    </div>
  ); // 这个组件不需要渲染任何内容
};

export default PageTitle;