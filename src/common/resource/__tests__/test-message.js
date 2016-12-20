/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/20/16
 */

import angular from 'angular';
import ngResource from 'angular-resource';
import injector from 'angular-es-utils/injector';

describe('message resource', () => {

	let messageResource = null;
	let success = null;
	let error = null;
	let $httpBackend = null;
	let $resource = null;

	beforeAll(() => {
		document.documentElement.setAttribute('ng-app', 'AppForTest');
		angular.module('AppForTest', [ngResource]);
	});

	// angular-es-utils/injector 获取 injector 有 bug, 必须 AngularJS 初始化完成, 才可以得到
	// 因为 Angular 启动完, 会做一次脏检查, 所以使用 setTimeout 引入, 加入到 event loop 里
	beforeEach(done => {

		window.setTimeout(() => {

			success = jasmine.createSpy('success');
			error = jasmine.createSpy('error');

			angular.mock.module('AppForTest');

			angular.mock.inject((_$httpBackend_, _$resource_) => {
				$httpBackend = _$httpBackend_;
				$resource = _$resource_;
			});

			spyOn(injector, 'get').and.returnValues($resource);

			messageResource = require('../message').messageResource;

			done();
		});
	});

	afterEach(() => {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
		$httpBackend = null;
		$resource = null;
		success = error = null;
		document.documentElement.removeAttribute('ng-app', 'AppForTest');
	});


	it('message Resource', () => {

		// 获取聊天记录(byId)
		$httpBackend.when('GET', '/just-for-fun/1.0/message/1')
			.respond(200);

		messageResource.get({ messageId: 1 }).$promise.then(success).catch(error);

		// 获取聊天记录(all)
		$httpBackend.when('GET', '/just-for-fun/1.0/messages')
			.respond(200);

		messageResource.query().$promise.then(success).catch(error);

		$httpBackend.flush();

		expect(success).toHaveBeenCalled();
		expect(success).toHaveBeenCalledTimes(2);
	});

});
