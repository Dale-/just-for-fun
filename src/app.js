/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/6/16
 */

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import angular from '../node_modules/angular';
import ngResource from '../node_modules/angular-resource';

import AppController from './app/AppController';

angular.module('App', [ngResource])
	.controller('AppController', AppController);
