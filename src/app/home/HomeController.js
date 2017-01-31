/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/7/16
 */

import { EVALUTE_DATAS } from './Constant';

export default class HomeController {

	constructor() {
		this.name = 'Home';
		this.isShowModal = false;
		this.evaluteDatas = EVALUTE_DATAS;
	}

	openOrCloseModal() {
		this.isShowModal = !this.isShowModal;
	}
}
