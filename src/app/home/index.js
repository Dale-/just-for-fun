/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/7/16
 */

import './_home.scss';

import angular from 'angular';
import homeTplUrl from './index.html';
import HomeController from './HomeController';

systemRouter.$inject = ['$stateProvider'];
function systemRouter($stateProvider) {

	$stateProvider.state('app.home', {
		url: 'home',
		templateUrl: homeTplUrl,
		controller: HomeController,
		controllerAs: 'vm'
	});
}

export default angular.module('app.home', [])
	.config(systemRouter)
	.name;
