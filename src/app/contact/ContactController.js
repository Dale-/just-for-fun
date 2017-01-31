/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/8/16
 */

import { FEEDBACKS } from './Constant';

export default class ContactController {

	constructor() {
		this.name = 'contact';
		this.selectedDuration = 'monthly';
		this.feedbacks = FEEDBACKS;
	}

	changeDuration(duration) {
		this.selectedDuration = duration;
	}

}
