module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            my_target: {
                files: {
                    'compressed.js': ['var/public/bower/jquery/dist/jquery.min.js', "var/public/bower/bootstrap/dist/js/bootstrap.min.js",
                                        "var/public/bower/particles.js/particles.js", "var/public/assets/scripts/bootstrap.js"]
                }
            },
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',

            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};