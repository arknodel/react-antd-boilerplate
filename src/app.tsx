import {
  BrowserRouter
} from "react-router-dom";
import Routes from './routes';

import 'font-awesome/css/font-awesome.css';
import 'antd/dist/reset.css';

export const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes />
    </BrowserRouter>
  )
};