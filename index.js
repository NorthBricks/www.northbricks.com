var Metalsmith   = require('metalsmith');
var markdown     = require('metalsmith-markdown');
var layouts      = require('metalsmith-layouts');
var permalinks   = require('metalsmith-permalinks');
var htmlMinifier = require('metalsmith-html-minifier');
var uglify       = require('metalsmith-uglify');
var sass         = require('metalsmith-sass');

Metalsmith(__dirname)
  .metadata({
    title: "Northbricks - Empowering the financial ecosystem"
  })
  .source('./src')
  .destination('./build')
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars'
  }))
  .use(htmlMinifier())
  .use(uglify({
    removeOriginal: true
  }))
  .use(sass())
  .build(function(err, files) {
    if (err) { throw err; }
  });
