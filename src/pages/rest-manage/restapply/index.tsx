import React, {
  memo,
} from 'react';
import { Form, Button, Input, notification, Table, Tag, Space, DatePicker} from 'antd';
import MD5 from 'crypto-js/md5';
import tag from '../../blog-manage/tag';
const { RangePicker } = DatePicker;
const { Column } = Table;

const data = [
  {
    key: '1',
    name: '王一博',
    department: '工艺设计部',
    date: '2020-05-04',
    days: '1',
  },
  {
    key: '2',
    name: '刘诗诗',
    department: '工艺设计部',
    date: '2019-12-06',
    days: '0.5',
  },
  {
    key: '3',
    name: '吴奇隆',
    department: '工艺设计部',
    date: '2020-03-07',
    days: '1',
  },
];
interface IProps {

}
const { Item } = Form;

const Restapply: React.FC<IProps> = (props) => {

return (
  <div>
  <Space direction="vertical" size={12}>
    <RangePicker />
  </Space>
  
  <Button type="primary" >申请调休</Button>
   
    <Table dataSource={data}>
    <Column title="姓名" dataIndex="name" key="name" />
      {/* <Column title="First Name" dataIndex="firstName" key="firstName" /> */}
      {/* <Column title="Last Name" dataIndex="lastName" key="lastName" /> */}
    <Column title="部门" dataIndex="department" key="department" />
    <Column title="日期" dataIndex="date" key="date" />
    <Column title="天数" dataIndex="days" key="days" />
  </Table>
  </div>
);
};

export default memo(Restapply);