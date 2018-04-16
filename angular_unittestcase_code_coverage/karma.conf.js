//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './src',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app.js',
      './controllers/mainapp.controller.js',
      './test/resources/stories/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-js-coverage'
    ],
    preprocessors:{'controllers/mainapp.controller.js':'coverage'},
    reporters:['progress','junit','coverage'],
    coverageReporter:{type:'html',dir:'test/reports/unit/coverage'},
    junitReporter: {
      outputDir: 'test/reports/unit',
      outputFile:'unit.xml',
      useBrowserName:false,
      suite: 'unit'
    }

  });
};
