import { useContext, useEffect } from 'react';
import {BaseContext} from '../../base/Base';
import { redirect, useSearchParams } from 'react-router-dom';

export const NotFoundPage = () => {
  const baseContext = useContext(BaseContext);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    baseContext.setTitle('Not Found');

    const fromPage = searchParams.get("from");
    if (fromPage) {
      const url = new URL(fromPage);
      if (url.hostname === window.location.hostname) {
        redirect(url.pathname + url.search);
      }
    }
  }, [searchParams]);
  return (
    <div>
      <span>Unable to find the page you're looking for.</span>
    </div>
  );
}

export default NotFoundPage;