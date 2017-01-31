/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 2/1/17
 */

import ContactController from './ContactController';

describe('ContactController', () => {

	let contact = null;

	beforeEach(() => {
		contact = new ContactController();
	});

	afterEach(() => {
		contact = null;
	});

	it('constructor', () => {
		expect(contact.name).toEqual('contact');
		expect(contact.selectedDuration).toEqual('monthly');
		expect(contact.feedbacks.length).toEqual(3);
	});

	it('changeDuration', () => {
		contact.changeDuration('annual');
		expect(contact.selectedDuration).toEqual('annual');
	});
});
