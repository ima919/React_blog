import React from 'react';
import Loadable from 'react-loadable';
import Auth from './Auth';
import Dashboard from '../pages/dashboard/idnex';
import BlogLayout from '../layout';
import RouteWithSubRouters from './RouteWithSubRouters';
import blog from './config/blog';
import person from './config/person';
import employeeapply from './config/employeeapply';
import loadings from './loadings';
import {
  DiffOutlined,
  BoldOutlined,
  DashboardOutlined,
} from '@ant-design/icons';
import { apply } from 'redux-saga/effects';

export default [
  {
    // 顶级路由 是一个单纯的路基组件，没有任何icon name这些和路由导航相关的东西
    // 路由鉴权 不管什么情况，都是需要走这个组件的 都是必须先过这个组件的关卡
    ////路由鉴权确定你可以访问的内容

    component: Auth,////auth为路由鉴权组件
    routes: [
      {
        // 1级级路由
        component: Loadable({
          loader: () => import('../pages/login'),
          ...loadings,
        }),
        path: '/login',
      },
      {
        // 404
        path: '/404',
        component: Loadable({
          loader: () => import('../components/not-found/NotFound'),
          ...loadings,
        }),
      },
      {
        // 403 暂无权限
        path: '/403',
        component: Loadable({
          loader: () => import('../components/not-found/NotFound'),
          ...loadings,
        }),
      },
      {
        path: '/',
        component: BlogLayout,
        routes: [
          {
            // 1级级路由
            component: Dashboard,////pages底下dashboard文件夹
            icon: <DashboardOutlined />,
            name: '首页',
            path: '/dashboard',
          },
          // 还有一个404 的页面，
         
          {

            // 1级级路由
            component: RouteWithSubRouters,////会判断要不要渲染第二层菜单
            icon: <DiffOutlined  />,
            name: '博客管理',
            path: '/article-manage',
            routes: blog,
          },
        
          {
            // 1级级路由
            component: RouteWithSubRouters,
            icon: <BoldOutlined />,
            name: '个人中心', // 因为个人中心有很多模块: 记账系统， plan模块, 知识管理
            path: '/person',
            routes: person,
          },
          {
            // 1级级路由
            component: RouteWithSubRouters,
            icon: <BoldOutlined />,
            name: '员工申请', // 因为个人中心有很多模块: 记账系统， plan模块, 知识管理
            path: '/employeeapply',
            routes: employeeapply,
          },
          {
            // 1级级路由
            component: RouteWithSubRouters,
            icon: <BoldOutlined />,
            name: '考勤分析', // 因为个人中心有很多模块: 记账系统， plan模块, 知识管理
            path: '/person',
            routes: person,
          },
          {
            // 1级级路由
            component: RouteWithSubRouters,
            icon: <BoldOutlined />,
            name: '员工订餐', // 因为个人中心有很多模块: 记账系统， plan模块, 知识管理
            path: '/person',
            routes: person,
          }
        ],
      },
    ]
  }
];