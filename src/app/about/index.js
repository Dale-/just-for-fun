/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/7/16
 */

import './_about.scss';

import angular from 'angular';
import aboutTplUrl from './index.html';
import AboutController from './AboutController';

systemRouter.$inject = ['$stateProvider'];
function systemRouter($stateProvider) {

	$stateProvider.state('app.about', {
		url: 'about',
		templateUrl: aboutTplUrl,
		controller: AboutController,
		controllerAs: '$ctrl'
	});
}

export default angular.module('app.about', [])
	.config(systemRouter)
	.name;
