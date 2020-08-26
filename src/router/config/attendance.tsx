/***
 * @auth: dmx
 * @time: 2020/7/7
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React from 'react';
import Loadable from 'react-loadable';
import RouteWithSubRouters from '../RouteWithSubRouters';
import Tag from '../../pages/blog-manage/tag';
import loadings from '../loadings';
import {
  RiseOutlined,
  LineChartOutlined,
  BarChartOutlined,
  DotChartOutlined,
} from '@ant-design/icons';

const attendance = [
  {
    // 2级级路由
    component: Tag,
    icon: <RiseOutlined />,
    name: '加班强度分析',
    path: '/overtime-intensity',
  },
  {
    // 2级级路由
    component: RouteWithSubRouters,
    icon: <BarChartOutlined />,
    name: '考勤时间段分析',
    path: '/period',
  },
  {
    // 2级级路由
    component: RouteWithSubRouters,
    icon: <DotChartOutlined />,
    name: '周末分析',
    path: '/weekend',
  },
  {
    // 2级级路由
    component: RouteWithSubRouters,
    icon: <LineChartOutlined />,
    name: '加班趋势分析',
    path: '/trend',
  }
];

export default attendance;