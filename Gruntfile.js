module.exports = function (grunt) {
    /**
     * Project configuration
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js_distribution: {
                src: ['var/public/bower/jquery/dist/jquery.min.js',
                    'var/public/bower/bootstrap/dist/js/bootstrap.min.js',
                    'var/public/bower/particles.js/particles.js',
                    'var/public/assets/scripts/bootstrap.js'],
                dest: 'dist/script.js'
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
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-git-deploy');

    // Default tasks
    grunt.registerTask('default', []);

    /**
     * Deploy to a server
     */
    grunt.registerTask('deploy', "Deploys to a server", function () {

    });
};