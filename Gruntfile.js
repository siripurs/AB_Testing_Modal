'use strict';

module.exports = function(grunt){

  /* Configure
  ============================ */
  var configs = {   
    
    css_combine_files : [
      'src/vendor/css/bootstrap.min.css',
      'src/vendor/css/bootstrap-modal.css',
      'src/css/combined.css'],
    
    js_combine_files : [
      'src/vendor/js/jquery-1.10.1.min.js',
      'src/vendor/js/bootstrap.min.js',
      // 'src/vendor/js/bootstrap-modalmanager.js',
      // 'src/vendor/js/bootstrap-modal.js',
      'src/js/main.js'],
    
    js_hint_files : [
      'src/js/main.js'],

    watch_files : [
      'src/less/*',
      'src/js/*',
      'src/vendor/css/*',
      'src/vendor/js/*']
  }

  /* Init
  ============================ */
  grunt.initConfig({
    less: {
      production: {
        files: {
          "src/css/combined.css" : "src/less/main.less"
        }
      }
    },
    jshint: {
      beforeconcat: configs.js_hint_files
    },
    'http-server': {
        'dev': {
            root   : "",
            host   : "localhost",
            port   : function(){ return 8000; },
            https  : true
        }
    },
    copy : {
      docs: {
          files: [
            {
              expand: true,
              cwd: 'src/fonts/',
              src: ['**'],
              dest: 'dist/fonts'
            },
            {
              expand: true,
              cwd: 'src/images/',
              src: ['**'],
              dest: 'dist/images'
            }
          ]
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: configs.js_combine_files,
        dest: 'src/js/compiled.js',
      },
    },
    uglify: {
        my_target: {
          files: {
            'dist/js/compiled.min.js' : 'src/js/compiled.js'
          }
        }
    },
    cssmin: {
      combine: {
        files: {
          'dist/css/main.min.css' : configs.css_combine_files
        }
      }
    },
    watch: {
      src: {
        files: configs.watch_files,
        tasks: ['build']
      }
    }
  });

  // Add plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-http-server');


  // Register tasks
  grunt.registerTask('build', ['less','cssmin','concat','uglify','jshint', 'copy']);
  grunt.registerTask('watch', ['less','cssmin','concat','uglify','jshint', 'copy']);
  grunt.registerTask('default', ['less','cssmin','concat','uglify','jshint']);

  grunt.event.on('watch', function(action, filepath) {
    grunt.log.writeln(filepath + ' has ' + action);
  });

};
