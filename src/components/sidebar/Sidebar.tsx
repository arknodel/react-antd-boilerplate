import { Link, useLocation } from "react-router-dom";
import { Menu } from 'antd';
import { routeUrls } from "../../routes";

import './sidebar.css'


export const SideBar = () => {
  const location = useLocation();
  const items = [
    {
      key: routeUrls.home,
      icon: <Link to={routeUrls.home}>Start</Link>,
    },
    {
      key: routeUrls.vite,
      icon: <Link to={routeUrls.vite}>About Vite</Link>,
    },
    {
      key: routeUrls.component,
      icon: <Link to={routeUrls.component}>About Components</Link>,
    },
    {
      key: routeUrls.router,
      icon: <Link to={routeUrls.router}>About Router</Link>,
    },
    {
      key: '/notfound', // This URL doesn't exist and showcases handling 404s
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