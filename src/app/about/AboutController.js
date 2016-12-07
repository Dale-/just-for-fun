/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/7/16
 */

export default class AboutController {

	constructor() {
		this.name = 'about';
		this.data = [
			{name: 'Dale', age: 18, gender: 'female'},
			{name: 'Damon', age: 120, gender: 'male'},
			{name: 'stefan', age: 26, gender: 'vampire'}
		];
		this.columnsDef = [
			{displayName: 'Name', field: 'name'},
			{displayName: 'Age', field: 'age'},
			{displayName: 'Sex', field: 'gender'}
		];
	}

}
