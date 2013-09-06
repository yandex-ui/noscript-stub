module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ''
            },
            css: {
                src: [
                    'node_modules/noscript/css/noscript.css',
                    'css/**/*.css'
                ],
                dest: 'dist/<%= pkg.name %>.css'
            },
            js: {
                src: [
                    'js/**/*.js',
                    'layouts/**/*.js',
                    'models/**/*.js',
                    'routes/**/*.js',
                    'views/**/*.js'
                ],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        watch: {
            files: [
                '<%= concat.css.src %>',
                '<%= concat.js.src %>'
            ],
            tasks: ['concat']
        },
        yate: {
            options: {
                runtime: true
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.yate.js': [
                        'node_modules/noscript/yate/noscript.yate',
                        'views/prj.yate',
                        'views/*/*.yate'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-yate');

    grunt.registerTask('default', ['concat', 'yate']);

};
