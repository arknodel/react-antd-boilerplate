import { use, useEffect, useState } from 'react';
import { Button, Card, Col, Row, Space, Tag, Typography } from 'antd';
import classNames from 'classnames';
import { BaseContext } from '../../base/Base';
import './home.css';

const { Paragraph } = Typography;

export const StartPage = () => {
  const { setTitle } = use(BaseContext);
  useEffect(() => setTitle('Home'), [setTitle]);
  const [colorStatus, setColorStatus] = useState(true);

  const handleChangeColor = () => setColorStatus(prev => !prev);

  return (
    <div>
      <Card
        style={{
          marginBottom: 24,
          background: 'linear-gradient(135deg, #1677ff 0%, #4096ff 100%)',
          border: 'none',
        }}
        styles={{ body: { padding: '32px' } }}
      >
        <Typography.Title level={3} style={{ marginTop: 0, marginBottom: 8, color: '#ffffff' }}>
          Welcome to React + Ant Design Boilerplate
        </Typography.Title>
        <Paragraph style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 0 }}>
          A modern starter template built with React 19, Ant Design 6, Vite 8, and TypeScript strict mode.
        </Paragraph>
      </Card>

      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} lg={8}>
          <Card title="Vite 8" extra={<Tag color="purple">Build Tool</Tag>} hoverable>
            <Paragraph style={{ marginBottom: 0 }}>
              Next-generation frontend tooling with instant HMR, optimized builds, and a rich plugin ecosystem.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card title="React 19" extra={<Tag color="blue">UI Library</Tag>} hoverable>
            <Paragraph style={{ marginBottom: 0 }}>
              Build user interfaces with concurrent features, the <code>use()</code> hook, and improved performance.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card title="Ant Design 6" extra={<Tag color="geekblue">Components</Tag>} hoverable>
            <Paragraph style={{ marginBottom: 0 }}>
              Enterprise-grade UI components with a comprehensive design system and CSS-in-JS theming.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <Card title="Interactive Demo">
        <Paragraph>
          Click the button below to toggle text color — demonstrating React&apos;s <code>useState</code> hook.
        </Paragraph>
        <Space align="center">
          <Button type="primary" onClick={handleChangeColor}>Toggle Color</Button>
          <span className={classNames({ 'text-red': !colorStatus })}>
            This text changes color
          </span>
        </Space>
      </Card>
    </div>
  );
};

export default StartPage;
