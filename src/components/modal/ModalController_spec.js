/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/14/16
 */

import ModalController from './ModalController';

describe('ModalController', () => {

	let factory = null;

	beforeEach(() => {
		factory = new ModalController();
	});

	afterEach(() => {
		factory = null;
	});

	it('constructor', () => {
		expect(factory.infos.length).toEqual(2);
		expect(factory.infos[0].theme).toEqual('Travelling');
	});
});
