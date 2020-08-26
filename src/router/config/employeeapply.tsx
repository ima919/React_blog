 /***
* @auth: dmx
* @time: 2020/7/7
* @func:
* @params:
* @return:
* @updateTime:
***/
import React from 'react';
import RouteWithSubRouters from '../RouteWithSubRouters';
import Tag from '../../pages/blog-manage/tag';
import Loadable from "react-loadable";
import loadings from '../loadings';
import {
  SnippetsOutlined,
  FormOutlined,
  CheckSquareOutlined,
  ExclamationCircleOutlined,
  CarOutlined,
  SmileOutlined,
} from '@ant-design/icons';

const employeeapply = [
 {
   // 2级级路由
   component: RouteWithSubRouters,
   icon: <SnippetsOutlined />,
   name: '调休管理',
   path: '/rest-manage',
   routes: [
     {
       // 3级级路由
       component: RouteWithSubRouters,
       icon: <FormOutlined />,
       name: '调休申请',
       path: '/restapply',  
       routes: [
        {
          // 4级级路由
          component: Loadable({
            loader: () => import('../../pages/rest-manage/restapply'),
            ...loadings,
          }),
        }    
      ]  
     },
     {
      // // 3级级路由
      component: RouteWithSubRouters,
      icon: <CheckSquareOutlined />,
      name: '调休审批',
      path: '/restok',
      routes: [
        {
          // 4级级路由
          component: Loadable({
            loader: () => import('../../pages/rest-manage/restok'),
            ...loadings,
          }),
        }    
      ]  
    }
   
   ]
 },
 {
   // 2级级路由
   component: RouteWithSubRouters,
   icon: <SnippetsOutlined />,
   name: '产检假管理',
   path: '/maternity-manage',
   routes: [
     {
       // 3级级路由
       component: RouteWithSubRouters,
       icon:<FormOutlined />,
       name: '产检假申请',
       path: '/maternity-apply',
       routes: [
         {
           // 4级级路由
           component: Loadable({
             loader: () => import('../../pages/blog-manage/tag/CreateTag'),
             ...loadings,
           }),
         },
         {
           path: '/create',
           icon: '',
           name: '新建计划',
           component: Loadable({
             loader: () => import('../../pages/blog-manage/tag/CreateTag'),
             ...loadings,
           }),
         },
       ]
     },
     {
      // 3级级路由
      component: RouteWithSubRouters,
      icon: <CheckSquareOutlined />,
      name: '产检假审批',
      path: '/maternity-ok',
      routes: [
        {
          // 4级级路由
          component: Loadable({
            loader: () => import('../../pages/blog-manage/tag/CreateTag'),
            ...loadings,
          }),
        },
        {
          path: '/create',
          icon: '',
          name: '新建计划',
          component: Loadable({
            loader: () => import('../../pages/blog-manage/tag/CreateTag'),
            ...loadings,
          }),
        },
      ]
    }
   ]
 },
 {
  // 2级级路由
  component: RouteWithSubRouters,
  icon: <ExclamationCircleOutlined />,
  name: '考勤异常',
  path: '/abnormalapply',
 
},
{
  // 2级级路由
  component: RouteWithSubRouters,
  icon: <CarOutlined />,
  name: '出差申请',
  path: '/tripapply',
  
},
{
  // 2级级路由
  component: RouteWithSubRouters,
  icon: <SmileOutlined />,
  name: '休假申请',
  path: '/holidayapply',
  
}
];

export default employeeapply;