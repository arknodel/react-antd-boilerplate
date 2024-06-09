import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from 'antd';
import { routeUrls } from "../../routes";

import './sidebar.css'
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { FileOutlined, AccountBookOutlined, AimOutlined, HomeOutlined, MinusCircleOutlined } from "@ant-design/icons";


export const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const items: ItemType<MenuItemType>[] = [
    {
      key: routeUrls.home,
      label: "Start",
      onClick: () => navigate(routeUrls.home),
      icon: <HomeOutlined />,
    },
    {
      key: routeUrls.vite,
      label: "About Vite",
      onClick: () => navigate(routeUrls.vite),
      icon: <AimOutlined />,
    },
    {
      key: routeUrls.component,
      label: "About Components",
      onClick: () => navigate(routeUrls.component),
      icon: <AccountBookOutlined />,
    },
    {
      key: routeUrls.router,
      label: "About Router",
      onClick: () => navigate(routeUrls.router),
      icon: <FileOutlined />,
    },
    {
      key: '/notfound', // This URL doesn't exist and showcases handling 404s
      label: "Not Found",
      onClick: () => navigate("/notfound"),
      icon: <MinusCircleOutlined />
    }
  ]

  return (
    <div className="sidebar">
      <div className="padding-md text-center selectness border-normal">
        <h1 className="sidebar-title">React + Antd</h1>
      </div>

      <Menu
        theme="light"
        selectedKeys={[`${location.pathname}`]}
        mode="inline"
        className="padding-top-lg"
        items={items}
      />;
    </div>
  );
}

export default SideBar;