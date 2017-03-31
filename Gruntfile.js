module.exports = function (grunt) {
    /**
     * Project configuration
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /**
         * Minifies and uglifies javascript scripts
         */
        uglify: {
            my_target: {
                files: {
                    'dist/var/public/assets/scripts/libraries.min.js': ['var/public/bower/jquery/dist/jquery.min.js',
                        'var/public/bower/bootstrap/dist/js/bootstrap.min.js',
                        'var/public/bower/particles.js/particles.js'],
                    'dist/var/public/assets/scripts/bootstrap.min.js': ['var/public/assets/scripts/bootstrap.js']
                }
            }
        },

        /**
         * Minifies stylesheets
         */
        cssmin: {
            target: {
                files: [
                    // Library stylesheets
                    {
                        './dist/var/public/assets/stylesheets/libraries.min.css': [
                            './var/public/bower/components-font-awesome/css/font-awesome.min.css',
                            './var/public/bower/bootstrap/dist/css/bootstrap.min.css',
                            './var/public/bower/bootstrap/dist/css/bootstrap-theme.min.css'
                        ]
                    },

                    // Bootstrap stylesheets
                    {
                        expand: true,
                        cwd: 'var/public/assets/stylesheets/',
                        src: ['*.css'],
                        dest: 'dist/var/public/assets/stylesheets/',
                        ext: '.min.css'
                    },

                    // Specific page stylesheets
                    {
                        expand: true,
                        cwd: 'var/public/assets/stylesheets/pages/',
                        src: ['**/*.css'],
                        dest: 'dist/var/public/assets/stylesheets/pages/',
                        ext: '.min.css'
                    }
                ]
            }
        },

        /**
         * Copies project assets
         */
        copy: {
            main: {
                files: [
                    // Project fonts, images videos and configurations
                    {
                        expand: true,
                        src: [
                            'var/public/assets/fonts/*',
                            'var/public/assets/images/**',
                            'var/public/assets/videos/**',
                            'var/public/assets/particles.json'
                        ],
                        dest: 'dist/', filter: 'isFile'
                    },

                    // Font Awesome 4.7.0 deployment
                    {
                        expand: true,
                        cwd: 'var/public/bower/components-font-awesome/fonts/',
                        src: ['*'],
                        dest: 'dist/var/public/assets/fonts/',
                        filter: 'isFile'
                    },

                    // Particles.json deployment
                    {
                        expand: true,
                        src: [
                            'var/public/assets/particles.json'
                        ],
                        dest: 'dist/', filter: 'isFile'
                    }
                ]
            }
        },

        /**
         * HTML deployment with changing links
         */
        processhtml: {
            dist: {
                files: {
                    'dist/index.html': ['index.php']
                }
            }
        },

        /**
         * Github deployment
         *
         */
        git_deploy: {
            your_target: {
                options: {
                    url: 'https://github.com/basvandriel/basvandriel.nl.git'
                },
                src: 'dist/'
            }
        }
    });

    /**
     * Load tasks
     */
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-git-deploy');

    // Default tasks
    grunt.registerTask('default', []);

    /**
     * Deploy to a server
     */
    grunt.registerTask('deploy', "Deploys to a server", function () {
        grunt.task.run('uglify');
        grunt.task.run('cssmin');
        grunt.task.run('copy');
        grunt.task.run('processhtml');

        //TODO deploy to git
    });
};