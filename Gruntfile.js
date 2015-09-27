module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      compile: {
        options: {
          config: 'config.rb'
        }
      }
    },

    watch: {
      options: {
        livereload: 35729
      },

      html: {
        files: ['./**/*.html'],
        tasks: ['']
      },

      scss: {
        files: ['css/sass/*.scss'],
        tasks:['compass']
      },

    }

  });

  //plugin
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  //task
  grunt.registerTask('default', ['compass','watch']);

};