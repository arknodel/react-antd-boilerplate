import { use, useEffect } from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { BaseContext } from '../../base/Base';

export const NotFoundPage = () => {
  const { setTitle } = use(BaseContext);
  const navigate = useNavigate();
  useEffect(() => setTitle('Not Found'), [setTitle]);

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      }
    />
  );
};

export default NotFoundPage;
