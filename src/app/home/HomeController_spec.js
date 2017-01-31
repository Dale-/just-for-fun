/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 2/1/17
 */

import HomeController from './HomeController';

describe('HomeController', () => {

	let home = null;

	beforeEach(() => {
		home = new HomeController();
	});

	afterEach(() => {
		home = null;
	});

	it('constructor', () => {
		expect(home.name).toEqual('Home');
		expect(home.isShowModal).toEqual(false);
	});

	it('openOrCloseModal', () => {
		home.openOrCloseModal();
		expect(home.isShowModal).toEqual(true);
	});
});
