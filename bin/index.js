#!/usr/bin/env node

require('babel-polyfill');
require('babel-register')({
	ignore: false,
	only: /ccms-svg-icons\/libs/
});
require('../libs/index');