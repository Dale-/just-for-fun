/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/7/16
 */

import './index.scss';
import '../common/styles/_base.scss';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import components from '../components';
import homeModule from './home';
import aboutModule from './about';
import contactModule from './contact';
import personalModule from './personal';

import appTplUrl from './index.html';

appRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
function appRouter($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');
	$stateProvider.state('app', {
		url: '/',
		templateUrl: appTplUrl
	});
}

export default angular
	.module('app', [
		components,
		uiRouter,
		ngResource,
		homeModule,
		aboutModule,
		contactModule,
		personalModule
	])
	.config(appRouter)
	.run(['$rootScope', '$state', ($rootScope, $state) => {
		$rootScope.$state = $state;
	}])
	.name;
