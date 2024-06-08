import * as React from 'react';
import { Route, Routes } from 'react-router';
const Base = React.lazy(() => import('./components/base/Base'));
const StartPage = React.lazy(() => import('./components/content/Home/Home'));
const WebpackPage = React.lazy(() => import('./components/content/PageThree/PageThree'));
const ComponentPage = React.lazy(() => import('./components/content/PageOne/PageOne'));
const RouterPage = React.lazy(() => import('./components/content/PageTwo/PageTwo'));
const NotFound = React.lazy(() => import('./components/content/NotFound/NotFound'));

export default () => {
  return (
    <Routes>
      <Route element={<Base />}>
        <Route index Component={StartPage} />
        <Route path="/vite" Component={WebpackPage} />
        <Route path="/component" Component={ComponentPage} />
        <Route path="/router" Component={RouterPage} />
        <Route path="*" Component={NotFound} />
      </Route>
    </Routes>
  );
};