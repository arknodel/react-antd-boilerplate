import {
  CalendarOutlined,
  NotificationOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Badge, Button, Col, Input, Row, Space, Tooltip } from 'antd';

import './header.css';

export const Header = () => {
  const handleSearch = () => {
    alert('Search function has not been added yet...');
  };

  return (
    <Row align="middle" style={{ height: '64px' }}>
      <Col flex="auto">
        <Input.Search
          placeholder="Search..."
          className="header-search"
          onSearch={handleSearch}
          allowClear
        />
      </Col>
      <Col flex="none">
        <Space size="small" align="center" style={{ marginLeft: 16 }}>
          <Tooltip placement="bottom" title="Calendar">
            <Button type="text" icon={<CalendarOutlined />} />
          </Tooltip>
          <Tooltip placement="bottom" title="Notifications">
            <Badge dot>
              <Button type="text" icon={<NotificationOutlined />} />
            </Badge>
          </Tooltip>
          <Tooltip placement="bottom" title="Settings">
            <Button type="text" icon={<SettingOutlined />} />
          </Tooltip>
          <Avatar
            size="small"
            icon={<UserOutlined />}
            style={{ backgroundColor: '#1677ff', cursor: 'pointer' }}
          />
        </Space>
      </Col>
    </Row>
  );
};

export default Header;
