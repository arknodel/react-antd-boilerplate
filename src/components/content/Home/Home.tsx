import { useContext, useEffect, useState } from 'react';
import {
  Button
} from 'antd';
import classNames from 'classnames';
import { BaseContext } from '../../base/Base';
import './home.css';

export const StartPage = () => {
  const baseContext = useContext(BaseContext);
  useEffect(() => baseContext.setTitle('Start'));
  const [state, setState] = useState({colorStatus: true});

  const handleChangeColor = () => {
    setState({
      colorStatus: !state.colorStatus,
    })
  };

  const {
    colorStatus
  } = state;

  return (
    <div>
      <div className="margin-bottom-md">
        <Button type="primary" onClick={handleChangeColor}>Click here to change text color</Button>
        <span className={classNames("margin-left-md", {"text-red": !colorStatus})}>This text will change color</span>
      </div>

      <div className="margin-bottom-md">
        use <span className="code-text">setState</span> to modify the state of the current Component
      </div>

      {/* <div>
        <Button onClick={() => inc()}>+</Button>
        <span className="margin-left-md margin-right-md">{counter}</span>
        <Button onClick={() => dec()}>-</Button>
      </div> */}

      <div className="margin-bottom-md margin-top-md">
        <span className="code-text">Redux</span>: To modify stat, you can open the console to view action and Log
      </div>
    </div>
  );
}

export default StartPage;