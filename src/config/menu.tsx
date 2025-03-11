import type { MenuProps } from 'antd';
import React from 'react'
import { UserOutlined } from '@ant-design/icons';

const headerMenu: MenuProps['items'] = [
  {
    key: '/',
    label: '首页',
  },
  {
    key: '/commonlinks',
    label: '常用链接',
  },
  {
    key: '/about',
    label: '关于我',
  },
];

interface ExtendedMenuProps extends MenuProps {
  items?: Array<{ key: string; icon?: React.ReactNode; label: string; parent?: string }>;
} 
const asideMenu: ExtendedMenuProps['items'] = [
  {
    key: '0',
    icon: React.createElement(UserOutlined),
    label: '博客导航',
    parent: '1'
  }
]
export {
  headerMenu,
  asideMenu
}