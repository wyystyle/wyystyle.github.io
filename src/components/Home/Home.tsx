import React, { useEffect } from 'react';
import { theme, Layout, Menu, Breadcrumb, Flex, Dropdown, Space, MenuProps } from 'antd';
import "./Home.css";
import { headerMenu, asideMenu } from '@/config/menu';
import { Outlet, useNavigate } from 'react-router-dom';
import MeteorShower from '../MeteorShower/MeteorShower'; // 导入流星效果组件
import { useBreadcrumb } from '@/common/useBreadcrumb'
import  { UserOutlined, DownOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/index';
import { getUserInfo } from '@/store/user';
const { Header, Content, Sider } = Layout;

const Home: React.FC = () => {
  const userInfo = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch<AppDispatch>();
  const { breadcrumbs, handleClick } = useBreadcrumb();
  const navigate = useNavigate();
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '退出登录',
      disabled: false,
    }
  ];
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleMenuClick = (e: any) => {
    if (e.key) {
      navigate(e.key); // 根据菜单项的 key 进行路由跳转
    }
  };
  useEffect(() => {
    dispatch(getUserInfo())
  }, [])
  return (
    <div className="home_content">
      <MeteorShower /> {/* 使用流星效果组件 */}
      <Layout className='main_container'>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <Flex style={{width: '100%'}} justify='space-between'>
            <div className="demo-logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={headerMenu}
              style={{ flex: 1, minWidth: 0 }}
              onClick={handleMenuClick}
            />
            <div className="user_info">
              <UserOutlined />
              <Dropdown menu={{ items }}>
                <Space style={{color:'var(--header-clolr, #fff)'}}>
                  {userInfo.userName}
                  <DownOutlined />
                </Space>
              </Dropdown>
            </div>
          </Flex>

        </Header>
        <Layout>
          <Sider width={200} style={{ background: colorBgContainer }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
              items={asideMenu}
            />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb
              items={breadcrumbs.map(item => ({
                title: <span onClick={() => handleClick(item.path)}>{item.label}</span>,
                key: item.path,
              }))}
              style={{ margin: '16px 0' }}
            />
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Outlet></Outlet>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;