/***
 * @auth: frog
 * @time: 2020/7/6
 * @func: 辅助生成导航所需数据的工具函数
 ***/

const breadcrumb = {};////面包屑涉及全局，所以定义成全局变量

/*
* 抽离逻辑出来
* 协助recursiveMenu 处理下级路由
* @params: rootPath 跟路径
* */
export const createMenu = (rootPath, routes, permissions) => {
  const menu = [];

  routes.forEach(subMenu => {
    const underMenu = [];
    if( subMenu.routes ) {
      // 又要去遍历这个对象
      subMenu.routes.forEach(under => {
        // 在这里边处理
        const basePath = rootPath + subMenu.path;
        // if( permissions ) { // 处理权限 }
        if( under.path ) {
          // 处理面包屑
          breadcrumb[basePath + under.path] = {
            icon: under.icon,
            name: under.name,
          }
          // 处理underMenu
          underMenu.push({
            icon: under.icon,
            name: under.name,
            path: basePath + under.path,
          });
        }
        if( under.routes ) {
          under.routes.forEach(lastRoute => {
            if( lastRoute.path ) {
              breadcrumb[basePath + under.path + lastRoute.path] = {
                icon: lastRoute.icon,
                name: lastRoute.name,
              }
            }
          })
        }

        if( underMenu.length !== 0 ) {
          menu.push({////推到父级
            icon: subMenu.icon,
            name: subMenu.name,
            path: `${rootPath}${subMenu.path}`,////用模板字符串拼起来
            routes: underMenu,
          });
        }
        // 还需要在这里，处理 面包屑
        breadcrumb[`${rootPath}${subMenu.path}`] = {
          name: subMenu.name,
          icon: subMenu.icon,
         //// path: subMenu.path,只有两级均需显示页面时加上路径
        }

      })
    } else {
      menu.push({
        icon: subMenu.icon,
        name: subMenu.name,
        path: `${rootPath}${subMenu.path}`,
      });

      // 还需要在这里，处理 面包屑
      breadcrumb[`${rootPath}${subMenu.path}`] = {
        name: subMenu.name,
        icon: subMenu.icon,
      }
    }
  })

  return menu;
}


/*
* 处理数据，返回路由所需数据的函数
* @params: routes ===> 路由对象
* @params: permissions ===> 后端返回给咱们的权限码 是一个数组。
* */
export const recursiveMenu = (routes, permissions = []) => {

////数据结构，涉及布局改变，重要！！！

  const topMenu = [];////存放首页、个人中心等，用数组维持
  const sideMenu = {};

  routes.forEach(route => {////遍历
    const path = route.path;////每一项的path都拿出来
    topMenu.push({
      name: route.name,
      path: route.path || '',
      icon: route.icon,
    });
    if( route.routes ) {////过滤掉首页，他不需要面包屑，不存在routes
      // 说明应该处理 breadcrumb
      const sidebar = createMenu(path, route.routes);
      sideMenu[path] = sidebar;

      breadcrumb[path] = {
        name: route.name,
        icon: route.icon,
      }
    }
  });

  return {
    topMenu,
    breadcrumb,
    sideMenu,
  }

}
