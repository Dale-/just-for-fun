/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/13/16
 */

import { MENUS_CONSTANT } from './Constant';

export default class DemoController {

	constructor() {
		this.initMenu();
	}

	initMenu() {
		this.menus = MENUS_CONSTANT;
		return this.menus;
	}
}