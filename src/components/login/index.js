/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 2/1/17
 */

import './_login.scss';

import template from './login.tpl.html';
import controller from './LoginController';

import angular from 'angular';

const DDO = {
	template,
	controller,
	controllerAs: 'vm'
};

export default angular.module('app.components.login', [])
	.component('login', DDO)
	.name;
