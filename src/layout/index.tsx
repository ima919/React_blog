/***
 * @auth: dmx
 * @time: 2020/6/20
 * @func: 布局文件入口
 ***/
import React, {
  memo,
  useState,
  useEffect,
} from 'react';
import {RouteConfigComponentProps} from 'react-router-config';
import { renderRoutes } from 'react-router-config';
import { useSelector } from 'react-redux';
import useActions from '../hooks/useActions';
import { Layout, Spin } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import TopMenu from './components/top-menu';
import RightMenu from './components/right-menu';
import LeftTopSidebar from './left-top';
import BreadcrumbComponent from './components/breadcrumb';
import { menuAction } from '../redux/saga/actions/menu';


import './index.less';


const { Header, Content } = Layout;

interface IProps extends RouteConfigComponentProps{}

const BlogLayout: React.FC<IProps> = (props) => {

  const { route, history, location } = props;
  const { topMenu, currentSidebar }  = useSelector((state: IState) => state.menu);
  const [collapsed, setCollapsed] = useState(false);
  const actions = useActions({
    setMenu: menuAction.setMenu,
  })

  useEffect(() => {

    if( route ) {
      actions.setMenu({
        routes: route.routes,
      });
    }
  }, []);
  if( topMenu.length === 0 ) return <Spin />

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="layout">
      <LeftTopSidebar
        collapsed={collapsed}
        history={history}
        location={location}
      />
      <Layout className="layout-header">
        <Header
          className="layout-header-background"
        >
          <div className="layout-header-top">
            {
              <div className='trigger'>
                {
                  currentSidebar.length !== 0
                  && React.createElement(
                    collapsed
                      ? MenuUnfoldOutlined
                      : MenuFoldOutlined,
                    {onClick: toggle}
                  )
                }
              </div>
            }
            <div className="box1">
              <TopMenu
                history={history}
                location={location}
              />
            </div>
            <div className="box2">
              <RightMenu />
            </div>
          </div>
        </Header>
        <Content
          className="layout-content"
        >
          <BreadcrumbComponent history={history} location={location} />
          {
            renderRoutes(route?.routes)
          }
        </Content>
      </Layout>
    </Layout>
  );
};

export default memo(BlogLayout);