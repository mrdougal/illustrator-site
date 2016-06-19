var Metalsmith = require('metalsmith'),
    markdown   = require('metalsmith-markdown'),
    metalsmithExpress = require('metalsmith-express'),
    watch      = require('metalsmith-watch'),
    templates  = require('metalsmith-templates'),
    sass       = require('metalsmith-sass'),
    Handlebars = require('handlebars'),
    fs         = require('fs');

Handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/templates/partials/footer.hbt').toString());


Metalsmith(__dirname)
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