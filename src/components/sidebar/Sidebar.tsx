import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { routeUrls } from '../../routes';
import './sidebar.css';
import { ItemType, MenuItemType } from 'antd/es/menu/interface';
import {
  AppstoreOutlined,
  BranchesOutlined,
  CodeOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';

interface SideBarProps {
  collapsed: boolean;
}

export const SideBar = ({ collapsed }: SideBarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const items: ItemType<MenuItemType>[] = [
    {
      key: routeUrls.home,
      label: 'Home',
      onClick: () => navigate(routeUrls.home),
      icon: <HomeOutlined />,
    },
    {
      key: routeUrls.vite,
      label: 'About Vite',
      onClick: () => navigate(routeUrls.vite),
      icon: <ThunderboltOutlined />,
    },
    {
      key: routeUrls.component,
      label: 'About Components',
      onClick: () => navigate(routeUrls.component),
      icon: <AppstoreOutlined />,
    },
    {
      key: routeUrls.router,
      label: 'About Router',
      onClick: () => navigate(routeUrls.router),
      icon: <BranchesOutlined />,
    },
    {
      key: '/notfound',
      label: 'Not Found',
      onClick: () => navigate('/notfound'),
      icon: <QuestionCircleOutlined />,
    },
  ];

  return (
    <div className="sidebar">
      <div className={`sidebar-logo${collapsed ? ' sidebar-logo-collapsed' : ''}`}>
        <CodeOutlined className="sidebar-logo-icon" />
        {!collapsed && <span className="sidebar-logo-text">React + Antd</span>}
      </div>
      <Menu
        theme="light"
        selectedKeys={[location.pathname]}
        mode="inline"
        style={{ border: 'none', marginTop: 8 }}
        items={items}
      />
    </div>
  );
};

export default SideBar;
