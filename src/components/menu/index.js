/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/13/16
 */

import './_menu.scss';

import template from './menu.tpl.html';
import controller from './MenuController';

import angular from 'angular';

const DDO = {
	template,
	controller,
	controllerAs: 'vm',
	bindings: {
		state: '<'
	}
};

export default angular.module('app.components.menu', [])
	.component('menu', DDO)
	.name;
