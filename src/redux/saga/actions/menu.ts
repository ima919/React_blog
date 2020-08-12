/***
 * @auth: dmx
 * @time: 2020/7/6
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import { createRoutine, promisifyRoutine } from 'redux-saga-routines';
import extendRoutine from '../extendRoutine';
import NAME_SPACE from '../../../constants/name-spce';

// 处理路由导航数据
export const menuAction = extendRoutine(
  createRoutine(`${NAME_SPACE.MENU}`),////第一个参数
  [
    {
      type: 'SET_MENU',////第二个参数是数组
      action: 'setMenu',
    },
    {
      type: 'SET_CURRENT_MENU',
      action: 'setCurrentMenu',
    },
  ////更改布局未写
    {
      type: 'SET_THEME',
      action: 'setTheme',
    },
    {
      type: 'SET_PRIMARY_COLOR',
      action: 'setPrimaryColor',
    },
    {
      type: 'SET_DRAWER',
      action: 'setDrawer',
    },
  ]
)