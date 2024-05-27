import React, { Component, PropsWithChildren, Suspense } from 'react';
import { get } from 'lodash';
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
import { Outlet } from 'react-router';

export const BaseContext = createContext<IBaseDisplaySettings>({setTitle: () => {}, title: 'Loading'});

interface IBaseProps extends PropsWithChildren {
}

export const Base = ({
  children
}: IBaseProps) => {
  const [baseTitle, setBaseTitle] = React.useState<string>('Loading');
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
