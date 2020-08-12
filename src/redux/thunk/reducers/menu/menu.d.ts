/////声明文件
////数组与对象的选择：选择对象，通过config的path
interface IMenu {
  breadcrumb:{
    [key: string]: {
      icon: React.ReactNode;
      name: string;
    }
  },
  topMenu: Array<IMenuItem>;
  sideMenu: {
    [key: string]: ISidebar;
  };
  currentSidebar: ISidebar;////数组，当前需要展示的数据
  currentTopMenu: string | null;////首页没有下级路由
  theme: SiderProps;
  primaryColor: string;
  drawer: boolean;
}

type IMenuItem = {////定义接口
  name: string;
  path: string;
  icon?: React.ReactNode;
}

type ISidebar = Array<ISidebarItem>;

type ISidebarItem = {
  path: string;
  name: string;
  icon: React.ReactNode;
  routes?: Array<IMenuItem>;////考虑嵌套的下级路由
}