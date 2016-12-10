/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/10/16
 */

import './_login.scss';

import angular from 'angular';
import loginTplUrl from './index.html';
import LoginController from './LoginController';

homeRouter.$inject = ['$stateProvider'];
function homeRouter($stateProvider) {

	$stateProvider.state('app.login', {
		url: 'login',
		templateUrl: loginTplUrl,
		controller: LoginController,
		controllerAs: 'vm'
	});
}

export default angular.module('app.login', [])
	.config(homeRouter)
	.name;
