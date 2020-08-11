 /***
* @auth: dmx
* @time: 2020/7/7
* @func:
* @params:
* @return:
* @updateTime:
***/
import RouteWithSubRouters from '../RouteWithSubRouters';
import Tag from '../../pages/blog-manage/tag';
import Loadable from "react-loadable";
import loadings from '../loadings';

const employeeapply = [
 {
   // 2级级路由
   component: RouteWithSubRouters,
   icon: '',
   name: '调休管理',
   path: '/rest-manage',
   routes: [
     {
       // 3级级路由
       component: RouteWithSubRouters,
       icon: '',
       name: '调休申请',
       path: '/restapply',    
     },
    //  {
    //   // // 3级级路由
    //   component: RouteWithSubRouters,
    //   icon: '',
    //   name: '调休审批',
    //   path: '/restok',
    // },
    // {
    //   // // 3级级路由
    //   component: RouteWithSubRouters,
    //   icon: '',
    //   name: '调休审批',
    //   path: '/restok',
    // },
   ]
 },
 {
   // 2级级路由
   component: RouteWithSubRouters,
   icon: '',
   name: '产检假管理',
   path: '/maternity-manage',
   routes: [
     {
       // 3级级路由
       component: RouteWithSubRouters,
       icon: '',
       name: '近期TODO',
       path: '/object',
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
   ]
 },
 {
  // 2级级路由
  component: RouteWithSubRouters,
  icon: '',
  name: '考勤异常',
  path: '/abnormalapply',
  routes: [
    {
      // 3级级路由
      component: RouteWithSubRouters,
      icon: '',
      name: '近期TODO',
      path: '/object',
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
  ]
},
{
  // 2级级路由
  component: RouteWithSubRouters,
  icon: '',
  name: '出差申请',
  path: '/tripapply',
  
},
{
  // 2级级路由
  component: RouteWithSubRouters,
  icon: '',
  name: '休假申请',
  path: '/holidayapply',
  
}
];

export default employeeapply;