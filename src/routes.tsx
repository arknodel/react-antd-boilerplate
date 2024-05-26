import * as React from 'react';
import { Route, Routes } from 'react-router';
import Home from './components/home/Home';
import {
  WebpackPage,
  ComponentPage,
  RouterPage,
  AntdPage
} from './components/content';

export default (
  <Routes>
    <Route path="/" Component={Home} />
    <Route path="/webpack" Component={WebpackPage} />
    <Route path="/component" Component={ComponentPage} />
    <Route path="/router" Component={RouterPage} />
    <Route path="/antd" Component={AntdPage} />
  </Routes>
);
