import { use, useEffect } from 'react';
import { Alert, Button, Card, Col, Row, Space, Tag, Typography } from 'antd';
import { BaseContext } from '../../base/Base';

const { Paragraph } = Typography;

export const ComponentPage = () => {
  const { setTitle } = use(BaseContext);
  useEffect(() => setTitle('About Components'), [setTitle]);

  return (
    <div>
      <Card style={{ marginBottom: 16 }}>
        <Paragraph style={{ marginBottom: 0 }}>
          React components are divided into <strong>container components</strong> (manage state and logic)
          and <strong>display components</strong> (handle presentation only). Ant Design provides a rich
          library of pre-built display components you can compose into any UI.
        </Paragraph>
      </Card>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title="Buttons">
            <Space wrap>
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="link">Link</Button>
              <Button danger>Danger</Button>
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Tags">
            <Space wrap>
              <Tag color="blue">Blue</Tag>
              <Tag color="green">Green</Tag>
              <Tag color="red">Red</Tag>
              <Tag color="purple">Purple</Tag>
              <Tag color="orange">Orange</Tag>
              <Tag color="geekblue">Geekblue</Tag>
            </Space>
          </Card>
        </Col>
        <Col xs={24}>
          <Card title="Alerts">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Alert message="Success — operation completed." type="success" showIcon />
              <Alert message="Info — here is some useful information." type="info" showIcon />
              <Alert message="Warning — please review before continuing." type="warning" showIcon />
              <Alert message="Error — something went wrong." type="error" showIcon />
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ComponentPage;
