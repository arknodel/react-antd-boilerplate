import React, { useContext, useEffect } from 'react';
import {BaseContext} from '../../base/Base';

export const ComponentPage = () => {
  const baseContext = useContext(BaseContext);
  useEffect(() => baseContext.setTitle('About Components'));
  return (
    <div>
      <span>React components are divided into container components and display components</span>
    </div>
  );
}

export default ComponentPage;