/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/8/16
 */

import DemoController from './DemoController';

describe('DemoController', () => {

	let factory = null;

	beforeEach(() => {
		factory = new DemoController();
	});

	afterEach(() => {
		factory = null;
	});

	it('add', () => {
		expect(factory.add(1, 2)).toBe(3);
	});

});
