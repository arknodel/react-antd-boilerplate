import { LoadingOutlined } from '@ant-design/icons';

export const Loading = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '60px 0' }}>
      <LoadingOutlined style={{ fontSize: 24 }} />
      <span style={{ fontSize: 16 }}>Loading...</span>
    </div>
  );
};
