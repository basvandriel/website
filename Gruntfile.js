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
        }
    });

    /**
     * Load tasks
     */
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default tasks
    grunt.registerTask('default', ['concat']);

    /**
     * Deploy to a server
     */
    grunt.registerTask('deploy', "Deploys to a server", function () {

    });
};