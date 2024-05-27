import * as React from 'react';
import {
  HashRouter
} from "react-router-dom";
import Routes from './routes';

import 'font-awesome/css/font-awesome.css';
import 'antd/dist/reset.css';
const Base = React.lazy(() => import('./components/base/Base'));

export const App = () => {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  )
};