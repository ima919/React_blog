/***
 * @auth: dmx
 * @time: 2020/6/17
 * @func:
 ***/
import { menuAction } from '../../../saga/actions/menu';
import { recursiveMenu } from './utils';

const initialStateSetter: IMenu = {
  breadcrumb: {},
  topMenu: [],
  sideMenu: {},
  currentSidebar: [],
  currentTopMenu: null,
}
export default function (state = initialStateSetter, action: ActionParams) {
  switch (action.type) {
    case menuAction.SET_MENU: {

      const { routes } = action.payload;
      const { topMenu, breadcrumb, sideMenu } = recursiveMenu(routes);

      return {
        ...state,
        breadcrumb,
        topMenu,
        sideMenu,
      }
    }
    case menuAction.SET_CURRENT_MENU: {
      return {
        ...state,
        ...action.payload,
        currentSidebar: state.sideMenu[action.payload.currentTopMenu] || [],
      };
    }
    default:
      return state;

  }
}