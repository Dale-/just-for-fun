/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/8/16
 */

import 'angular';
import 'angular-mocks';

const context = require.context('../src', true, /(spec|app)\.js$/);
context.keys().forEach(context);
