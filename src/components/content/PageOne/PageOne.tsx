import { use, useEffect } from 'react';
import { BaseContext } from '../../base/Base';

export const ComponentPage = () => {
  const { setTitle } = use(BaseContext);
  useEffect(() => setTitle('About Components'), [setTitle]);
  return (
    <div>
      <span>React components are divided into container components and display components</span>
    </div>
  );
}

export default ComponentPage;
