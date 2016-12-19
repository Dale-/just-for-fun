/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/13/16
 */

import { MENUS_CONSTANT } from './Constant';
import { Inject } from 'angular-es-utils/decorators';

@Inject('$state')
export default class DemoController {

	constructor() {
		this.initMenu();
	}

	initMenu() {
		this.selectedMenu = 'Home';
		this.menus = MENUS_CONSTANT;
		return this.menus;
	}
}
