/***
 * @auth: dmx
 * @time: 2020/6/20
 * @func:项目，面板页
 ***/
import React, {memo} from 'react';
import { Calendar } from 'antd';

interface IProps {

}

function onPanelChange(value:any, mode:any) {
  console.log(value.format('YYYY-MM-DD'), mode);
}


const Dashboard: React.FC<IProps> = (props) => {

  return (
   
    <div>
    <Calendar onPanelChange={onPanelChange} />, 
    </div>
  );
};

export default memo(Dashboard);