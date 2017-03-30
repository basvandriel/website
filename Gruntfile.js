module.exports = function (grunt) {
    /**
     * Project configuration
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        /*
         Uglify JS files
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

        cssmin: {
            target: {
                files: {
                    './dist/var/public/assets/stylesheets/libraries.min.css': [
                        './var/public/bower/components-font-awesome/css/font-awesome.min.css',
                        './var/public/bower/bootstrap/dist/css/bootstrap.min.css',
                        './var/public/bower/bootstrap/dist/css/bootstrap-theme.min.css'
                    ],

                    'dist/var/public/assets/stylesheets/bootstrap.min.css': [
                        './var/public/assets/stylesheets/bootstrap.css'
                    ],

                    'dist/var/public/assets/stylesheets/pages/home/home.min.css': [
                        './var/public/assets/stylesheets/pages/home/home.css'
                    ]
                }
            }
        },

        copy: {
            main: {
                files: [
                    // includes files within path
                    {
                        expand: true,
                        src: [
                            'var/public/assets/fonts/*',
                            'var/public/assets/images/**',
                            'var/public/assets/videos/**',
                            'var/public/assets/particles.json'
                        ],
                        dest: 'dist/', filter: 'isFile'
                    }
                ]
            }
        },

        processhtml: {
            dist: {
                files: {
                    'dist/index.html': ['index.php']
                }
            }
        },

        /*
         Deployment
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

    });
};