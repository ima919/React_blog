/***
 * @auth: frog
 * @time: 2020/7/6
 * @func: 辅助生成导航所需数据的工具函数
 ***/

const breadcrumb = {};

/*
* 抽离逻辑出来
* 协助recursiveMenu 处理下级路由
* @params: rootPath 跟路径
* */
export const createMenu = (rootPath, routes, permissions) => {

  routes.forEach(subMenu => {
    if( subMenu.routes ) {
      // 又要去遍历这个对象
      subMenu.routes.forEach(under => {
        // 在这里边处理
        const basePath = rootPath + subMenu.path;
        // if( permissions ) { // 处理权限 }
        if( under.path ) {
          breadcrumb[basePath + under.path] = {
            icon: under.icon,
            name: under.name,
          }
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
      })
    }
  })

  return {

  }
}


/*
* 处理数据，返回路由所需数据的函数
* @params: routes ===> 路由对象
* @params: permissions ===> 后端返回给咱们的权限码 是一个数组。
* */
export const recursiveMenu = (routes, permissions = []) => {

  routes.forEach(route => {
    const path = route.path;
    if( route.routes ) {
      // 说明应该处理 breadcrumb
      createMenu(path, route.routes);

      breadcrumb[path] = {
        name: route.name,
        icon: route.icon,
      }
      console.log(breadcrumb);
    }
  });

  return {
  }

}
