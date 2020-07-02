/***
 * @auth: dmx
 * @time: 2020/7/2
 * @func: 顶部右侧布局
 ***/
import React, {memo} from 'react';
import PickerColor from '../../../components/pick-color';

import './index.less';

interface IProps {

}

const RightMenu: React.FC<IProps> = (props) => {

  return (
    <div className="right-menu">
      <PickerColor />
      <div className="language">
        简体中文
      </div>
      <div className='user'>

      </div>
    </div>
  );
};

export default memo(RightMenu);
