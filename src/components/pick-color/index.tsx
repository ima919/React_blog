/***
 * @auth: dmx
 * @time: 2020/7/2
 * @func: 颜色选择组件
 ***/
import React, {memo} from 'react';
import {
  SketchPicker,
} from 'react-color';

import './index.less';

interface IProps {

}

const PickColor: React.FC<IProps> = (props) => {

  return (
    <div className="pick-color">

      <SketchPicker />
    </div>
  );
};

export default memo(PickColor);
