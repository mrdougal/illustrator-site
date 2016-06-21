var Metalsmith        = require('metalsmith'),
    metalsmithExpress = require('metalsmith-express'),
    concat            = require('metalsmith-concat'),
    markdown          = require('metalsmith-markdown'),
    watch             = require('metalsmith-watch'),
    templates         = require('metalsmith-templates'),
    sass              = require('metalsmith-sass'),
    Handlebars        = require('handlebars');


Metalsmith(__dirname)
    .use(concat({
        files: [
            'jquery/dist/jquery.min.js',
            'slick-carousel/slick/slick.min.js',
            'js/index.js' // will be resolved from the directory given to Metalsmith
        ],
        searchPaths: [ 'node_modules' ],
        output: 'js/site.js'
    }))
    .use(markdown())
    .use(templates('handlebars'))
    .use(sass({ outputStyle: "expanded" }))
    .destination('./build')
    .use(metalsmithExpress())
    .use(
        watch({
            paths: { 
                '${source}/**/*': true 
            },
            livereload: true
        })
    )
    .build(function(err, ok) {
        if (err) {
            throw err;
        } else {
            console.info('Build was successful');
        }
    });