/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/14/16
 */

import './_modal.scss';

import template from './modal.tpl.html';
import controller from './ModalController';

import angular from 'angular';

const DDO = {
	template,
	controller,
	controllerAs: 'vm'
};

export default angular.module('app.components.modal', [])
	.component('modal', DDO)
	.name;
