import { use, useEffect } from 'react';
import { BaseContext } from '../../base/Base';

export const NotFoundPage = () => {
  const { setTitle } = use(BaseContext);
  useEffect(() => {
    setTitle('Not Found');
  }, [setTitle]);
  return (
    <div>
      <span>Unable to find the page you're looking for.</span>
    </div>
  );
}

export default NotFoundPage;
