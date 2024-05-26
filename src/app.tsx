import * as React from 'react';
import {
  HashRouter
} from "react-router-dom";
import routes from './routes';

import 'font-awesome/css/font-awesome.css';
import 'antd/dist/reset.css';

export const App = () => (
  <HashRouter>
    {routes}
  </HashRouter>
);