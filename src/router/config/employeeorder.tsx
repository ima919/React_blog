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
  PayCircleOutlined,
  AuditOutlined,
  ShopOutlined,
} from '@ant-design/icons';

const employeeorder = [
  {
    // 2级级路由
    component: Tag,
    icon: <PayCircleOutlined />,
    name: '餐补统计',
    path: '/meal-allowance',
  },
  {
    // 2级级路由
    component: RouteWithSubRouters,
    icon: <AuditOutlined />,
    name: '申请订餐',
    path: '/meal-apply',
  },
  {
    // 2级级路由
    component: RouteWithSubRouters,
    icon:<ShopOutlined />,
    name: '确认订餐',
    path: '/meal-ok',
  }
 
];

export default employeeorder;