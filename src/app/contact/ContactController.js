/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/8/16
 */

import { FEEDBACKS, VERSION_INFOS, FEATURE } from './Constant';

export default class ContactController {

	constructor() {
		this.name = 'contact';
		this.selectedDuration = 'monthly';
		this.feedbacks = FEEDBACKS;
		this.initVersion();
	}

	initVersion() {
		this.feature = FEATURE;
		this.versionInfos = VERSION_INFOS;
		this.versionInfos.forEach(item => {
			const flagFeature = item.noFeature;
			item.feature = this.feature;
			flagFeature.forEach(index => {
				item.feature[index].noFeature = 'nope';
			});
		});
	}

	changeDuration(duration) {
		this.selectedDuration = duration;
	}

}
