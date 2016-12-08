/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/8/16
 */

import './_contact.scss';

import angular from 'angular';
import contactTplUrl from './index.html';
import ContactController from './ContactController';

contactRouter.$inject = ['$stateProvider'];
function contactRouter($stateProvider) {

	$stateProvider.state('app.contact', {
		url: 'contact',
		templateUrl: contactTplUrl,
		controller: ContactController,
		controllerAs: 'vm'
	});
}

export default angular.module('app.contact', [])
	.config(contactRouter)
	.name;
