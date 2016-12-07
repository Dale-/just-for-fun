/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/7/16
 */

import './_demo.scss';

import template from './demo.tpl.html';
import controller from './DemoController';

import angular from 'angular';

const gridDDO = {
	template,
	controller,
	controllerAs: 'vm',
	bindings: {
		columnsDef: '<',
		data: '<'
	}
};

export default angular.module('app.components.demo', [])
	.component('demo', gridDDO)
	.name;
