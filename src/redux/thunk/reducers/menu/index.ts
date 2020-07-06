/***
 * @auth: dmx
 * @time: 2020/6/17
 * @func:
 ***/
import { menuAction } from '../../../saga/actions/menu';
import { recursiveMenu } from './utils';

const initialStateSetter: IMenu = {
  breadcrumb: {},
}
export default function (state = initialStateSetter, action: ActionParams) {
  switch (action.type) {
    case menuAction.SET_MENU: {

      const { routes } = action.payload;
      const result = recursiveMenu(routes);


      return {
        ...state,
        breadcrumb: {},
      }
    }
    default:
      return state;

  }
}