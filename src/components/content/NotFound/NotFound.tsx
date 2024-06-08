import { useContext, useEffect } from 'react';
import {BaseContext} from '../../base/Base';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const NotFoundPage = () => {
  const baseContext = useContext(BaseContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    baseContext.setTitle('Not Found');

    const fromPage = searchParams.get("from");
    if (fromPage) {
      const url = new URL(fromPage);
      if (url.hostname === window.location.hostname) {
        navigate(url.pathname + url.search, { replace: true });
      }
    }
  }, [searchParams, navigate]);
  return (
    <div>
      <span>Unable to find the page you're looking for.</span>
    </div>
  );
}

export default NotFoundPage;