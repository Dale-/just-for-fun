/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/13/16
 */

import './_menu.scss';
import angular from 'angular';
import template from './menu.tpl.html';
import controller from './MenuController';

const DDO = {
	template,
	controller,
	controllerAs: 'vm'
};

export default angular.module('app.components.menu', [])
	.component('menu', DDO)
	.name;
