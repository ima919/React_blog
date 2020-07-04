/***
 * @auth: dmx
 * @time: 2020/7/4
 * @func: 是left-top布局时的 sider组件
 ***/
import React, {memo} from 'react';
import {
  Layout,
  Menu,
} from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  CodepenOutlined,
} from '@ant-design/icons';

interface IProps {
  collapsed: boolean;
}

const { Sider } = Layout;
const { Item, SubMenu } = Menu;
const LeftTopSidebar: React.FC<IProps> = (props) => {

  const { collapsed } = props;

  return (
    <Sider
      className="sidebar"
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="logo">
        <CodepenOutlined className="logo-icon" />
        <span
          className="logo-title"
        >
          dd-cms
        </span>
      </div>
      <Menu
        theme="dark"
        mode="inline"
      >
        <SubMenu
          title="嘿，我就是subMenu"
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
        </SubMenu>
        <SubMenu
          title="哟呵，我也是啊"
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
        </SubMenu>
        <SubMenu
          title="巧了，我他妈也是"
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default memo(LeftTopSidebar);