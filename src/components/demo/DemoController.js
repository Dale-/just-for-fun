/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/7/16
 */

export default class DemoController {

	$onInit() {
		this.gridData = this.data.sort((v1, v2) => v1 - v2);
		return '';
	}

	add(num1, num2) {
		return (num1 + num2);
	}
}
