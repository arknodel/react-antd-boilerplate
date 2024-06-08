import { useContext, useEffect } from 'react';
import {BaseContext} from '../../base/Base';

export const NotFoundPage = () => {
  const baseContext = useContext(BaseContext);
  useEffect(() => {
    baseContext.setTitle('Not Found');
  }, []);
  return (
    <div>
      <span>Unable to find the page you're looking for.</span>
    </div>
  );
}

export default NotFoundPage;