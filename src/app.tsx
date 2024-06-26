import {
  BrowserRouter
} from "react-router-dom";
import Routes from './routes';

import 'font-awesome/css/font-awesome.css';
import 'antd/dist/reset.css';
import { ConfigProvider, ThemeConfig } from "antd";
import { StrictMode } from "react";

const theme: ThemeConfig = {
  components: {
    Layout: {
      headerBg: "#FFFFFF",
      headerPadding: "0 10px",
      bodyBg: "#FFFFFF",
    }
  }
}

export const App = () => {
  return (
    <StrictMode>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ConfigProvider theme={theme}>
          <Routes />
        </ConfigProvider>
      </BrowserRouter>
    </StrictMode>
  )
};