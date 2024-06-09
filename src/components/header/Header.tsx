import { 
  CalendarOutlined, 
  NotificationOutlined, 
  SettingOutlined 
} from '@ant-design/icons';
import {
  Row,
  Col,
  Badge,
  Tooltip,
  Input
} from 'antd';

import './header.css';

export const Header = () => {

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      alert('Search function has not been added yet...')
    }
  }

  return (
    <Row>
      <Col span={12}>
        <Input placeholder='Search...' className="header-search" onKeyDown={handleSearch} />
      </Col>

      <Col span={10} offset={2} style={{textAlign: 'right'}}>
        <Tooltip placement="bottom" title="Calendar">
          <CalendarOutlined className="padding-lr-md font-md pointer-hover" />
        </Tooltip>

        <Tooltip placement="bottom" title="Notify">
          <Badge dot className="padding-lr-md">
            <NotificationOutlined className="font-md pointer-hover" />
          </Badge>
        </Tooltip>

        <Tooltip placement="bottom" title="Set up">
          <SettingOutlined className="padding-lr-md font-md pointer-hover" />
        </Tooltip>
      </Col>

    </Row>
  );
}

export default Header;