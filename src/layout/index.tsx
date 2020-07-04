/***
 * @auth: dmx
 * @time: 2020/6/20
 * @func: 布局文件入口
 ***/
import React, {
  memo,
  useState,
} from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import TopMenu from './components/top-menu';
import RightMenu from './components/right-menu';
import LeftTopSidebar from './left-top';


import './index.less';


const { Header, Content } = Layout;

interface IProps {

}

const BlogLayout: React.FC<IProps> = (props) => {

  const [collapsed, setCollapsed] = useState(false);


  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="layout">
      <LeftTopSidebar
        collapsed={collapsed}
      />
      <Layout className="layout-header">
        <Header
          className="layout-header-background"
        >
          <div className="layout-header-top">
            <div className='trigger'>
              {
                React.createElement(
                  collapsed
                    ? MenuUnfoldOutlined
                    : MenuFoldOutlined,
                  {onClick: toggle}
                  )
              }
            </div>
            <div className="box1">
              <TopMenu />
            </div>
            <div className="box2">
              <RightMenu />
            </div>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default memo(BlogLayout);