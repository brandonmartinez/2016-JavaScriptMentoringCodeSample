module.exports = function (grunt) {
    'use strict';

    // Using load-grunt-tasks to automatically load all grunt task modules
    require('load-grunt-tasks')(grunt);

    // Common Paths
    var scriptPaths = ['Gruntfile.js', 'app.js', 'lib/**/*.js'];

    // Project configuration
    grunt.initConfig({
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                },
            },
            app: scriptPaths
        },
        watch: {
            scripts: {
                files: scriptPaths,
                tasks: ['jshint:app']
            }
        }
    });

    // Default task
    grunt.registerTask('default', ['jshint']);
};