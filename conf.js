var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    framework: 'jasmine',
    
    
    allScriptsTimeout: (90 * 1000),
    
    
    seleniumAddress: 'http://localhost:4444/wd/hub',


    onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: './reports/',
          cleanDestination: true,
          screenshotsFolder: 'images',
          takeScreenshots: true,
          takeScreenshotsOnlyOnFailures: true,
          fixedScreenshotName: true,
          fileNamePrefix: 'tutorial',
          cleanDestination: false,
          fileName: 'report-test',
          fileNameSeparator: '-'
        })
      );
    },
        
    specs: ['delete.mail.spec.js']
  }