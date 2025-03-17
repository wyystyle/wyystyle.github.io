import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/css/base.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import { store } from '@/store';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
        <ConfigProvider locale={zhCN}>
          <App />
        </ConfigProvider>
      </Provider>
  </StrictMode>,
)
