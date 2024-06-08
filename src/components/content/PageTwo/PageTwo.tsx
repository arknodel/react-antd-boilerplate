import { useContext, useEffect } from 'react';
import {BaseContext} from '../../base/Base';

export const RouterPage = () => {
  const baseContext = useContext(BaseContext);
  useEffect(() => baseContext.setTitle('About Router'));
  const code = `
  import React from 'react';
  import {Route} from 'react-router';
  import Base from 'components/base/Base';
  import Home from 'components/home/Home';

  import WebpackPage from 'components/content/WebpackPage';
  import ComponentPage from 'components/content/ComponentPage';
  import RouterPage from 'components/content/RouterPage';
  import AntdPage from 'components/content/AntdPage';

  export default (
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/webpack" element={<WebpackPage />} />
      <Route path="/component" element={<ComponentPage />} />
      <Route path="/router" element={<RouterPage />} />
      <Route path="/antd" element={<AntdPage />} />
    </Route>
  );
    `;

  return (
    <div>
      <div className="margin-bottom-md">React Router is a complete React routing solution</div>
      <div className="margin-bottom-md">React Router keeps the UI in sync with the URL. It has a simple API and powerful features such as code buffer loading, dynamic route matching, and build-correct location transition handling. The URL should be your first thought, not an afterthought.</div>

      <pre>{code}</pre>
    </div>
  );
};

export default RouterPage;