import '../node_modules/angular';
import '../node_modules/angular-mocks';

const context = require.context('../src', true, /(spec|app)\.js$/);
context.keys().forEach(context);
