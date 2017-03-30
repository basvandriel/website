module.exports = function (grunt) {
    /**
     * Project configuration
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        processhtml: {
            dist: {
                files: {
                    'dist/index.html': ['index.php']
                }
            }
        },
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

        /*
         Deployment
         */
        git_deploy: {
            your_target: {
                options: {
                    url: 'https://github.com/basvandriel/basvandriel.nl.git'
                },
                src: './dist/'
            }
        }
    });

    /**
     * Load tasks
     */
    grunt.loadNpmTasks('grunt-contrib-uglify');
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