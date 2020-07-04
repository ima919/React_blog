/***
 * @auth: dmx
 * @time: 2020/7/2
 * @func: 顶部右侧布局
 ***/
import React, {
  memo,
  useCallback,
} from 'react';
import PickerColor from '../../../components/pick-color';
import UserInfo from './UserInfo';

import './index.less';

interface IProps {

}

const RightMenu: React.FC<IProps> = (props) => {

  const handleColorChange = useCallback((color) => {
    console.log(color);
  }, []);

  return (
    <div className="right-menu">
      <PickerColor
        themColor={"#ce13a0"}
        onChangeComplete={handleColorChange}
      />
      <div className="language">
        简体中文
      </div>
      <UserInfo />
    </div>
  );
};

export default memo(RightMenu);
