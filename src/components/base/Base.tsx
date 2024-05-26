import React, { Component, PropsWithChildren, Suspense } from 'react';
import { get } from 'lodash';
import {
  Row,
  Col
} from 'antd';

import Header from '../header/Header';
import {SideBar} from '../sidebar/Sidebar';
import './base.css';
import { useLocation } from 'react-router-dom';
import { Loading } from '../common/Loading';

interface IBaseProps extends PropsWithChildren {
  title: string;
}

export const Base = ({
  children,
  title
}: IBaseProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <Row>
        <Col span={4}>
          <SideBar />
        </Col>
        <Col span={20} style={{marginLeft: 237}}>
          <Header />
          <div className="padding-lg content-container">
            <div className="margin-bottom-md">
              <h1>{title}</h1>
            </div>
            {children}
          </div>
        </Col>
      </Row>
    </Suspense>
  );
}

export default Base;
