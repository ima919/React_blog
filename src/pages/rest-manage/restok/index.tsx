import React, {
    memo,
  } from 'react';
  import { Form, Button, Input, notification } from 'antd';
  import MD5 from 'crypto-js/md5';
interface IProps {

}
const { Item } = Form;

const Restapply: React.FC<IProps> = (props) => {

  return (
    <div className="login-layout-main">
    <div className='main-form'>
      <h2>欢迎登录考勤系统</h2>
      <Form
        className="main-form-box"
        // onFinish={handleLogin}
      >
        {/* ////收集值 */}
        <Item name="username">
          <Input placeholder="请输入工号" />
        </Item>
        <Item name="password">
          <Input type="password" placeholder="请输入密码" />
        </Item>
        <Item>
          <Button
            type="primary"
            className="main-form-box_button"
            htmlType="submit"
            // loading={loading}
          >
            登录
          </Button>
        </Item>
        {/* <Item>
          <div className="main-form-box_other">
            <p>其他登录方式</p>
            <div className='any'>
              <span>QQ</span>
              <span>微信</span>
              <span>GitHub</span>
            </div>
          </div>
        </Item> */}
      </Form>
    </div>
  </div>
);
};

export default memo(Restapply);