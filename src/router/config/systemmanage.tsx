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
  TeamOutlined,
  UserSwitchOutlined,
  ProfileOutlined,
} from '@ant-design/icons';

const systemmanage = [
  {
    // 2级级路由
    component: Tag,
    icon: <TeamOutlined />,
    name: '角色管理',
    path: '/role-manage',
  },
  {
    // 2级级路由
    component: RouteWithSubRouters,
    icon: <UserSwitchOutlined />,
    name: '用户管理',
    path: '/user-manage',
  },
  {
    // 2级级路由
    component: RouteWithSubRouters,
    icon:<ProfileOutlined />,
    name: '菜单管理',
    path: '/menu-manage',
  }
 
];

export default systemmanage;