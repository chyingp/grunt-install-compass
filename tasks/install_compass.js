/*
 * grunt-install-compass
 * https://github.com/chyingp/grunt-install-compass
 *
 * Copyright (c) 2013 chyingp
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	var path = require('path');

	grunt.registerMultiTask('install_compass', 'Your task description goes here.', function() {

		console.log('grunt-install-compass 开始!');

		console.log(process.cwd());
		var path = require('path');
		var spawn = require('child_process').spawn,
			ls = spawn('sudo', ['gem', 'install', '--local', 'compass-0.12.2.gem'], {
				cwd: path.resolve( process.cwd(), 'node_modules/grunt-install-compass/tasks/compass' ),
				stdio: ['pipe', 'pipe', 'pipe']
			});

		console.log('current path: '+process.cwd());

		ls.stdout.on('data', function (data) {
			console.log('stdout: ' + data);
		});

		ls.stderr.on('data', function (data) {
			console.log('stderr: ' + data);
		});

		ls.on('close', function (code) {
			console.log('child process exited with code ' + code);
		});
		console.log('grunt-install-compass 结束!');

	});

};