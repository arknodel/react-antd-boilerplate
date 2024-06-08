import {LoadingOutlined} from '@ant-design/icons';
import { Property } from 'csstype'

const main: {
  textAlign: Property.TextAlign | undefined;
  fontSize: string;
  padding: string;
  width: string;
} = {
  textAlign: 'center',
  fontSize: '16px',
  padding: '10px',
  width: '200px',
};
const loader = {
  paddingLeft: '10px',
}

export const Loading = () => {
  return (
    <div style={main}>
      <LoadingOutlined />
      <span style={loader}>Loading...</span>
    </div>
  );
}
