import { use, useEffect } from 'react';
import { Card, Col, Row, Tag, Typography } from 'antd';
import { BaseContext } from '../../base/Base';

const { Paragraph } = Typography;

export const WebpackPage = () => {
  const { setTitle } = use(BaseContext);
  useEffect(() => setTitle('About Vite'), [setTitle]);

  const code = `import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        notfound: resolve(__dirname, '404.html'),
      },
    },
  },
});`;

  return (
    <div>
      <Card style={{ marginBottom: 16 }}>
        <Paragraph>
          Vite is a next-generation frontend build tool that offers a dramatically faster development
          experience. It leverages native ES modules for instant server start and lightning-fast HMR.
        </Paragraph>
        <Paragraph style={{ marginBottom: 0 }}>
          Production builds use Rollup under the hood for highly optimized output with tree-shaking,
          code splitting, and asset optimization built in — no configuration required.
        </Paragraph>
      </Card>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <Card size="small" title={<><Tag color="purple">Fast</Tag> Instant Start</>}>
            <Paragraph style={{ marginBottom: 0 }}>
              The dev server starts instantly regardless of app size — no bundling step required.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card size="small" title="Hot Module Replacement">
            <Paragraph style={{ marginBottom: 0 }}>
              HMR stays fast as the app grows, with precise module invalidation and no full reloads.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card size="small" title="Optimized Builds">
            <Paragraph style={{ marginBottom: 0 }}>
              Pre-configured Rollup with optimal chunk splitting, lazy loading, and minification.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24}>
          <Card title="vite.config.ts">
            <pre>{code}</pre>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WebpackPage;
