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

	it('constructor', () => {
		expect(Object.keys(factory.menus)).toEqual([ 'HOME', 'PERSONAL', 'CONTACT', 'LOGIN', 'ABOUT' ]);
		expect(factory.menus.HOME.text).toEqual('Home');
	});
});
