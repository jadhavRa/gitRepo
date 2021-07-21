/***  Generated file, do not change.  */
import { MenuComponent } from './menu/menu';
import { loginred_PhonePortrait } from '../pages/loginred/PhonePortrait/loginred';
import { loginred_Desktop } from '../pages/loginred/Desktop/loginred';
export class Screens {
  static declarations = [
    MenuComponent,
    loginred_PhonePortrait,
    loginred_Desktop
  ];
  static mapping = {
    'loginred': {
      PhonePortrait: loginred_PhonePortrait,
      Desktop: loginred_Desktop
    }
  }
}