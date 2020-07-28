/***
 * @auth: dmx
 * @time: 2020/6/20
 * @func: 返回具体的路由导航
 ***/
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { RouteConfigComponentProps } from 'react-router-config';

export default function (props: RouteConfigComponentProps) {
  const { route, match } = props;
  
  if( route ) {

    if( route.routes ) {
      return (
        <Switch>
          {
            route.routes.map( (r, i) => {////r就是router（config里边定义的对象），i是number
              return (
                <Route
                  key={r.key || i}////key router.config会提供
                  // 路径实际上是被拼凑出来的。
                  // 拼起来就是  /a/b/c/create
                  path={`${match.path}${r.path || ''}`}
                  exact={r.exact}
                  strict={r.strict}
                  render={(props: RouteConfigComponentProps) => {
                    if( r.render ) {
                      return r.render({...props, route: r});
                    }
                    if( r.component ) {
                      return <r.component {...props} route={r}  />
                    }

                    return null;
                  }}
                />
              )
            })
          }
        </Switch>
      )
    }

  }

  return null;
}
