/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/7/16
 */

import angular from 'angular';
import demo from './demo';
import menu from './menu';
import modal from './modal';

export default angular
	.module('app.components', [
		demo,
		menu,
		modal
	])
	.name;
