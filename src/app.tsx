import {
  BrowserRouter
} from "react-router-dom";
import Routes from './routes';

import 'font-awesome/css/font-awesome.css';
import 'antd/dist/reset.css';

export const App = () => {
  return (
    <BrowserRouter basename="/react-antd-boilerplate">
      <Routes />
    </BrowserRouter>
  )
};