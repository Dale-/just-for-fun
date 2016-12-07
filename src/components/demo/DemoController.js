/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/7/16
 */

export default class DemoController {

	constructor() {
		console.log(1);
	}

	$onInit() {
		this.gridData = this.data.sort((v1, v2) => v1 - v2);
	}

}
