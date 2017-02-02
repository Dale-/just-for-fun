/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/7/16
 */

import angular from 'angular';
import menu from './menu';
import modal from './modal';
import login from './login';

export default angular
	.module('app.components', [
		menu,
		modal,
		login
	])
	.name;
