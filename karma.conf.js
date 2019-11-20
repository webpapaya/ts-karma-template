// Karma configuration
// Generated on Wed Nov 20 2019 18:00:14 GMT+0100 (GMT+01:00)

module.exports = function(config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript", 'jasmine-matchers'],

        files: [
            { pattern: "src/**/*.ts" }
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        preprocessors: {
            "src/**/*.ts": ["karma-typescript"]
        },

        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        restartOnFileChange: true
    })
}