import { 
  CalendarOutlined, 
  NotificationOutlined, 
  SettingOutlined 
} from '@ant-design/icons';
import {
  Row,
  Col,
  Badge,
  Tooltip
} from 'antd';

import './header.css';

export const Header = () => {

  const handleSearch = (e: any) => {
    if (e.which === 13) {
      alert('Search function has not been added yet...')
    }
  }

  return (
    <Row align="middle" className="container padding-lr-lg">
      <Col span={2}>
        <input
          type="text"
          placeholder="Search..."
          className="header-search"
          onKeyDown={handleSearch}
        />
      </Col>

      <Col span={8} offset={14} className="pull-right">
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