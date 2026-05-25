import { use, useEffect } from 'react';
import { Card, Col, Row, Tag, Typography } from 'antd';
import { BaseContext } from '../../base/Base';

const { Paragraph } = Typography;

export const RouterPage = () => {
  const { setTitle } = use(BaseContext);
  useEffect(() => setTitle('About Router'), [setTitle]);

  const code = `import * as React from 'react';
import { Route, Routes } from 'react-router';

const Base = React.lazy(() => import('./components/base/Base'));
const Home = React.lazy(() => import('./components/content/Home/Home'));

export const routeUrls = {
  home: '/',
  vite: '/vite',
  component: '/component',
  router: '/router',
};

export default () => (
  <Routes>
    <Route element={<Base />}>
      <Route index element={<Home />} />
      <Route path={routeUrls.vite} element={<VitePage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);`;

  return (
    <div>
      <Card style={{ marginBottom: 16 }}>
        <Paragraph>
          React Router v7 keeps the UI in sync with the URL. It supports nested routes, lazy loading,
          dynamic route matching, and seamless navigation with browser history management.
        </Paragraph>
        <Paragraph style={{ marginBottom: 0 }}>
          Routes are defined in <code>src/routes.tsx</code>. All route paths are exported as{' '}
          <code>routeUrls</code> — use this constant instead of hardcoding strings to ensure consistency.
        </Paragraph>
      </Card>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <Card size="small" title={<><Tag color="blue">v7</Tag> React Router</>}>
            <Paragraph style={{ marginBottom: 0 }}>
              The latest React Router with full React 19 compatibility and nested layout support.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card size="small" title="Lazy Loading">
            <Paragraph style={{ marginBottom: 0 }}>
              Pages load on-demand via <code>React.lazy()</code> and <code>Suspense</code> for faster initial loads.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card size="small" title="Nested Routes">
            <Paragraph style={{ marginBottom: 0 }}>
              The <code>Base</code> layout wraps all routes and renders pages through <code>Outlet</code>.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24}>
          <Card title="Route Configuration">
            <pre>{code}</pre>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default RouterPage;
