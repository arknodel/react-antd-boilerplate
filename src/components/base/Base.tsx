import React, { Suspense, useEffect } from 'react';
import {
  Row,
  Col
} from 'antd';

import Header from '../header/Header';
import {SideBar} from '../sidebar/Sidebar';
import './base.css';
import { Loading } from '../common/Loading';
import { createContext } from "react";
import { IBaseDisplaySettings } from "./BaseState";
import { Outlet, useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

export const BaseContext = createContext<IBaseDisplaySettings>({setTitle: () => {}, title: 'Loading'});

interface IBaseProps {
}

export const Base = ({
}: IBaseProps) => {
  const [baseTitle, setBaseTitle] = React.useState<string>('Loading');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fromPage = searchParams.get("from");
    if (fromPage) {
      const url = new URL(fromPage);
      if (url.hostname === window.location.hostname) {
        navigate(url.pathname + url.search, { replace: true, relative: "path" });
      } else {
        navigate("/notfound" + searchParams.toString(), { replace: true, relative: "path" });
      }
    }
  }, [ searchParams, navigate ]);

  return (
    <BaseContext.Provider value={{setTitle: setBaseTitle, title: baseTitle}}>
      <Row>
        <Col span={4}>
          <SideBar />
        </Col>
        <Col span={20} style={{marginLeft: 237}}>
          <Header />
          <div className="padding-lg content-container">
            <div className="margin-bottom-md">
              <h1>{baseTitle}</h1>
            </div>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </div>
        </Col>
      </Row>
    </BaseContext.Provider>
  );
}

export default Base;
