/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/7/16
 */

import './_personal.scss';

import angular from 'angular';
import personalTplUrl from './index.html';
import PersonalController from './PersonalController';

personal.$inject = ['$stateProvider'];
function personal($stateProvider) {

	$stateProvider.state('app.personal', {
		url: 'personal',
		templateUrl: personalTplUrl,
		controller: PersonalController,
		controllerAs: 'vm'
	});
}

export default angular.module('app.personal', [])
	.config(personal)
	.name;
