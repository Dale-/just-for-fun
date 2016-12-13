/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/13/16
 */

import MenuController from './MenuController';

describe('MenuController', () => {

	let factory = null;

	beforeEach(() => {
		factory = new MenuController();
	});

	afterEach(() => {
		factory = null;
	});

	it('initMenu', () => {
		expect(Object.keys(factory.initMenu())).toEqual(["HOME", "ABOUT", "PERSONAL", "CONTACT", "LOGIN"]);
		expect(factory.initMenu().HOME.text).toEqual('Home');
	});

});
