/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/7/16
 */

import './_about.scss';

import angular from 'angular';
import aboutTplUrl from './index.html';
import AboutController from './AboutController';

aboutRouter.$inject = ['$stateProvider'];
function aboutRouter($stateProvider) {

	$stateProvider.state('app.about', {
		url: 'about',
		templateUrl: aboutTplUrl,
		controller: AboutController,
		controllerAs: 'vm'
	});
}

export default angular.module('app.about', [])
	.config(aboutRouter)
	.name;
