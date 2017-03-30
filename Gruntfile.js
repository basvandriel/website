module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });


    // Default tasks
    grunt.registerTask('default', []);

    /**
     * Deploy to a server
     */
    grunt.registerTask('deploy', "Deploys to a server", function () {

    });
};