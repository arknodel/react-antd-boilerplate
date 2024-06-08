import { Link, useLocation } from "react-router-dom";
import { Menu } from 'antd';

import './sidebar.css'


export const SideBar = () => {
  const location = useLocation();
  const items = [
    {
      key: '/',
      icon: <Link to="/">Start</Link>,
    },
    {
      key: '/vite',
      icon: <Link to="/vite">About Vite</Link>,
    },
    {
      key: '/component',
      icon: <Link to="/component">About Components</Link>,
    },
    {
      key: '/router',
      icon: <Link to="/router">About Router</Link>,
    },
    {
      key: '/notfound',
      icon: <Link to="/notfound">Not Found</Link>
    }
  ]

  return (
    <div className="sidebar">
      <div className="padding-md text-center selectness border-normal">
        <h1 className="sidebar-title">ReactStartKit</h1>
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