import React, { Suspense, useCallback, useEffect, useState } from 'react';
import {
  Row,
  Col,
  Layout
} from 'antd';

import Header from '../header/Header';
import {SideBar} from '../sidebar/Sidebar';
import './base.css';
import { Loading } from '../common/Loading';
import { createContext } from "react";
import { IBaseDisplaySettings } from "./BaseState";
import { Outlet, useHref, useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { Content } from 'antd/es/layout/layout';
import Title from 'antd/es/typography/Title';

export const BaseContext = createContext<IBaseDisplaySettings>({setTitle: () => {}, title: 'Loading'});

interface IBaseProps {
}

export const Base = ({
}: IBaseProps) => {
  const [baseTitle, setBaseTitle] = React.useState<string>('Loading');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const basename = useHref("");

  useEffect(() => {
    const fromPage = searchParams.get("from");
    if (fromPage) {
      const url = new URL(fromPage);
      if (url.hostname === window.location.hostname) {
        navigate(url.pathname.replace(basename, '') + url.search, { replace: true, relative: "path" });
      } else {
        navigate("/notfound" + searchParams.toString(), { replace: true, relative: "path" });
      }
    }
  }, [ searchParams, navigate ]);

  const [navBarCollapsed, setNavBarCollapsed] = useState(false);
  return (
    <BaseContext.Provider value={{setTitle: setBaseTitle, title: baseTitle}}>
      <Layout hasSider>
        <Layout.Sider theme='light' collapsible collapsed={navBarCollapsed} onCollapse={setNavBarCollapsed} onBreakpoint={setNavBarCollapsed} breakpoint='md'>
          <SideBar />
        </Layout.Sider>
        <Layout>
          <Layout.Header>
            <Header />
          </Layout.Header>
          <Layout.Content>
              <Title level={2}>{baseTitle}</Title>
              <Suspense fallback={<Loading />}>
                <Outlet />
              </Suspense>
          </Layout.Content>
        </Layout>
      </Layout>
    </BaseContext.Provider>
  );
}

export default Base;
