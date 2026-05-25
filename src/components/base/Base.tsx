import { Suspense, createContext, useEffect, useState } from 'react';
import { Layout, Typography } from 'antd';

import Header from '../header/Header';
import { SideBar } from '../sidebar/Sidebar';
import './base.css';
import { Loading } from '../common/Loading';
import { IBaseDisplaySettings } from './BaseState';
import { Outlet, useHref, useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

export const BaseContext = createContext<IBaseDisplaySettings>({ setTitle: () => {}, title: 'Loading' });

export const Base = () => {
  const [baseTitle, setBaseTitle] = useState<string>('Loading');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const basename = useHref('');

  useEffect(() => {
    const fromPage = searchParams.get('from');
    if (fromPage) {
      const url = new URL(fromPage);
      if (url.hostname === window.location.hostname) {
        navigate(url.pathname.replace(basename, '') + url.search, { replace: true, relative: 'path' });
      } else {
        navigate('/notfound' + searchParams.toString(), { replace: true, relative: 'path' });
      }
    }
  }, [searchParams, navigate, basename]);

  const [navBarCollapsed, setNavBarCollapsed] = useState(false);

  return (
    <BaseContext value={{ setTitle: setBaseTitle, title: baseTitle }}>
      <Layout hasSider style={{ minHeight: '100vh' }}>
        <Layout.Sider
          theme='light'
          collapsible
          collapsed={navBarCollapsed}
          onCollapse={setNavBarCollapsed}
          onBreakpoint={setNavBarCollapsed}
          breakpoint='md'
          className="app-sider"
        >
          <SideBar collapsed={navBarCollapsed} />
        </Layout.Sider>
        <Layout>
          <Layout.Header className="app-header">
            <Header />
          </Layout.Header>
          <Layout.Content>
            <div className="page-header-bar">
              <Typography.Title level={4} style={{ margin: 0 }}>{baseTitle}</Typography.Title>
            </div>
            <div className="page-body">
              <Suspense fallback={<Loading />}>
                <Outlet />
              </Suspense>
            </div>
          </Layout.Content>
        </Layout>
      </Layout>
    </BaseContext>
  );
};

export default Base;
