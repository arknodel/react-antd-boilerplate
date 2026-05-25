import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import 'font-awesome/css/font-awesome.css';
import 'antd/dist/reset.css';
import { ConfigProvider, ThemeConfig } from 'antd';
import { StrictMode } from 'react';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#1677ff',
    borderRadius: 8,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  components: {
    Layout: {
      headerBg: '#ffffff',
      headerPadding: '0 24px',
      bodyBg: '#f0f2f5',
      siderBg: '#ffffff',
    },
    Menu: {
      itemBorderRadius: 6,
      itemMarginInline: 4,
    },
  },
};

export const App = () => {
  return (
    <StrictMode>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ConfigProvider theme={theme}>
          <Routes />
        </ConfigProvider>
      </BrowserRouter>
    </StrictMode>
  );
};
